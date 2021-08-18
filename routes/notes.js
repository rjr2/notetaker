const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fsUtils = require('../helpers/fsUtils')


router.get('/', (req, res) =>
  fsUtils.getNotes().then(notes => res.json(notes)).catch(err => res.json(err))
);


router.post('/', (req, res) => {
  fsUtils.addNote(req.body).then(notes => res.json(notes)).catch(err => res.json(err))
});

module.exports = router;
