const catagoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATAGORIES':
      return action.payload;
    default:
      return state;
  }
};

// this will store catagories of seeds
export default catagoriesReducer;
