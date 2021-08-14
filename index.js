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


app.listen(PORT, () => console.log(`***Server listening at PORT ${PORT}***`));
