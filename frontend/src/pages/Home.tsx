import React, { useEffect, useState } from "react";
import { HomeProps } from "../types";
import { getProtected } from "../services/api";
import { connectWebSocket } from "../services/ws";

export default function Home({ token }: HomeProps) {
  const [message, setMessage] = useState<string>("");
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
      <h1>Home</h1>
      <p>{message}</p>
      <h3>WebSocket echo:</h3>
      <div>{wsMessage}</div>
    </div>
  );
}