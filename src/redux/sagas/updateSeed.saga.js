import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateSeed (action) {
    // get details from the DB
    try {
        const seed = yield axios.put(`/api/inventory/`, action.payload);
        console.log('update:', seed.data);
        yield put({ type: 'FETCH_INVENTORY', payload: action.payload.user_id});
       
    } catch {
        console.log('Get catagories error');
    }
        
}

function* updateSeedSaga() {
    yield takeLatest('UPDATE_SEED', updateSeed);
  }


export default updateSeedSaga;