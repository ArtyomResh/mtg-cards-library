import { createReducer, createAction } from 'redux-act'
import { lensPath, set } from 'ramda'

/** Get cards beginning */
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
/** Get cards end */

/** Filter cards beginning */
export const updateCardFilters = createAction('UPDATE_CARD_FILTERS')
const handleUpdateCardFilters = (state, { filterGroupName, filterName, checked }) => {
  const filterLens = lensPath(['filtersState', filterGroupName, filterName])

  return {
    ...set(filterLens, checked)(state), //TODO R.evlove
    activePageNumber: 1,
    isCardsFetching: true,
  }
}
/** Filter cards end */

/** Reset search query beginning */
export const resetSearchQuery = createAction('RESET_SEARCH_QUERY')
const handleResetSearchQuery = state => ({
  ...state,
  searchQuery: '',
})
/** Reset search query end */

/** Update page number beginning */
export const updatePageNumber = createAction('UPDATE_PAGE_NUMBER')
const handleUpdatePageNumber = (state, { activePageNumber }) => ({
  ...state,
  activePageNumber,
})
/** Update page number end */

const actions = {
  [getCardsSuccess]: handleGetCardsSuccess,
  [getCardsFail]: handleGetCardsFail,
  [getCards]: handleGetCards,

  [updateCardFilters]: handleUpdateCardFilters,

  [resetSearchQuery]: handleResetSearchQuery,

  [updatePageNumber]: handleUpdatePageNumber,
}

const initialState = {
  cards: new Array(175).fill(null).map((item, index) => ({ id: index + 1 })),
  searchQuery: '',
  filtersState: {
    color: {
      white: false,
      red: false,
      green: false,
      blue: false,
      black: false,
    },
    rarity: {
      common: false,
      uncommon: false,
      rare: false,
      mythic: false,
    },
    type: {
      creature: false,
      sorcery: false,
      instant: false,
      enchantment: false,
      land: false,
    },
  },
  activePageNumber: 1,
  totalCards: null,
  isCardsFetching: false,
  error: {},
}

export default createReducer(actions, initialState)
