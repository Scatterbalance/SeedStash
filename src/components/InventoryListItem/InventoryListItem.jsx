import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@material-ui/core'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function InventoryListItem(props) {
  return (


    <div className="container" className="card">
      <p>{JSON.stringify(props)}</p>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={RouterLink} to ={{ pathname:'/seedinfo/'+ props.inventory.id , state: props}}>
          {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.inventory.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are all over the place and this is going to test
               the limit of how far they will spread.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default InventoryListItem;
