const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {

  const query = 
  `SELECT first_name, last_name, catagory, name, source, notes FROM inventory
  JOIN seeds ON inventory.seed_id = seeds.id
  JOIN "user" ON inventory.user_id = "user".id;`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get inventory', err);
      res.sendStatus(500)
    })

});

router.get('/catagories', (req, res) => {

  const query = 
  `SELECT * FROM seeds`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get seeds', err);
      res.sendStatus(500)
    })

});



/**
 * POST route template
 */
router.post('/', (req, res) => {
  
    const queryString = ` INSERT INTO "inventory" (seed_id, indoor, expiration, notes, current_year, quantity, user_id, name, source )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
    values = [ req.body.seed_id, req.body.indoor, req.body.expiration, req.body.notes, req.body.current_year, req.body.quantity, req.body.user_id, req.body.name, req.body.source ];
    pool.query( queryString, values).then( (results)=>{
      res.sendStatus( 200 );
    }).catch( (err)=>{
      console.log( err );
      res.sendStatus( 500 );
    })
  
  
});

module.exports = router;
