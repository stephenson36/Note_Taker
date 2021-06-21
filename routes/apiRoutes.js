const notesData = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    res.json(notesData);
  });

  app.post('/api/notes', (req, res) => {
    notesData.push(req.body);
  });

  // app.put('/api/notes/:id', function(req,res) {
  //   notesData.push(uuidv4());
  //   res.json(true);
  // });

};
