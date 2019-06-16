import { createReducer, createAction } from 'redux-act'

/** Search cards beginning */
const getCardsSuccess = createAction('GET_CARDS_SUCCESS')
const handleGetCardsSuccess = (state, { data, total_cards }) => ({
  ...state,
  cards: data,
  totalCards: total_cards,
  isCardsFetching: false,
})

const getCardsFail = createAction('GET_CARDS_FAIL')
const handleGetCardsFail = (state, payload) => ({
  ...state,
  isCardsFetching: false,
  error: payload.error,
})

export const getCards = createAction('GET_CARDS')
const handleGetCards = (state, { searchQuery }) => ({
  ...state,
  searchQuery,
  isCardsFetching: true,
})
/** Search cards end */

const actions = {
  [getCardsSuccess]: handleGetCardsSuccess,
  [getCardsFail]: handleGetCardsFail,
  [getCards]: handleGetCards,
}

const initialState = {
  cards: new Array(175).fill(null).map((item, index) => ({ id: index + 1 })),
  searchQuery: '',
  totalCards: null,
  isCardsFetching: false,
  error: {},
}

export default createReducer(actions, initialState)
