import { put, call, all, takeLatest } from 'redux-saga/effects'
import checkCookieExistenceByName from '../../utils/checkCookieExistenceByName'

/** Set user saga beginning */
function* setUserWorker(action) {
  yield put({ type: 'GET_USER_SUCCESS', payload: action.payload })
}
/** Set user saga ending */

/** Get user saga beginning */
const getUserRequest = userId =>
  fetch(`/api/users/${userId}`, { method: 'GET' })
    .then(response => console.log('response: ', response) || response.json())
    .catch(error => error)

function* getUserWorker() {
  try {
    yield put({ type: 'GET_USER' })

    const mtgLibraryUserIdCookie = yield call(() => checkCookieExistenceByName('mtg_library_user_id'))
    const userIdFromCookie = mtgLibraryUserIdCookie[0].split('=')[1]
    const user = yield call(getUserRequest, userIdFromCookie)

    yield put({ type: 'GET_USER_SUCCESS', payload: user })
  } catch (error) {
    console.log(error)
    yield put({ type: 'GET_USER_FAIL', payload: error.message })
  }
}
/** Get user saga ending */

export default function* userWatchers() {
  yield all([
    takeLatest('SUBMIT_LOGIN_SUCCESS', setUserWorker),
    takeLatest('CHECK_LOGIN_SUCCESS', getUserWorker)
  ])
}
