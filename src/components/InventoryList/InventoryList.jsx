import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useLayoutEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

import {Button,Paper, IconButton,Box, InputLabel, Select, MenuItem, Grid, Breadcrumbs, Chip,Link,TextField } from '@material-ui/core' ;
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import Checkbox from '@mui/material/Checkbox';
import InventoryTopList from '../InventoryTopList/InventoryTopList';
import InventoryListItem from '../InventoryListItem/InventoryListItem';
import '../InventoryTopList copy/InventoryTopList.css';
import PageHeader from '../PageHeader/PageHeader';


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



 useLayoutEffect(() => {
  // setFiltered(inventory);
  // setRows(inventory);
  handleChipFilter();
  }, [inventory]);

   //end search bar logic
//chip filters
const [chipFilters, setChipFilters] = useState({current_year:true,});
const [currentYear, setCurrentYear] = useState(false);

const handleChipFilter = () =>{
  if (currentYear){
    const chips = inventory.filter((row)=>{ 
      if(row.current_year===chipFilters.current_year)
    return true });
    console.log("chips:",chips);
    console.log("currentyear toggle:",currentYear.toggle);
    setRows(chips);
    setFiltered(chips);
  } else{
    setRows(inventory);
    setFiltered(inventory);
  }
  

}
const handleCurrentYear = ()=>{
  setCurrentYear(!currentYear);
  handleChipFilter();
  

};
useEffect(() => {
  handleChipFilter();
    
}, [currentYear]);
 

useEffect(() => {
  dispatch({ type: 'FETCH_INVENTORY', payload: user.id });
    
}, []);

  return (
    <div>
    <PageHeader name={params.catagory} />
   <div className="container">
  
  
    <div>
    <Breadcrumbs aria-label="breadcrumb">
      <Link
          underline="hover"
          color="inherit"
          href="inventory#/inventory"
        >
          Inventory
        </Link>
         
        <Link
          underline="hover"
          color="textPrimary"
          href={`/inventory#/seedinfo/${params.id}`}
          aria-current="page"
        >
          {params.catagory}
        </Link>
      </Breadcrumbs>
    </div>
    
<Grid container>
  
  
  
  <Grid item xs={12}>
  <Box
  display='flex'
  justifyContent='flex-end'>
  <TextField
        variant="outlined"
        value={searchText}
        onChange = {(event)=>requestSearch(event.target.value)}
        placeholder="Search…"
        size='small'
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: searchText ? 'visible' : 'hidden' }}
              onClick={(event)=>requestSearch('')}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        />
       

    </Box>
    </Grid>
</Grid>
<hr />
<Grid
   
  item xs={12}>
    <Box sx={{
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    listStyle: 'none',
    spacing: 1,
    p: 0.5,
    m: 0,
  }}>
    
      <Box sx={{mx:.5}}>
      <Chip 
      label="Current Year Seeds"
      color ="primary"
      variant = {currentYear ? "default":"outlined"}
      onClick = {handleCurrentYear}
      />
      </Box>
      
      {/* <Box sx={{mx:.5}}>
      <Chip 
      label="Direct sow"
      color ="primary"
      variant = "outlined"
      />
      </Box>*/}
    </Box>
  </Grid>
<div className="cardwrap" > 
  
  
  
  
  {filtered.map(items => {
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
</div>



                        
                      
                      
       
     
  );
}

export default InventoryList;
