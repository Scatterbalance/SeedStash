import {React}from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

import {Card, CardContent, CardMedia, Typography, CardActionArea, Grid, Box,Button,Chip} from '@material-ui/core';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import { CardActions, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function InventoryListItem(props) {

  const dispatch = useDispatch();
  const params=useParams();

//dialog logic
const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDelete=()=>{
    dispatch({type: "DELETE_INVENTORY", payload: props.inventory})


  }



  return (


    <div className="container" className="card" >


      {/* <p>{JSON.stringify(props.inventory.id)}</p> */}
      <Card >
      {/* <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={4}> */}
          
            <CardMedia
            component="img"
            height={120}
            
              
              
              image={props.inventory.path}
              alt={props.inventory.catagory}
            />
            {/* </Grid>
            <Grid item> */}
            {/* <CardActionArea component={RouterLink} to ={{ pathname:'/seedinfo/'+ props.inventory.id , state: props}}> */}
          
          <CardContent>
            
            <Typography gutterBottom variant="h5" component="div">
            {props.inventory.name}
            
            </Typography>
            {/* <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',

              p: 1,
              m: 0,
              }}>
             <Box sx={{mx:1,}}>
             <b>Catagory: </b>{props.inventory.catagory}
             </Box>
             <Box sx={{mx:1,}}><b>Quantity: </b>{props.inventory.quantity}
             </Box> */}
            
            <Typography variant="body1" color="textPrimary">
            <b>Catagory: </b>{props.inventory.catagory}
            </Typography>
            <Typography variant="body1" color="textPrimary">
            <b>Quantity: </b>{props.inventory.quantity}
            </Typography>
            {props.inventory.current_year ? 
            <Chip 
              label="Current Year"
                color ="primary"
                variant = "default"
                size="small"
                
                />:
                <span></span>
              }
            
            {/* </Box> */}
          </CardContent>
          <CardActions>
            <Button component={RouterLink} to ={{ pathname:`/seedinfo/${params.id}/${params.catagory}/${props.inventory.id}`, state: props}}>More Info</Button>
            <IconButton onClick={handleClickOpen}>
              <DeleteIcon />
            </IconButton>


          </CardActions>
          
         
        {/* </CardActionArea> */}
        {/* </Grid>
        </Grid> */}
      </Card> 

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Delete ${props.inventory.name}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will permanently delete this item from your inventory.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={()=>{handleClose(); handleDelete();}} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InventoryListItem;
