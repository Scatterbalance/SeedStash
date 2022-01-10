import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AddSeedForm from '../AddSeedForm/AddSeedForm';
import PageHeader from '../PageHeader/PageHeader';


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
    <div>
    <PageHeader name="Add New Seed" />
      <div className="container">
      

      
      {/* <p>{JSON.stringify(catagories)}</p> */}
      <AddSeedForm />
      </div>
    </div>

  );
}

export default AddSeedPage;
