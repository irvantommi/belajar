package main

import (
	"log"
	"net/http"
	"os"

	"your-app/internal/api"
	"your-app/internal/db"
	"your-app/internal/ws"
)

func main() {
	// Connect to DB
	db.Init()

	mux := http.NewServeMux()
	api.RegisterHandlers(mux)
	ws.RegisterWebSocketHandlers(mux)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Starting server on :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}