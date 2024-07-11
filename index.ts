import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Proxy configuration
const options = {
    target: process.env.HOST,
    changeOrigin: true,
};

// Create the proxy
app.use('/', createProxyMiddleware(options));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});
