import { put, call, all, cancel, takeLatest } from 'redux-saga/effects'
import checkCookieExistenceByName from '../../utils/checkCookieExistenceByName'

/** Submit login saga beginning */
const submitLoginRequest = ({ email, password }) =>
  fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => response.json())
    .catch(error => error)

function* submitLoginWorker(action) {
  try {
    const {
      _id,
      name,
      email,
      decks,
      message,
      status,
    } = yield call(submitLoginRequest, action.payload)

    if (status >= 400) {
      yield put({ type: 'SUBMIT_LOGIN_FAIL', payload: { message } })
      yield cancel()
    }

    yield put({ type: 'SUBMIT_LOGIN_SUCCESS', payload: { _id, name, email, decks } })
  } catch (error) {
    yield put({ type: 'SUBMIT_LOGIN_FAIL', payload: error.message })
  }
}
/** Submit login saga ending */

/** Check login saga beginning */
function* checkLoginWorker() {
  try {
    const mtgLibrarySessionCookie = yield call(() => checkCookieExistenceByName('mtg_library_user_sid'))
    const isLibrarySessionCookieExists = mtgLibrarySessionCookie.length

    if (isLibrarySessionCookieExists) {
      yield put({ type: 'CHECK_LOGIN_SUCCESS' })
    } else {
      yield put({ type: 'CHECK_LOGIN_FAIL', payload: { message: 'You are not logged in' } })
    }
  } catch (error) {
    yield put({ type: 'CHECK_LOGIN_FAIL', payload: error.message })
  }
}
/** Check login saga ending */

export default function* loginWatchers() {
  yield all([
    takeLatest('CHECK_LOGIN', checkLoginWorker),
    takeLatest('SUBMIT_LOGIN', submitLoginWorker),
  ])
}
