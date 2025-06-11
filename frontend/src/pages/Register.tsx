import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../services/auth";

export default function Register() {
  const handleSubmit = async (email: string, password: string) => {
    try {
      await register(email, password);
      alert("Registration successful! Please login.");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return <AuthForm onSubmit={handleSubmit} buttonText="Register" />;
}