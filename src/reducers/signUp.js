import { createReducer, createAction } from 'redux-act'

/** Submit signUp beginning */
const submitSignUpSuccess = createAction('SUBMIT_SIGN_UP_SUCCESS')
const handleSubmitSignUpSuccess = state => ({
  ...state,
  isSubmitting: false,
  isSignUp: true,
  error: {},
})

const submitSignUpFail = createAction('SUBMIT_SIGN_UP_FAIL')
const handleSubmitSignUpFail = (state, payload) => ({
  ...state,
  isSubmitting: false,
  isSignUp: false,
  error: {
    message: payload.message,
    status: payload.status,
  },
})

export const submitSignUp = createAction('SUBMIT_SIGN_UP')
const handleSubmitSignUp = state => ({
  ...state,
  isSubmitting: true,
  isSignUp: false,
})
/** Submit signUp ending */

const actions = {
  [submitSignUpSuccess]: handleSubmitSignUpSuccess,
  [submitSignUpFail]: handleSubmitSignUpFail,
  [submitSignUp]: handleSubmitSignUp,
}

const initialState = {
  isSubmitting: false,
  isSignUp: false,
  error: {},
}

export default createReducer(actions, initialState)
