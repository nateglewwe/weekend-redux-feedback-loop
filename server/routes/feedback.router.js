const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log('In POST request');
    //POST query text
    let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    let queryArgs = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query(queryText, queryArgs)
    .then((result) => {
        console.log('Feedback added to DB', req.body);
        res.sendStatus(201);
    }).catch((err) => {
        console.log('ERROR in POST DB Query:', err);
        res.sendStatus(500);
    });

});


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
