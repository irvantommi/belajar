import axios from "axios";
import { AuthResponse } from "../types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const register = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/auth/register`, { email, password });
  return response.data;
}; 