import React from "react";
import AuthForm from "../components/AuthForm";
import { login } from "../services/api";

export default function Login({ setToken }: { setToken: (token: string) => void }) {
  async function handleLogin(email: string, password: string) {
    try {
      const res = await login(email, password);
      setToken(res.token);
      alert("Login successful");
    } catch (err) {
      alert("Login failed");
    }
  }
  return <AuthForm onSubmit={handleLogin} buttonText="Login" />;
}