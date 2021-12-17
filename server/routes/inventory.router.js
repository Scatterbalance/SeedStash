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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
