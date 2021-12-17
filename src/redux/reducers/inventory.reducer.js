const inventoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_INVENTORY':
      return action.payload;
    default:
      return state;
  }
};

// this will store inventory items of user
export default inventoryReducer;
