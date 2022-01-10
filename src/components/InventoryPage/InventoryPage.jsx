import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import InventoryTopList from '../InventoryTopList copy/InventoryTopList';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead,TableRow,Paper, IconButton } from '@material-ui/core' ;
import {Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../InventoryTopList copy/InventoryTopList.css';
import PageHeader from '../PageHeader/PageHeader';



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

  const [catagoryList, setCatagoryList] = useState( {id: 0 ,catagory:"All", path: "/Images/all_garden.jpg"} );
  



  return (
    <div >
      <PageHeader name={"Inventory"} />
      <center>
      <h4>Select a Catagory</h4>
      </center>
      <section className = "cardwrap">
      <InventoryTopList catagory = {catagoryList}/>
       
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
