import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addSeed (action) {
    // post route to server
    try {
        
        const newSeed = yield axios.post(`/api/inventory/`, action.payload);
        console.log('post:', newSeed.data);
        yield put({ type: 'FETCH_INVENTORY', payload: action.payload.user_id});
       
    } catch {
        console.log('post inventory error');
    }
        
}

function* addSeedSaga() {
    yield takeLatest('ADD_INVENTORY', addSeed);
  }


export default addSeedSaga;