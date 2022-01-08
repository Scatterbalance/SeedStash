import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

import {Button, Table, TableBody, TableCell, TableContainer, TableHead,TableRow,Paper, IconButton,Box, InputLabel, Select, MenuItem } from '@material-ui/core' ;
import {Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Collapse} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import Checkbox from '@mui/material/Checkbox';
import InventoryTopList from '../InventoryTopList/InventoryTopList';
import InventoryListItem from '../InventoryListItem/InventoryListItem';
import '../InventoryList/InventoryList.css';

//this function is for each individual seed item



function InventoryList(props) {
const dispatch = useDispatch();
const location = useLocation();
const history = useHistory();
const params= useParams();
//store values
const user = useSelector((store) => store.user);
const catagories = useSelector((store) => store.catagories);
const inventory = useSelector((store) => store.inventory);

//edit conditional rendering
// const [toggleEdit, setToggleEdit] = useState( false );


// //Dialog Box logic
// const [open, setOpen] = useState(false);

//   setOpen(true);
//   setEditSeed({...editSeed, seed_id: props.inventory.seed_id})
// };

// const handleClose = () => {
  
  //   setOpen(false);
  // };
  // const handleClickOpen = (event) => {
// const handleCloseEdit = () => {
//   handleCancelEdit();
//   setOpen(false);
// };// end Dialog logic

// const handleChangeCatagory = (event)=>{
//   setEditSeed ({...editSeed , seed_id: event.target.value});
// }

//  //object to send 
//  const [editSeed, setEditSeed] = useState(
   
//   {
//   id: props.inventory.id, 
//   seed_id: props.inventory.seed_id,
//   user_id: user.id,
//   name: props.inventory.name,
//   expiration: props.inventory.expiration,
//   quantity: props.inventory.quantity,
//   source: props.inventory.source,
//   current_year: props.inventory.current_year,
//   indoor: props.inventory.indoor,
//   notes: props.inventory.notes,
//   }
//    );

// const handleCancelEdit = ()=>{
//   setToggleEdit(!toggleEdit)
//   setEditSeed({...editSeed, 
//     id: props.inventory.id, 
//     seed_id: props.inventory.seed_id,
//     user_id: user.id,
//     name: props.inventory.name,
//     expiration: props.inventory.expiration,
//     quantity: props.inventory.quantity,
//     source: props.inventory.source,
//     current_year: props.inventory.current_year,
//     indoor: props.inventory.indoor,
//     notes: props.inventory.notes,
//     });
// }
// const handleSaveEdit = ()=>{
//   dispatch({type:"UPDATE_SEED", payload: editSeed});
//   setToggleEdit(!toggleEdit)
// }

useEffect(() => {
  dispatch({ type: 'FETCH_INVENTORY', payload: user.id });
    
}, []);

  return (
<div className="container">
<h3>seedinfopage</h3>
   
<div className="cardwrap" className="cardItem">
  
  
  
  
  {inventory.map(items => {
    if (Number(params.id)===0){
      return(<div key={items.id} >
        <InventoryListItem inventory= {items}/>
      </div>)
    }else if(items.seed_id === Number(params.id)){
          return (
            
              <div key={items.id} >
                <InventoryListItem inventory= {items}/>
              </div>
    )}
          })}

  
      
      

</div> 
</div>



        // <TableRow
        //                   key={props.inventory.id}
        //                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //                 >
        //                   <TableCell component="th" scope="row">
        //                     {props.inventory.name}
        //                   </TableCell>
        //                   <TableCell align="right">{props.inventory.quantity}</TableCell>
        //                   <TableCell align="right">{props.inventory.expiration}</TableCell>
                
        //                   <TableCell padding = "checkbox" align="right">
        //                       <IconButton variant="outlined" onClick={handleClickOpen}>
        //                       <ReadMoreRoundedIcon />
        //                     </IconButton>
        //                   </TableCell>

        //                   <TableCell padding = "checkbox" align="right">
        //                     <IconButton  onClick = {()=>dispatch({type: "DELETE_INVENTORY" ,payload: {id: props.inventory.id, user_id: user.id}})} aria-label="delete" size="small">
        //                       <DeleteIcon fontSize="small" />
        //                     </IconButton>
        //                   </TableCell>
                        

                        
        //                   <Dialog maxWidth = 'md' open={open} onClose={handleClose}>
                              
        //                       { toggleEdit ?
        //                       <span>
        //                         <DialogTitle>Seed Info</DialogTitle>
        //                         <DialogContent>
                                
        //                         {/* <DialogContentText> */}
        //                           <Grid container spacing = {3}>
        //                             <Grid  item xs={5}>
        //                             <input type = "text" value = {editSeed.name} onChange = { (event)=>setEditSeed ({...editSeed , name: event.target.value})} />
        //                             <br />
        //                             Catagory:
                                    
        //                               <Select
        //                                 labelId="catagory-select-label"
        //                                 id="catagory-select-label"
        //                                 label="Catagory"
        //                                 value = {editSeed.seed_id}
                                        
        //                                 onChange={handleChangeCatagory}>
        //                                   {catagories.map(catagory =>
        //                                   <MenuItem key = {catagory.id} value = {catagory.id}>{catagory.catagory}</MenuItem>)}
        //                               </Select>
                                      
                                    
                                    
                                    
        //                             <h4>Quantiny:</h4> 
        //                             <input type = "text" value = {editSeed.quantity} onChange = { (event)=>setEditSeed ({...editSeed , quantity: event.target.value})} />
                                    
        //                             <h4>Expiration:</h4> 
        //                             <input type = "text" value = {editSeed.expiration} onChange = { (event)=>setEditSeed ({...editSeed , expiration: event.target.value})} />
                                    
        //                             </Grid>
        //                             {/* <Grid item xs={2}/> */}
                                    
        //                             <Grid item xs={5}>
        //                             <h4>Direct sow:</h4> 
        //                             <Checkbox
        //                             checked={editSeed.indoor}
        //                             onChange={(event) => {
        //                               setEditSeed ({...editSeed , indoor: event.target.checked})}}
        //                             inputProps={{ 'aria-label': 'controlled' }}
        //                             />
                                    
        //                             <h4>Planting this year:</h4> 
        //                             <Checkbox
        //                             checked={editSeed.current_year}
        //                             onChange={(event) => {
        //                               setEditSeed ({...editSeed , current_year: event.target.checked})}}
        //                             inputProps={{ 'aria-label': 'controlled' }}
        //                             />



        //                             {props.inventory.current_year}
                                    
        //                             <h4>Source:</h4> 
        //                             <input type = "text" value = {editSeed.source} onChange = { (event)=>setEditSeed ({...editSeed , source: event.target.value})} />
        //                             {props.inventory.source}
                                  
                                    
        //                             </Grid>
        //                             <Grid item xs={12}>
        //                             <h4>Notes:</h4> 
        //                             <input type = "text" value = {editSeed.notes} onChange = { (event)=>setEditSeed ({...editSeed , notes: event.target.value})} />
                                    
        //                             </Grid>

        //                           </Grid>
                                
        //                         {/* </DialogContentText> */}
        //                         {/* <TextField
        //                           autoFocus
        //                           margin="dense"
        //                           id="name"
        //                           label="Email Address"
                                
        //                           fullWidth
        //                           value = {props.inventory.name}
        //                           variant="standard"
        //                         /> */}
        //                         {JSON.stringify(editSeed)}
        //                         {JSON.stringify(props.inventory)}

                        
        //                       </DialogContent>
        //                       <DialogActions>
        //                       <Button onClick={handleSaveEdit}>save</Button>
        //                         <Button onClick={handleCancelEdit}>Cancel</Button>
        //                         <Button onClick={handleCloseEdit}>Exit</Button>
                              
        //                       </DialogActions> 
        //                       </span>:
                              
        //                       <span>
        //                         <DialogTitle>Seed Info</DialogTitle>
        //                       <DialogContent>
                                
        //                         {/* <DialogContentText> */}
        //                           <Grid container spacing = {3}>
        //                             <Grid  item xs={5}>
        //                             <h4>Name:</h4> {props.inventory.name}

        //                             <h4>Catagory:</h4> {props.inventory.catagory}
        //                             <h4>Quantiny:</h4> {props.inventory.quantity}
                                    
        //                             <h4>Expiration:</h4> {props.inventory.expiration}
        //                             </Grid>
        //                             <Grid item xs={2}>
        //                             </Grid>
        //                             <Grid item xs={5}>
        //                             <h4>Direct sow:</h4> 
        //                             <Checkbox
        //                             disabled = {true}
        //                             checked={props.inventory.indoor}
        //                             inputProps={{ 'aria-label': 'controlled' }}
        //                             />
                                    
                                    
        //                             <h4>Planting this year:</h4> 
        //                             <Checkbox
        //                             disabled = {true}
        //                             checked={props.inventory.current_year}
        //                             inputProps={{ 'aria-label': 'controlled' }}
        //                             />
                                    
        //                             <h4>Source:</h4> {props.inventory.source}
                                  
                                    
        //                             </Grid>
        //                             <Grid item xs={12}>
        //                             <h4>Notes:</h4> {props.inventory.notes}
        //                             </Grid>

        //                           </Grid>
                                
        //                         {/* </DialogContentText> */}
                                

                        
        //                       </DialogContent>
        //                       <DialogActions>
        //                         <Button onClick={()=>{setToggleEdit(!toggleEdit)}}>edit</Button>
        //                         <Button onClick={handleClose}>Exit</Button>
        //                       </DialogActions>
        //                       </span>
        //                       }
        //                     </Dialog> 
        //                   </TableRow>
                        
                      
                      
       
     
  );
}

export default InventoryList;
