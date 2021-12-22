
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteSeed (action) {
    // post route to server
    try {
        console.log('action:', action);
        const Seed = yield axios.delete(`/api/inventory/${action.payload.id}`);
        console.log('delete:', Seed.data);
        
        yield put({ type: 'FETCH_INVENTORY', payload: action.payload.user_id});
       
    } catch {
        console.log('delete inventory error');
    }
        
}

function* deleteSeedSaga() {
    yield takeLatest('DELETE_INVENTORY', deleteSeed);
  }


export default deleteSeedSaga;