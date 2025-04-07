import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from the dist directory
// app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static('dist'));

// Handle all routes by serving the index.html
app.get("*", (_, res) => {
    // res.sendFile(path.join(__dirname, "dist", "index.html"));
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
// app.listen(Number(port), "0.0.0.0", () => {
    app.listen(Number(port), () => {
    console.log(`Server is running on port ${port}`);
});
