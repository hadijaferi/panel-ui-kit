const fs = require("fs");
const dotenv = require("dotenv");
// eslint-disable-next-line import/no-extraneous-dependencies
const withImages = require("next-images");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const cp = require("child_process");
const packageJson = require("./package");

const date = new Date();

const NODE_ENV = (process.env.NODE_ENV || "development").trim();
const pkg = require("./package.json");

const envConfig = dotenv.parse(fs.readFileSync(`.env.${NODE_ENV}`));
const gitSha = cp.execSync("git rev-parse --short HEAD", {
    cwd: __dirname,
    encoding: "utf8",
});
const {
    NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
    SENTRY_ORG,
    SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN,
    SENTRY_URL,
    API_URL,
    API_BASE,
    API_PORT,
    SOCKET_API,
} = envConfig;
console.log(`load environment : .env.${NODE_ENV}`);

process.env.SENTRY_DSN = SENTRY_DSN;
module.exports = withImages({
    productionBrowserSourceMaps: true,
    publicRuntimeConfig: {
        API_URL,
        API_PORT,
        API_BASE,
        SENTRY_DSN: process.env.SENTRY_DSN,
        SOCKET_API,
    },
    env: {
        BUILD_TIME: date.toString(),
        BUILD_TIMESTAMP: +date,
        APP_NAME: packageJson.name,
        APP_VERSION: packageJson.version,
    },
    generateEtags: false,
    generateBuildId: async () => {
        return String(pkg.version);
    },
    webpack: (config, options) => {
        // this code for problem build css chunks
        if (config.optimization.splitChunks) {
            config.optimization.splitChunks.cacheGroups.shared = {
                name: "app-other",
                test: /\.css$/,
                chunks: "all",
                enforce: true,
            };
        }
        // building the browser's bundle
        if (!options.isServer) {
            config.resolve.alias["@sentry/node"] = "@sentry/browser";
        }

        // Define an environment variable so source code can check whether or not
        // it's running on the server so we can correctly initialize Sentry
        config.plugins.push(
            new options.webpack.DefinePlugin({
                "process.env.NEXT_IS_SERVER": JSON.stringify(
                    options.isServer.toString(),
                ),
            }),
        );
        // When all the Sentry configuration env variables are available/configured
        // The Sentry webpack plugin gets pushed to the webpack plugins to build
        // and upload the source maps to sentry.
        // This is an alternative to manually uploading the source maps
        // Note: This is disabled in development mode.
        if (
            SENTRY_DSN &&
            SENTRY_ORG &&
            SENTRY_PROJECT &&
            SENTRY_AUTH_TOKEN &&
            NODE_ENV === "production"
        ) {
            config.plugins.push(
                new SentryWebpackPlugin({
                    include: ".next",
                    ignore: ["node_modules"],
                    urlPrefix: `~/_next`,
                    project: SENTRY_PROJECT,
                    release: `${SENTRY_PROJECT}_${packageJson.version}_${gitSha}`,
                    authToken: SENTRY_AUTH_TOKEN,
                    org: SENTRY_ORG,
                    url: SENTRY_URL,
                }),
            );
        }
        return config;
    },
});
