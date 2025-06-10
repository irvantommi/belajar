import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [page, setPage] = useState<"login" | "register" | "home">("login");

  if (!token) {
    return (
      <div>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("register")}>Register</button>
        {page === "login" ? <Login setToken={setToken} /> : <Register />}
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => setToken(null)}>Logout</button>
      <Home token={token} />
    </div>
  );
}

export default App;