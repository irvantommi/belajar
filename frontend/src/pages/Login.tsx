import React from "react";
import { LoginProps } from "../types";
import AuthForm from "../components/AuthForm";
import { login } from "../services/auth";

export default function Login({ setToken }: LoginProps) {
  const handleSubmit = async (email: string, password: string) => {
    try {
      const response = await login(email, password);
      setToken(response.token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return <AuthForm onSubmit={handleSubmit} buttonText="Login" />;
}