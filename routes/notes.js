const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('/notes.html', {root: 'public'})
});

module.exports = router;