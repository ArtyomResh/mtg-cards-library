import { put, call, cancel, takeLatest } from 'redux-saga/effects'

/** Submit signUp saga beginning */
const submitSignUpRequest = ({ name, email, password, confirmPassword }) =>
  fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, confirmPassword }),
  })
    .then(response => response.json())

function* submitSignUpWorker(action) {
  try {
    const { message, status } = yield call(submitSignUpRequest, action.payload)

    if (status >= 400) {
      yield put({ type: 'SUBMIT_SIGN_UP_FAIL', payload: { message } })
      yield cancel()
    }

    yield put({ type: 'SUBMIT_SIGN_UP_SUCCESS' })
  } catch (error) {
    yield put({ type: 'SUBMIT_SIGN_UP_FAIL', payload: error })
  }
}
/** Submit signUp saga ending */

export default function* signUpWatchers() {
  yield takeLatest('SUBMIT_SIGN_UP', submitSignUpWorker)
}
