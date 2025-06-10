import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../services/api";

export default function Register() {
  async function handleRegister(email: string, password: string) {
    try {
      await register(email, password);
      alert("Registration successful. Please login.");
    } catch (err) {
      alert("Registration failed");
    }
  }
  return <AuthForm onSubmit={handleRegister} buttonText="Register" />;
}