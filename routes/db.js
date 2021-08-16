const express = require('express');
const router = express.Router();
const db = require('./db/db.json');

router.get('/', (req, res) => res.json(db));

router.post('/', (req, res) => {
    res.send(req.body)
});

module.exports = router;
