import { createReducer, createAction } from 'redux-act'

/** Get user beginning */
const getUserSuccess = createAction('GET_USER_SUCCESS')
const handleGetUserSuccess = (state, payload) => ({
  ...state,
  ...payload,
  isUserFetching: false,
  error: {},
})

const getUserFail = createAction('GET_USER_FAIL')
const handleGetUserFail = (state, payload) => ({
  ...state,
  isUserFetching: false,
  error: payload,
})

export const getUser = createAction('GET_USER')
const handleGetUser = state => ({
  ...state,
  isUserFetching: true,
})
/** Get user ending */

const actions = {
  [getUserSuccess]: handleGetUserSuccess,
  [getUserFail]: handleGetUserFail,
  [getUser]: handleGetUser,
}

const initialState = {
  _id: '',
  name: '',
  email: '',
  decks: [],
  isUserFetching: false,
  error: {},
}

export default createReducer(actions, initialState)
