const express = require("express");
const path = require('path');
const db = require("./db/db.json")

const app = express();
const PORT = process.env.PORT || 3001;


app.get("/", (req, res) => res.json(db));

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`***Server listening at PORT ${PORT}***`));
