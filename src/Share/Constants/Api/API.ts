import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = {
  SERVER: publicRuntimeConfig.API_URL,
  PORT: publicRuntimeConfig.API_PORT,
  BASE: publicRuntimeConfig.API_BASE,
};

export const API_BASE = API.SERVER + API.PORT + API.BASE;
