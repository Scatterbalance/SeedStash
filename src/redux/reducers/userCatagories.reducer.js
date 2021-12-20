const userCatagoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_CATAGORIES':
      return action.payload;
    default:
      return state;
  }
};

// this will store catagories of seeds
export default userCatagoriesReducer;
