export function connectWebSocket(onMessage: (msg: string) => void) {
  const ws = new WebSocket("ws://localhost:8080/ws");
  ws.onmessage = (event) => {
    onMessage(event.data);
  };
  return ws;
}