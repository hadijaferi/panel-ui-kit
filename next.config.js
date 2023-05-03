/** @type {import('next').NextConfig} */
const path = require('path');
const withPlugins = require('next-compose-plugins');

const withSvgr = require('next-plugin-svgr');
module.exports = withPlugins(
    [withSvgr],
    {
      sassOptions: {
        includePaths: [path.join(__dirname)],
      }
    }
)

