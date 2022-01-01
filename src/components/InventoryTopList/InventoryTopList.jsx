import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import InventoryListItem from '../InventoryListItem/InventoryListItem';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead,TableRow,Paper, IconButton,Box, InputLabel, Select, MenuItem } from '@material-ui/core' ;
import {Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Collapse} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Link as RouterLink } from 'react-router-dom';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import SeedInfoPage from '../SeedInfoPage/SeedInfoPage';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function InventoryTopList(props) {


  const inventory = useSelector((store) => store.inventory);
  const user = useSelector((store) => store.user);
  const catagories = useSelector((store) => store.catagories);
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);
 //accordian 
 const [toggleItem, setToggleItem] = useState( false );
 






  return (
    <div className="container">
      

          
        
       

        

         



          <TableContainer component={Paper}>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setToggleItem(!toggleItem)}
               >
                {toggleItem ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row" >
            <h3>{props.catagory.catagory}</h3>
            </TableCell>
            
            
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan = {6}>
              <Collapse in={toggleItem} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  
                


                  <Table  sx={{ minWidth: 250 }} size="small"  aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Plant Name</TableCell>
                        <TableCell align="right">Qty</TableCell>
                        <TableCell align="right">Expiration Year</TableCell>
                        <TableCell align="right">view more</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {inventory.map((inventory)=>{
                        if (inventory.catagory === props.catagory.catagory){
                          
                          
                          return(<SeedInfoPage key = {inventory.id} inventory= {inventory} />
                      
                        
                      )}//end if
                      } 
                      )//end map 
                      }
                      
    
                    </TableBody>
                  </Table>
                  
                </Box>
              </Collapse>
            </TableCell>
            


          </TableRow>
          </TableContainer>
  
        
        
        
      </div>
     
        
      
    
  );
}

export default InventoryTopList;
