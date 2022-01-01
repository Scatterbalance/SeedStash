import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import InventoryTopList from '../InventoryTopList/InventoryTopList';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead,TableRow,Paper, IconButton } from '@material-ui/core' ;
import {Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function InventoryPage() {



  const inventory = useSelector((store) => store.inventory);
  const user = useSelector((store) => store.user);
  const userCatagories = useSelector((store) => store.userCatagories);
  const dispatch = useDispatch();
 
  
  



  useEffect(() => {
    dispatch({ type: 'FETCH_INVENTORY', payload: user.id });
    dispatch({ type: 'FETCH_USER_CATAGORIES', payload: user.id });
    dispatch({ type: 'FETCH_CATAGORIES' });

    
  }, []);





  return (
    <div className="container">
      <p>Inventory Page</p>
      {/* <p>{JSON.stringify(inventory)}</p> */}
      <section className="inventory">
      
        
        







        
          {userCatagories.map(catagory => {
          return (
            

              <div key={catagory.id} >
              <InventoryTopList catagory = {catagory}/>
              </div>
            
            
            

            );
          })}
         
      </section>
      
    </div>
  );
}


export default InventoryPage;
