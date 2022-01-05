import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useLayoutEffect } from 'react';
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


function CurrentYearPage() {




  const inventory = useSelector((store) => store.inventory);
  const user = useSelector((store) => store.user);
  const userCatagories = useSelector((store) => store.userCatagories);
  const dispatch = useDispatch();
 
  
  
  //search bar logic
  const [filtered, setFiltered] = useState(inventory);
  
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState(inventory);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setFiltered(filteredRows);
  };

const escapeRegExp=(value)=> {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  //end search bar logic
  

  useEffect(() => {
    dispatch({ type: 'FETCH_INVENTORY', payload: user.id });
    dispatch({ type: 'FETCH_USER_CATAGORIES', payload: user.id });
    dispatch({ type: 'FETCH_CATAGORIES' });
  

    
  }, []);

  useLayoutEffect(() => {
  setFiltered(inventory);
  setRows(inventory);
  }, [inventory]);

  const [toggleCurrent, setToggleCurrent] = useState( false );
  const [filter, setFilter] = useState( {
    current_year: ''
  } );

 const hanldleCurrentYear=()=>{
    if (filter.current_year===true){
    setFilter({...filter,current_year:''})
    }else if (filter.current_year===''){
      setFilter({...filter,current_year: true})

    }//end elseif

  }
  


  return (
    <div className="container">
      <p>Inventory Page</p>
      <input type = "text" placeholder = "search" onChange = {(event)=>requestSearch(event.target.value)} />
      <button onClick = {hanldleCurrentYear}>current year</button>
      <button onClick = {()=>{setFilter({...filter,current_year: ''})}}>all</button>
      <button>expiring soon</button>
      <p>{JSON.stringify(filter)}</p>
      <p>{JSON.stringify(filtered)}</p>
      <p>{JSON.stringify(inventory)}</p>
      <section className="inventory">

      
        
        







        
          {userCatagories.map(catagory => {
          return (
            
              <div key={catagory.id} >

                {/* <input placeholder="search" onChange= {filteredInventory}/> */}

              <InventoryTopList key = {catagory.id} catagory = {catagory} inventory={filtered}/>
              </div>
            
            
            

            );
          })}
         
      </section>
      
    </div>
  );
}


export default CurrentYearPage;
