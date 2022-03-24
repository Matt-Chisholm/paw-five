// Route /api/home...
const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // test route
  router.get("/", (req, res) => {
    db.query(`
      SELECT * 
      FROM users;
    `)
    .then(result => {
      res.send(result)
    })
    .catch(error =>{
      res.send(error)
    })
  });

  // get the user based on login
  router.get("/users/:id", (req, res) =>{
    const userId = req.params.id;
    db.query(`
      SELECT * 
      FROM users
      WHERE users.id = $1;
    `, [userId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log("error", error);
      res.send(error)
    })
  });

  // get the user image
  router.get("/users/image/:id", (req, res) =>{
    const userId = req.params.id;
    db.query(`
      SELECT image 
      FROM users
      WHERE users.id = $1;
    `, [userId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log("query error", error);
      res.send(error)
    })
  });

  // get days of the week and values for rainbow charts
  router.get("/days", (req, res) => {
    db.query(`
      SELECT * 
      FROM days;
    `)
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log("query error", error);
      res.send(error)
    })
  })

  // search for any session that were created today
  router.get("/days/:id", (req, res) => {
    const date = req.params.id;
    db.query(`
    SELECT * 
    FROM sessions
    WHERE timestamp LIKE '$1%'
    `, [date])
    .then(result => {
      console.log("TJ route ", result);
      res.send(result.rows)
    })
    .catch(error => {
      console.log("query error", error);
      res.send(error)
    })
  })

  return router;
};