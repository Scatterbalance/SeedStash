import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {Card, CardContent, CardMedia, Typography, CardActionArea, Grid, Box} from '@material-ui/core'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function InventoryListItem(props) {



  return (


    <div className="container" >


      <p>{JSON.stringify(props)}</p>
      <Card>
      {/* <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={4}> */}
          
            {/* <CardMedia
            component="img"
            
              
              
              image={props.inventory.path}
              alt="green iguana"
            /> */}
            {/* </Grid>
            <Grid item> */}
            <CardActionArea component={RouterLink} to ={{ pathname:'/seedinfo/'+ props.inventory.id , state: props}}>
          
          <CardContent>
            
            <Typography gutterBottom variant="h5" component="div">
            {props.inventory.name}
            </Typography>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',

              p: 1,
              m: 0,
              }}>
             <Box sx={{mx:1,}}>
             <b>Catagory: </b>{props.inventory.catagory}
             </Box>
             <Box sx={{mx:1,}}><b>Quantity: </b>{props.inventory.quantity}
             </Box>
             <Box sx={{mx:1,}}><b>Current Year: </b>{props.inventory.current_year? <a>Yes</a>: <a>No</a>}
             </Box>
             <Box sx={{mx:1,}}><b>Notes: </b>{props.inventory.notes}
             </Box>
            <Typography variant="body1" color="textPrimary">
            </Typography>
            
            </Box>
          </CardContent>
          
         
        </CardActionArea>
        {/* </Grid>
        </Grid> */}
      </Card> 
    </div>
  );
}

export default InventoryListItem;
