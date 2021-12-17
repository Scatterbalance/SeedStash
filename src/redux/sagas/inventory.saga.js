import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchInventory (action) {
    // get details from the DB
    try {
        const inventory = yield axios.get(`/api/inventory/`, action.payload);
        console.log('post:', inventory.data);
        yield put({ type: 'SET_INVENTORY', payload: inventory.data});
       
    } catch {
        console.log('post error');
    }
        
}

function* inventorySaga() {
    yield takeLatest('FETCH_INVENTORY', fetchInventory);
  }


export default inventorySaga;