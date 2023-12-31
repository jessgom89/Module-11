const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.log(req.body);

  const { title,text } = req.body;

  if (req.body) {
    const newnotes = {
     title, text, 
   
      id: uuid(),
    };

    const paseddata=readAndAppend(newnotes, './db/db.json');
    res.json(paseddata);
  } else {
    res.error('Error in adding notes');
  }
});

module.exports = notes;
