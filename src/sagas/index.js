import { all } from 'redux-saga/effects'
import cardsSaga from './cards'
import loginSaga from './login'
import signUpSaga from './signUp'

export default function* rootSaga() {
  yield all([
    cardsSaga(),
    loginSaga(),
    signUpSaga(),
  ])
}
