import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useLayoutEffect, useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import {Select,InputLabel, MenuItem, Button} from '@material-ui/core';




// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function AddSeedForm(props) {
  const catagories = useSelector((store) => store.catagories);// getting catagories for selection
  const user = useSelector((store) => store.user);
  
  const dispatch = useDispatch();


  
//defining object to send
  const [newSeed, setNewSeed] = useState( {
    seed_id: '',
    user_id: user.id,
    name: '',
    expiration: '',
    quantity: 0,
    source: '',
    current_year: false,
    indoor: false,
    notes: '',
    } );

const handleChangeCatagory = (event)=>{
   setNewSeed ({...newSeed , seed_id: event.target.value});
}



  return (
    <div className="container">
      
      <p>Add seed Form</p>

      

      <h4>Catagory: 
      <InputLabel id="catagory-select-label">Catagory</InputLabel>
            <Select
              labelId="catagory-select-label"
              id="catagory-select-label"
              label="Catagory"
              value = {newSeed.seed_id}
              onChange={handleChangeCatagory}>
                {catagories.map(catagory =>
                <MenuItem key = {catagory.id} value = {catagory.id}>{catagory.catagory}</MenuItem>)}
            </Select>
      </h4>

      <h4>Name: <input type = "text" placeholder = "Name" onChange = { (event)=>setNewSeed ({...newSeed , name: event.target.value})} /></h4>

      <h4>Quantity: <input type = "text" placeholder = "Qty" onChange = { (event)=>setNewSeed ({...newSeed , quantity: event.target.value})} /></h4>

      <h4>expiration year: <input type = "text" placeholder = "expiration" onChange = { (event)=>setNewSeed ({...newSeed , expiration: event.target.value})} /></h4>

      <h4>source: <input type = "text" placeholder = "source" onChange = { (event)=>setNewSeed ({...newSeed , source: event.target.value})} /></h4>

      <h4>Planting This Year?: 
      <Checkbox
      checked={newSeed.current_year}
      onChange={(event) => {
        setNewSeed ({...newSeed , current_year: event.target.checked})}}
      inputProps={{ 'aria-label': 'controlled' }}
      /></h4>

      <h4>indoor: 
      <Checkbox
      checked={newSeed.indoor}
      onChange={(event) => {
        setNewSeed ({...newSeed , indoor: event.target.checked})}}
      inputProps={{ 'aria-label': 'controlled' }}
      /></h4>

      <h4>notes: <input type = "text" placeholder = "notes" onChange = { (event)=>setNewSeed ({...newSeed , notes: event.target.value})} /></h4>

      <Button variant="outlined" >Cancel</Button>
      <Button variant="outlined" onClick= {()=>{dispatch({type:"ADD_INVENTORY" ,payload:newSeed})}}>Submit</Button>
      
      <p>{JSON.stringify(newSeed)}</p>

    

    </div>
  );
}

export default AddSeedForm;
