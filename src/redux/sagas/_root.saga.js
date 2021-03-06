import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import inventorySaga from './inventory.saga';
import catagoriesSaga from './catagories.saga';
import addInventory from './addSeed.saga';
import userCatagories from './userCatagories.saga';
import deleteSeed from './delete.inventory.saga';
import updateSeedSaga from './updateSeed.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    inventorySaga(),
    catagoriesSaga(),
    addInventory(),
    userCatagories(),
    deleteSeed(),
    updateSeedSaga(),
  
  ]);
}
