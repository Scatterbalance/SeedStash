import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useLayoutEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

import {Button,Paper, IconButton,Box, InputLabel, Select, MenuItem,Breadcrumbs, Link} from '@material-ui/core' ;
import {Grid, TextField} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';

import Checkbox from '@mui/material/Checkbox';

import '../InventoryTopList copy/InventoryTopList.css';

import Breadcrumb from '../Breadcrumb/Breadcrumb';

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
  expiration: '',
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
<div className="container">
<h3>seedinfopage</h3>

<p>{JSON.stringify(params)}</p>
{/* <p>{JSON.stringify(seedInfo)}</p> */}
{/* <SeedInfo seedInfo={seedInfo}/> */}
                              <div> 
                               
                              <Breadcrumb  seedInfo={seedInfo}/>
    
                              { toggleEdit ?
                              <span>
                                <h2>Seed Info</h2>
                               




                               
                                
                                
                                  <Grid container spacing = {3}>
                                    <Grid  item xs={5}>
                                    <input type = "text" value = {seedInfo.name} onChange = { (event)=>setSeedInfo ({...seedInfo , name: event.target.value})} />
                                    <br />
                                    Catagory:
                                    
                                      <Select
                                        labelId="catagory-select-label"
                                        id="catagory-select-label"
                                        label="Catagory"
                                        value = {seedInfo.seed_id}
                                        
                                        onChange={handleChangeCatagory}>
                                          
                                        {catagories.map(catagory =>
                                        <MenuItem key = {catagory.id} value = {catagory.id}>{catagory.catagory}</MenuItem>)}
                                      </Select>
                                      
                                    
                                    
                                    
                                    <h4>Quantiny:</h4> 
                                    <input type = "text" value = {seedInfo.quantity} onChange = { (event)=>setSeedInfo ({...seedInfo , quantity: event.target.value})} />
                                    
                                    <h4>Expiration:</h4> 
                                    <input type = "text" value = {seedInfo.expiration} onChange = { (event)=>setSeedInfo ({...seedInfo , expiration: event.target.value})} />
                                    
                                    </Grid>
                                    
                                    
                                    <Grid item xs={5}>
                                    <h4>Direct sow:</h4> 
                                    <Checkbox
                                    checked={seedInfo.indoor}
                                    onChange={(event) => {
                                      setSeedInfo ({...seedInfo , indoor: event.target.checked})}}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    
                                    <h4>Planting this year:</h4> 
                                    <Checkbox
                                    checked={seedInfo.current_year}
                                    onChange={(event) => {
                                      setSeedInfo ({...seedInfo , current_year: event.target.checked})}}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />



                                    {seedInfo.current_year}
                                    
                                    <h4>Source:</h4> 
                                    <input type = "text" value = {seedInfo.source} onChange = { (event)=>setSeedInfo ({...seedInfo , source: event.target.value})} />
                                    {seedInfo.source}
                                  
                                    
                                    </Grid>
                                    <Grid item xs={12}>
                                    <h4>Notes:</h4> 
                                    <input type = "text" value = {seedInfo.notes} onChange = { (event)=>setSeedInfo ({...seedInfo , notes: event.target.value})} />
                                    
                                    </Grid>

                                  </Grid>
                                
                              
                                

                        
                             
                              <Button onClick={handleSaveEdit}>save</Button>
                                <Button onClick={handleCancelEdit}>Cancel</Button>
                                
                              
                              
                              </span>:
                              
                              <span>
                                <h2>Seed Info</h2>
                              
                                
                                
                                  <Grid container spacing = {3}>
                                    <Grid  item xs={5}>
                                    <h4>Name:</h4> {seedInfo.name}

                                    <h4>Catagory:</h4> {seedInfo.catagory}
                                    <h4>Quantiny:</h4> {seedInfo.quantity}
                                    
                                    <h4>Expiration:</h4> {seedInfo.expiration}
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={5}>
                                    <h4>Direct sow:</h4> 
                                    <Checkbox
                                    disabled = {!toggleEdit}
                                    checked={seedInfo.indoor}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    
                                    
                                    <h4>Planting this year:</h4> 
                                    <Checkbox
                                    disabled = {!toggleEdit}
                                    checked={seedInfo.current_year}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    
                                    <h4>Source:</h4> {seedInfo.source}
                                  
                                    
                                    </Grid>
                                    <Grid item xs={12}>
                                    <h4>Notes:</h4> {seedInfo.notes}
                                    </Grid>

                                  </Grid>
                                
                                
                                

                        
                             
                                <Button onClick={()=>{setToggleEdit(!toggleEdit)}}>edit</Button>
                                
                              
                              </span>
                              }
                        </div>
                    </div>
      
                        
                      
                      
       
     
  );
}

export default SeedInfoPage;
