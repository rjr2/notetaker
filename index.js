const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const notes = require("./db/db");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extender: false }));

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Navigate to /send or /routes"));

app.get("/send", (req, res) =>
  res.sendFile(path.join(__dirname, "public/sendFile.html"))
);

app.get("/routes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/routes.html"))
);

app.listen(PORT, () => console.log(`***Server listening at PORT ${PORT}***`));
