# Corsan Proxy Server

This is a simple proxy server setup using Express, http-proxy-middleware, and CORS. The server configuration is managed
through environment variables.

## Prerequisites

- [Bun](https://bun.sh) - Ensure you have Bun installed.

## Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:omaratta212/Corsan.git
   cd Corsan
   ```

2. Install dependencies:
   ```sh
    bun install
   ```

3. Copy .env.example to .env:

    ```sh
    cp .env.example .env
    ```
4. Update your env file

    1. The variable `HOST` is the host of the server you want to proxy to.
    2. The variable `PORT` is the port you want the proxy server to listen on.

## Usage

1. Start the server:

   ```sh
   bun start
   ```

2. Access the server at `http://localhost:PORT`.

   The proxy server will start and listen on the port specified in the .env file. By default, it will log:
   ```shell
    Proxy server is running on http://localhost:5500
    ```

## Project Structure

The project structure is as follows:

```
├── .env
├── package.json
├── proxy-server.js
└── ReadMe.md
```

## Dependencies
- express - Fast, unopinionated, minimalist web framework for Node.js.
- http-proxy-middleware - A flexible proxy middleware for connecting and transforming requests.
- cors - A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- dotenv - Loads environment variables from a .env file into process.env.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

