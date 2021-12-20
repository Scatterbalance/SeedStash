import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import InventoryListItem from '../InventoryListItem/InventoryListItem';
import {Button} from '@material-ui/core'


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
          toggleItem?
          <div>
        <Button onClick = {()=>{setToggleItem(!toggleItem)}} >Collapse</Button>
        <section>{inventory.map(inventory=>{
          if (inventory.catagory === props.catagory.catagory){
            return(
            
              <InventoryListItem  key={inventory.id} inventory={inventory}/>
            )
          }
        })}</section></div>:
        <Button onClick = {()=>{setToggleItem(!toggleItem)}} >Expand</Button>
      }
        
      </div>
    </div>
  );
}

export default InventoryTopList;
