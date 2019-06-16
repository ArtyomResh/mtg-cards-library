import { createReducer, createAction } from 'redux-act'

/** Submit login beginning */
const submitLoginSuccess = createAction('SUBMIT_LOGIN_SUCCESS')
const handleSubmitLoginSuccess = state => ({
  ...state,
  isSubmiting: false,
  isLogedIn: true,
})

const submitLoginFail = createAction('SUBMIT_LOGIN_FAIL')
const handleSubmitLoginFail = (state, payload) => ({
  ...state,
  isSubmiting: false,
  isLogedIn: false,
  error: {
    message: payload.message,
    status: payload.status,
  },
})

export const submitLogin = createAction('SUBMIT_LOGIN')
const handleSubmitLogin = state => ({
  ...state,
  isSubmiting: true,
  isLogedIn: false,
})
/** Submit login ending */

/** Check login beginning */
const checkLoginSuccess = createAction('CHECK_LOGIN_SUCCESS')
const handleCheckLoginSuccess = state => ({
  ...state,
  isLogedIn: true,
})

const checkLoginFail = createAction('CHECK_LOGIN_FAIL')
const handleCheckLoginFail = state => ({
  ...state,
  isLogedIn: false,
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
  isSubmiting: false,
  isLogedIn: false,
  error: {},
}

export default createReducer(actions, initialState)
