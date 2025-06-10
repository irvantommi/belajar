const API_URL = process.env.REACT_APP_API_URL || "/api";

export async function register(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function getProtected(token: string) {
  const res = await fetch(`${API_URL}/protected`, {
    headers: { Authorization: token },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}