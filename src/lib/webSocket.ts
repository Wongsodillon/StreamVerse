import { io } from "socket.io-client";

const socket = io("https://streamverse-hedera-backend.onrender.com", {
  transports: ["websocket", "polling"],
});

export default socket;
