export interface LoginProps {
  setToken: (token: string) => void;
}

export interface HomeProps {
  token: string;
}

export interface AuthResponse {
  token: string;
} 