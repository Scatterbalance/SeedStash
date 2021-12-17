import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function InfoPage() {



  const inventory = useSelector((store) => store.inventory);
  const dispatch = useDispatch();
  



  useEffect(() => {
    dispatch({ type: 'FETCH_INVENTORY' });
    
  }, []);





  return (
    <div className="container">
      <p>Info Page</p>
      <p>{JSON.stringify(inventory)}</p>
    </div>
  );
}

export default InfoPage;
