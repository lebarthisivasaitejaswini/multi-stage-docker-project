const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.json({message: "Cloud Docker Demo is running", status: "healthy"}));
app.get("/health", (req, res) => res.status(200).json({status: "ok"}));

app.listen(PORT, "0.0.0.0", () => console.log(`Server listening on port ${PORT}`));
