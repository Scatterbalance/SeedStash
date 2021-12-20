import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCatagories (action) {
    // get details from the DB
    try {
        const catagory = yield axios.get(`/api/catagories/`);
        console.log('get:', catagory.data);
        yield put({ type: 'SET_CATAGORIES', payload: catagory.data});
       
    } catch {
        console.log('Get catagories error');
    }
        
}

function* catagoriesSaga() {
    yield takeLatest('FETCH_CATAGORIES', fetchCatagories);
  }


export default catagoriesSaga;