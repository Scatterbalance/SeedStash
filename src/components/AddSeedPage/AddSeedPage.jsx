import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AddSeedForm from '../AddSeedForm/AddSeedForm';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function AddSeedPage() {

  useEffect(() => {
    dispatch({ type: 'FETCH_CATAGORIES' });
    
  }, []);


  const catagories = useSelector((store) => store.catagories);
  const dispatch = useDispatch();
  








  return (
    <div className="container">
      <p>Add seed Page</p>

      
      <p>{JSON.stringify(catagories)}</p>
      <AddSeedForm />
    </div>
  );
}

export default AddSeedPage;
