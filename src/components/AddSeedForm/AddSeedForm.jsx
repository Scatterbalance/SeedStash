import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useLayoutEffect, useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import {Select,InputLabel, MenuItem, Button,Box, Grid, TextField, Typography} from '@material-ui/core';
import {useHistory} from 'react-router'
import PageHeader from '../PageHeader/PageHeader';





// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function AddSeedForm(props) {
  const catagories = useSelector((store) => store.catagories);// getting catagories for selection
  const user = useSelector((store) => store.user);
  
  const dispatch = useDispatch();
  const history = useHistory();


  
//defining object to send
  const [newSeed, setNewSeed] = useState( {
    seed_id: 12,
    user_id: user.id,
    name: '',
    sow_date: '',
    quantity: 0,
    source: '',
    current_year: false,
    indoor: true,
    notes: '',
    } );

const handleChangeCatagory = (event)=>{
   setNewSeed ({...newSeed , seed_id: event.target.value});

}
const [required,setRequired]=useState(false);



  return (
    <div>
      
     
    <div className="container">
      
      

      <Box sx={{m:5}}>
          <Grid container direction='column' spacing= {3}>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography>Name:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {newSeed.name} onChange = { (event)=>setNewSeed ({...newSeed , name: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
              <Typography>Catagory:</Typography>
              </Grid>
              <Grid item>
                
                <Select
                  labelId="catagory-select-label"
                  id="catagory-select-label"
                  label="Catagory"
                  value = {newSeed.seed_id}
                  
                  onChange={handleChangeCatagory}>
                    
                  {catagories.map(catagory =>
                  <MenuItem key = {catagory.id} value = {catagory.id}>{catagory.catagory}</MenuItem>)}
                </Select>
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography>Quantiny:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {newSeed.quantity} onChange = { (event)=>setNewSeed ({...newSeed , quantity: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography>Sow Date:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {newSeed.sow_date} onChange = { (event)=>setNewSeed ({...newSeed , sow_date: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography>Direct sow:</Typography>
              </Grid>
              <Grid item>
                  <Checkbox
                checked={!newSeed.indoor}
                onChange={(event) => {
                  setNewSeed ({...newSeed , indoor: !event.target.checked})}}
                inputProps={{ 'aria-label': 'controlled' }}
                />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2}  alignItems="center" >
              <Grid item>
                <Typography>Current Year Seed:</Typography>
              </Grid>
              <Grid item>
                <Checkbox
                checked={newSeed.current_year}
                onChange={(event) => {
                  setNewSeed ({...newSeed , current_year: event.target.checked})}}
                inputProps={{ 'aria-label': 'controlled' }}
                />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center" >
              <Grid item>
                <Typography>Source:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {newSeed.source} onChange = { (event)=>setNewSeed ({...newSeed , source: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="flex-start" >
              <Grid item>
                <Typography>Notes:</Typography>
              </Grid>
              <Grid item>
                  <TextField  value = {newSeed.notes} variant= "outlined" multiline rows={6} onChange = { (event)=>setNewSeed ({...newSeed , notes: event.target.value})} />
              </Grid>
            </Grid>

            <Grid item xs container spacing={2} alignItems="center"  >
              <Grid item>
              <Button variant="contained" color="primary" onClick={()=>{history.goBack()}} >Cancel</Button>
              </Grid>
              <Grid item>
              <Button variant="contained" color="primary" onClick= {()=>{dispatch({type:"ADD_INVENTORY" ,payload:newSeed}); history.goBack();}}>Submit</Button>
              </Grid>
            </Grid>
        </Grid>
        </Box>  

      

      {/* <p>{JSON.stringify(newSeed)}</p> */}

    
      </div>
    </div>
  );
}

export default AddSeedForm;
