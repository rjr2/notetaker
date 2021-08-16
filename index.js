const express = require("express");
const path = require('path');
const notes = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use('/notes', require('./routes/notes'));


app.listen(PORT, () => console.log(`***Server listening at PORT ${PORT}***`));
