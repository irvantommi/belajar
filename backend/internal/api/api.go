package api

import (
	"net/http"
)

func RegisterHandlers(mux *http.ServeMux) {
	mux.HandleFunc("/api/health", healthHandler)
	mux.HandleFunc("/api/auth/register", RegisterHandler)
	mux.HandleFunc("/api/auth/login", LoginHandler)
	mux.HandleFunc("/api/protected", AuthMiddleware(ProtectedHandler))
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"status":"ok"}`))
}

func ProtectedHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(`{"message":"This is a protected route!"}`))
}