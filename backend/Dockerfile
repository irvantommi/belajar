# Use the official Go image as the base image
FROM golang:1.21-alpine

# Set the working directory
WORKDIR /app

# Copy the entire project
COPY . .

# Download and tidy dependencies
RUN go get github.com/golang-jwt/jwt/v5@v5.0.0 && \
    go get github.com/gorilla/websocket@v1.5.0 && \
    go get github.com/lib/pq@v1.10.9 && \
    go get golang.org/x/crypto@v0.17.0 && \
    go mod tidy

# Build the application
RUN go build -o main ./cmd

# Expose the port
EXPOSE 8080

# Command to run the executable
CMD ["./main"] 