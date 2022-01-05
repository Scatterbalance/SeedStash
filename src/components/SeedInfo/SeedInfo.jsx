import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useLayoutEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

import {Button, IconButton,Box, InputLabel, Select, MenuItem } from '@material-ui/core' ;
import {Grid, TextField, Collapse} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import Checkbox from '@mui/material/Checkbox';
import InventoryTopList from '../InventoryTopList/InventoryTopList';
import InventoryListItem from '../InventoryListItem/InventoryListItem';
import '../InventoryTopList copy/InventoryTopList.css'

//this function is for each individual seed item



function SeedInfo(props) {
const dispatch = useDispatch();
const location = useLocation();
const history = useHistory();
const params= useParams();
//store values
const user = useSelector((store) => store.user);
const catagories = useSelector((store) => store.catagories);
const inventory = useSelector((store) => store.inventory);

//edit conditional rendering
const [toggleEdit, setToggleEdit] = useState( false );


// const inventoryItem = inventory

// const handleChangeCatagory = (event)=>{
//   setEditSeed ({...editSeed , seed_id: event.target.value});
// }

//  //object to send 
//  const [editSeed, setEditSeed] = useState(
   
//   {
//   id: props.seedInfo.id, 
//   seed_id: props.seedInfo.seed_id,
//   user_id: user.id,
//   name: props.seedInfo.name,
//   expiration: props.seedInfo.expiration,
//   quantity: props.seedInfo.quantity,
//   source: props.seedInfo.source,
//   current_year: props.seedInfo.current_year,
//   indoor: props.seedInfo.indoor,
//   notes: props.seedInfo.notes,
//   }
//    );

// const handleCancelEdit = ()=>{

//   setToggleEdit(!toggleEdit)
//   setEditSeed({...editSeed, 
//     id: props.seedInfo.id, 
//     seed_id: props.seedInfo.seed_id,
//     user_id: user.id,
//     name: props.seedInfo.name,
//     expiration: props.seedInfo.expiration,
//     quantity: props.seedInfo.quantity,
//     source: props.seedInfo.source,
//     current_year: props.seedInfo.current_year,
//     indoor: props.seedInfo.indoor,
//     notes: props.seedInfo.notes,
//     });
// }
// const handleSaveEdit = ()=>{
//   dispatch({type:"UPDATE_SEED", payload: editSeed});
//   setToggleEdit(!toggleEdit)
// }




  return (
<div className="container">
<h3>seedinfo</h3>
<p>{JSON.stringify(params)}</p>
{/* <p>{JSON.stringify(inventory)}</p> */}
<p>{JSON.stringify(props.seedInfo)}</p>
                              <div>
                              {/* { toggleEdit ?
                              <span>
                                <h2>Seed Info</h2>
                               
                                
                                
                                  <Grid container spacing = {3}>
                                    <Grid  item xs={5}>
                                    <input type = "text" value = {editSeed.name} onChange = { (event)=>setEditSeed ({...editSeed , name: event.target.value})} />
                                    <br />
                                    Catagory:
                                    
                                      <Select
                                        labelId="catagory-select-label"
                                        id="catagory-select-label"
                                        label="Catagory"
                                        value = {editSeed.seed_id}
                                        
                                        onChange={handleChangeCatagory}>
                                          {catagories.map(catagory =>
                                          <MenuItem key = {catagory.id} value = {catagory.id}>{catagory.catagory}</MenuItem>)}
                                      </Select>
                                      
                                    
                                    
                                    
                                    <h4>Quantiny:</h4> 
                                    <input type = "text" value = {editSeed.quantity} onChange = { (event)=>setEditSeed ({...editSeed , quantity: event.target.value})} />
                                    
                                    <h4>Expiration:</h4> 
                                    <input type = "text" value = {editSeed.expiration} onChange = { (event)=>setEditSeed ({...editSeed , expiration: event.target.value})} />
                                    
                                    </Grid>
                                    
                                    
                                    <Grid item xs={5}>
                                    <h4>Direct sow:</h4> 
                                    <Checkbox
                                    checked={editSeed.indoor}
                                    onChange={(event) => {
                                      setEditSeed ({...editSeed , indoor: event.target.checked})}}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    
                                    <h4>Planting this year:</h4> 
                                    <Checkbox
                                    checked={editSeed.current_year}
                                    onChange={(event) => {
                                      setEditSeed ({...editSeed , current_year: event.target.checked})}}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />



                                    {props.seedInfo.current_year}
                                    
                                    <h4>Source:</h4> 
                                    <input type = "text" value = {editSeed.source} onChange = { (event)=>setEditSeed ({...editSeed , source: event.target.value})} />
                                    {props.seedInfo.source}
                                  
                                    
                                    </Grid>
                                    <Grid item xs={12}>
                                    <h4>Notes:</h4> 
                                    <input type = "text" value = {editSeed.notes} onChange = { (event)=>setEditSeed ({...editSeed , notes: event.target.value})} />
                                    
                                    </Grid>

                                  </Grid>
                                
                              
                                {JSON.stringify(editSeed)}
                                {JSON.stringify(props.seedInfo)}

                        
                             
                              <Button onClick={handleSaveEdit}>save</Button>
                                <Button onClick={handleCancelEdit}>Cancel</Button>
                                <Button onClick={handleCloseEdit}>Exit</Button>
                              
                              
                              </span>:*/}
                              
                              <span>
                                <h2>Seed Info</h2>
                              
                                
                                
                                  <Grid container spacing = {3}>
                                    <Grid  item xs={5}>
                                    <h4>Name:</h4> {props.seedInfo.name}

                                    <h4>Catagory:</h4> {props.seedInfo.catagory}
                                    <h4>Quantiny:</h4> {props.seedInfo.quantity}
                                    
                                    <h4>Expiration:</h4> {props.seedInfo.expiration}
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={5}>
                                    <h4>Direct sow:</h4> 
                                    <Checkbox
                                    disabled = {!toggleEdit}
                                    checked={props.seedInfo.indoor}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    
                                    
                                    <h4>Planting this year:</h4> 
                                    <Checkbox
                                    disabled = {!toggleEdit}
                                    checked={props.seedInfo.current_year}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    
                                    <h4>Source:</h4> {props.seedInfo.source}
                                  
                                    
                                    </Grid>
                                    <Grid item xs={12}>
                                    <h4>Notes:</h4> {props.seedInfo.notes}
                                    </Grid>

                                  </Grid>
                                
                                
                                

                        
                             
                                <Button onClick={()=>{setToggleEdit(!toggleEdit)}}>edit</Button>
                                
                              
                              </span>
                              
                        </div>
                    </div>
      
                        
                      
                      
       
     
  );
}

export default SeedInfo;
