import io from "socket.io-client";
import getConfig from "next/config";
import { getCookie } from "../../../../../utils/Cookie/cookie";

const { publicRuntimeConfig } = getConfig();
const { SOCKET_API } = publicRuntimeConfig;

const initGlobalSocket = (): SocketIOClient.Socket => {
  const token =
    localStorage.getItem("chatToken") || getCookie("chatToken") || "";
  return io(SOCKET_API, {
    query: {
      token,
    },
    reconnection: true,
    reconnectionDelay: 500,
    reconnectionAttempts: 9999,
  });
};

const GlobalSocket = initGlobalSocket();

export default GlobalSocket;
