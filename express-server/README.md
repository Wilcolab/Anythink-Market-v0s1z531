# FILE: /express-server/express-server/README.md

# Express Server Project

This is a simple Express server project that listens on port 8001. It is set up to use Nodemon for automatic restarts on code changes.

## Getting Started

### Prerequisites

- Node.js
- Yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic restarts, use the following command:
```
yarn start
```

The server will be running at `http://localhost:8001`.

### Docker

To build and run the server using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server
   ```

### License

This project is licensed under the MIT License.