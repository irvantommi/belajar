import React, { useEffect, useState } from "react";
import { getProtected } from "../services/api";
import { connectWebSocket } from "../services/ws";

export default function Home({ token }: { token: string }) {
  const [message, setMessage] = useState("");
  const [wsMessage, setWsMessage] = useState("");
  useEffect(() => {
    getProtected(token)
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Not authorized"));
    const ws = connectWebSocket((msg) => setWsMessage(msg));
    return () => ws.close();
  }, [token]);
  return (
    <div>
      <h2>{message}</h2>
      <h3>WebSocket echo:</h3>
      <div>{wsMessage}</div>
    </div>
  );
}