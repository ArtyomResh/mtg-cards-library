import { createReducer, createAction } from 'redux-act'

/** Submit login beginning */
const submitLoginSuccess = createAction('SUBMIT_LOGIN_SUCCESS')
const handleSubmitLoginSuccess = state => ({
  ...state,
  isSubmitting: false,
  isLoggedIn: true,
  error: {},
})

const submitLoginFail = createAction('SUBMIT_LOGIN_FAIL')
const handleSubmitLoginFail = (state, payload) => ({
  ...state,
  isSubmitting: false,
  isLoggedIn: false,
  error: {
    message: payload.message,
    status: payload.status,
  },
})

export const submitLogin = createAction('SUBMIT_LOGIN')
const handleSubmitLogin = state => ({
  ...state,
  isSubmitting: true,
  isLoggedIn: false,
})
/** Submit login ending */

/** Check login beginning */
const checkLoginSuccess = createAction('CHECK_LOGIN_SUCCESS')
const handleCheckLoginSuccess = state => ({
  ...state,
  isLoggedIn: true,
})

const checkLoginFail = createAction('CHECK_LOGIN_FAIL')
const handleCheckLoginFail = state => ({
  ...state,
  isLoggedIn: false,
})

export const checkLogin = createAction('CHECK_LOGIN')
const handleCheckLogin = state => state
/** Check login ending */

const actions = {
  [submitLoginSuccess]: handleSubmitLoginSuccess,
  [submitLoginFail]: handleSubmitLoginFail,
  [submitLogin]: handleSubmitLogin,

  [checkLoginSuccess]: handleCheckLoginSuccess,
  [checkLoginFail]: handleCheckLoginFail,
  [checkLogin]: handleCheckLogin,
}

const initialState = {
  isSubmitting: false,
  isLoggedIn: false,
  error: {},
}

export default createReducer(actions, initialState)
