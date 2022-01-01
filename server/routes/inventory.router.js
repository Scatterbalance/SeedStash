const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/:id', (req, res) => {
   console.log(req.params.id);

  const query = 
  `SELECT inventory.id, catagory, name, quantity, expiration, indoor, current_year, user_id, notes, seed_id, source FROM inventory
  JOIN seeds ON inventory.seed_id = seeds.id
  WHERE user_id=${req.params.id};`;
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

//PUT route
router.put('/', (req, res) => {
  console.log("body:",req.body);
  console.log("query:",req.query);

  const queryString = `UPDATE "inventory" SET seed_id=$1 , indoor=$2, expiration=$3, notes=$4, current_year=$5, quantity=$6, user_id=$7, name=$8, source=$9 WHERE id=$10;`;
  const values = [ req.body.seed_id, req.body.indoor, req.body.expiration, req.body.notes, req.body.current_year, req.body.quantity, req.body.user_id, req.body.name, req.body.source, req.body.id ];
  pool.query( queryString, values).then( (results)=>{
    res.sendStatus( 200 );
  }).catch( (err)=>{
    console.log( err );
    res.sendStatus( 500 );
  })
});




//delete route

router.delete('/:id', (req, res) => {
console.log(req.params.id );

  const queryString = `DELETE FROM inventory WHERE id=$1`;
  values = [ req.params.id ];
  pool.query( queryString, values).then( (results)=>{
    res.sendStatus( 200 );
  }).catch( (err)=>{
    console.log( err );
    res.sendStatus( 500 );
  })
});


module.exports = router;
