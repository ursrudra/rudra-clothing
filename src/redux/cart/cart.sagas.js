import {takeLatest, put, call,all } from 'redux-saga/effects'
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSingOut(){
    yield put(clearCart())
}
export function* onSignoutSuccess(){
 yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSingOut)
}

export function* cartSagas(){
    yield all([call(onSignoutSuccess)])
}