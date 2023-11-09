import { setClient } from "@/store/actions/webSocketAction";
import { PLAY_ENUM_SOCKET } from "@/types/enum";
import { jsonToWebsocket } from "@/utils/websocket";
import { useDispatch } from "react-redux";
import { useWebSocket } from "./useWebSocket";
import { useMessagePlaySocket } from "@/hooks/useMessagePlaySocket";
import { generateRandomString } from "@/utils";

const W3CWebSocket = require('websocket').w3cwebsocket;

export function usePlayWebSocket() {
  const dispatch = useDispatch()
  const { sendMessageWidthClient } = useWebSocket()
  const { handlMessagePlaySocket } = useMessagePlaySocket()

  const initSocket = async (room: number | string, type?: string, user?: string | number) => {
    const client = new W3CWebSocket(`${process.env.NEXT_PUBLIC_SOCKET_URL}?path=play&room=${12354}&user=${user}`, 'echo-protocol')
    dispatch(setClient(client))

    client.onerror = function () {
      console.log('Connection Error');
    };

    client.onopen = function () {
      console.log('Connected');
      if (type === PLAY_ENUM_SOCKET.JOIN) {
        const message = jsonToWebsocket({
          type: PLAY_ENUM_SOCKET.JOIN
        });
        sendMessageWidthClient(client, message);
      }
    };

    client.onclose = function () {
      console.log('Client Closed');
    };

    client.onmessage = async function (e: any) {
      handlMessagePlaySocket(e)
    }
  }

  return {
    initSocket
  }
}