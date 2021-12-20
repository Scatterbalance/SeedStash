import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function InventoryListItem(props) {
  return (
    <div className="container">
      <div>
        <section>{JSON.stringify(props.inventory)}</section>
        <p>{props.inventory.name},{props.inventory.quantity}</p>
      </div>
    </div>
  );
}

export default InventoryListItem;
