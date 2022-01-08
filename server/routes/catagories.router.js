const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {

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


router.get('/:id', (req, res) => {

  const query = 
  `SELECT  seeds.id, catagory, path FROM inventory
  JOIN seeds ON inventory.seed_id = seeds.id
  WHERE user_id=${req.params.id}
  GROUP BY seeds.id
  ORDER BY catagory ASC;`;
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
  // POST route code here
});

module.exports = router;
