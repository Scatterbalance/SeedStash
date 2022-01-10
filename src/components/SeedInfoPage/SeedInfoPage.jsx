import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useLayoutEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

import {Button,Paper, IconButton,Box, InputLabel, Select, MenuItem,Breadcrumbs, Link, Typography, } from '@material-ui/core' ;
import {Grid, TextField} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';


import Checkbox from '@mui/material/Checkbox';

import '../InventoryTopList copy/InventoryTopList.css';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import PageHeader from '../PageHeader/PageHeader';
import { grid } from '@mui/system';

//this function is for each individual seed item



function SeedInfoPage(props) {



const dispatch = useDispatch();
const location = useLocation();
const history = useHistory();
const params= useParams();
//store values
const user = useSelector((store) => store.user);
const catagories = useSelector((store) => store.catagories);
const inventory = useSelector((store) => store.inventory);


useEffect(() => {
  dispatch({ type: 'FETCH_INVENTORY', payload: user.id });
    
}, []);

//edit conditional rendering
const [toggleEdit, setToggleEdit] = useState( false );


// const inventoryItem = inventory


const handleChangeCatagory = (event)=>{
  setSeedInfo ({...seedInfo , seed_id: event.target.value});
}

const handleCancelEdit = ()=>{

  setToggleEdit(!toggleEdit)
  seed();
}
const handleSaveEdit = ()=>{
  dispatch({type:"UPDATE_SEED", payload: seedInfo});
  setToggleEdit(!toggleEdit);
 
}


const [seedInfo, setSeedInfo] = useState(
    {
  id: '', 
  seed_id: '',
  user_id: user.id,
  name:'' ,
  sow_date: '',
  quantity: '',
  source: '',
  current_year: false,
  indoor: false,
  notes: '',
  }
   );




const seed = (seed)=>{
  const sprout = inventory.find(el=> el.id === Number(params.id));
  setSeedInfo(sprout);
 
}

useLayoutEffect(() => {
  seed(seedInfo);
    
}, []);




  return (
<div > 
  <PageHeader name = "Seed Info"/>

    <div className="container"> 
      <Breadcrumb  seedInfo={seedInfo}/>
      
      { toggleEdit ?
      
      <Box sx={{m:5}}>
          <Grid container direction='column' spacing= {3}>

            <Grid item xs container  justifyContent="center" alignItems="flex-start" >
              
              <Typography align="center"  variant='h4'>Edit Seed Info</Typography> 
              
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Name:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {seedInfo.name} onChange = { (event)=>setSeedInfo ({...seedInfo , name: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
              <Typography variant="h6">Catagory:</Typography>
              </Grid>
              <Grid item>
                <Select
                  labelId="catagory-select-label"
                  id="catagory-select-label"
                  label="Catagory"
                  value = {seedInfo.seed_id}
                  
                  onChange={handleChangeCatagory}>
                    
                  {catagories.map(catagory =>
                  <MenuItem key = {catagory.id} value = {catagory.id}>{catagory.catagory}</MenuItem>)}
                </Select>
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Quantiny:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {seedInfo.quantity} onChange = { (event)=>setSeedInfo ({...seedInfo , quantity: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Sow Date:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {seedInfo.sow_date} onChange = { (event)=>setSeedInfo ({...seedInfo , sow_date: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Direct sow:</Typography>
              </Grid>
              <Grid item>
                  <Checkbox
                checked={!seedInfo.indoor}
                onChange={(event) => {
                  setSeedInfo ({...seedInfo , indoor: !event.target.checked})}}
                inputProps={{ 'aria-label': 'controlled' }}
                />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2}  alignItems="center" >
              <Grid item>
                <Typography variant="h6">Current Year Seed:</Typography>
              </Grid>
              <Grid item>
                <Checkbox
                checked={seedInfo.current_year}
                onChange={(event) => {
                  setSeedInfo ({...seedInfo , current_year: event.target.checked})}}
                inputProps={{ 'aria-label': 'controlled' }}
                />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Source:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {seedInfo.source} onChange = { (event)=>setSeedInfo ({...seedInfo , source: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="flex-start" >
              <Grid item>
                <Typography variant="h6">Notes:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {seedInfo.notes} variant= "outlined" multiline rows={6} onChange = { (event)=>setSeedInfo ({...seedInfo , notes: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center"  >
              <Grid item>
              <Button onClick={handleSaveEdit} variant="contained" color = "primary" >save</Button>
              </Grid>
              <Grid item>
              <Button onClick={handleCancelEdit} variant="contained" color = "primary" >Cancel</Button>
              </Grid>
            </Grid>
        </Grid>
        </Box>  
        
        
        
        :
        

        <Box sx={{m:5}}>
          <Grid container spacing={2} display = "flex-wrap">
          <Grid item xs={12} sm={6} container direction='column' spacing= {3}>

            <Grid item xs container  alignItems="center"
             justifyContent='center' >
              
              <Grid item>
               <Typography variant ="h4">
              {seedInfo.name}  
              </Typography> 
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
              <Typography variant="h6">Catagory:</Typography>
              </Grid>
              <Grid item>
              {seedInfo.catagory}
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Quantiny:</Typography>
              </Grid>
              <Grid item>
              {seedInfo.quantity}
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Sow Date:</Typography>
              </Grid>
              <Grid item>
              {seedInfo.sow_date}
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Direct sow:</Typography>
              </Grid>
              <Grid item>
              <Checkbox
                disabled = {!toggleEdit}
                checked={!seedInfo.indoor}
                inputProps={{ 'aria-label': 'controlled' }}
                />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2}  alignItems="center" >
              <Grid item>
                <Typography variant="h6">Current Year Seed:</Typography>
              </Grid>
              <Grid item>
              <Checkbox
                disabled = {!toggleEdit}
                checked={seedInfo.current_year}
                inputProps={{ 'aria-label': 'controlled' }}
                />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Source:</Typography>
              </Grid>
              <Grid item>
              {seedInfo.source}
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography variant="h6">Notes:</Typography>
              </Grid>
              <Grid item>
              {seedInfo.notes}
               </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center"  >
              <Grid item>
              <Button variant="contained" color = "primary" onClick={()=>{setToggleEdit(!toggleEdit)}}  >edit</Button>
              </Grid>
              
            </Grid>
        </Grid>
          <Grid item >
            <img src={seedInfo.path} alt={seedInfo.catagory}/>
            
            
          </Grid>
        </Grid>
        </Box>  
        }

          
      </div>
  </div>      
     
  );
}

export default SeedInfoPage;
