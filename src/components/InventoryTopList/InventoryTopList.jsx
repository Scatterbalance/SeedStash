import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import InventoryListItem from '../InventoryListItem/InventoryListItem';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead,TableRow,Paper, IconButton } from '@material-ui/core' ;
import DeleteIcon from '@mui/icons-material/Delete';


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function InventoryTopList(props) {


  const inventory = useSelector((store) => store.inventory);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  

  useEffect(() => {
    
  }, []);

  const [toggleItem, setToggleItem] = useState( false );


  return (
    <div className="container">
      <div>
        <h3>{props.catagory.catagory}</h3>
        
        {
          toggleItem ?
          <div>
        <Button onClick = {()=>{setToggleItem(!toggleItem)}} >Collapse</Button>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Plant Name</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Expiration Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventory.map((inventory)=>{
            if (inventory.catagory === props.catagory.catagory){
              return(
            <TableRow
              key={inventory.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {inventory.name}
              </TableCell>
              <TableCell align="right">{inventory.quantity}<button>button</button></TableCell>
              <TableCell align="right">{inventory.expiration}</TableCell>
              <TableCell align="right">
                <IconButton  onClick = {()=>dispatch({type: "DELETE_INVENTORY" ,payload: {id: inventory.id, user_id: user.id}})} aria-label="delete" size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          )}//end if
          } 
          )//end map 
          }
        </TableBody>
      </Table>
    </TableContainer>
  
        
        
        {/* <section>{inventory.map(inventory=>{
          if (inventory.catagory === props.catagory.catagory){
            return(

              
            
              <InventoryListItem  key={inventory.id} inventory={inventory}/>
            )
          }
        })}</section> */}
        </div>: 
        
        <Button onClick = {()=>{setToggleItem(!toggleItem)}}>Expand</Button>
      }
        
      </div>
    </div>
  );
}

export default InventoryTopList;
