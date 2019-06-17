import { put, call, select, all, takeEvery } from 'redux-saga/effects'
import { pickBy, keys, compose, map, isEmpty } from 'ramda'

const getCardsRequest = ({ searchQuery, pageNumber = 1 }) =>
  fetch(`https://api.scryfall.com/cards/search?order=cmc&q=${searchQuery}&page=${pageNumber}`, { method: 'GET' })
    .then(response => response.json())

/** Get cards saga beginning */
function* getCardsWorker(action) {
  try {
    const [filtersState, searchQueryFromState] = yield all([
      select(state => state.cards.filtersState),
      select(state => state.cards.searchQuery),
    ])
    const getActiveFilters = value => value
    const filterActiveFilters = filtersGroup => compose(
      keys,
      pickBy(getActiveFilters),
    )(filtersGroup)
    const activeFilters = map(filterActiveFilters)(filtersState)

    // TODO вынести в отдельные функции
    const { searchQuery: searchQueryFromAction, pageNumber } = action.payload
    const color = isEmpty(activeFilters.color) ? '' : `+(c:${activeFilters.color.join(' or c:')})`
    const rarity = isEmpty(activeFilters.rarity) ? '' : `+(r:${activeFilters.rarity.join(' or r:')})`
    const type = isEmpty(activeFilters.type) ? '' : `+(t:${activeFilters.type.join(' or t:')})`
    const searchQueryFromFilters = `${color}${rarity}${type}`
    const searchQuery = `${searchQueryFromAction || searchQueryFromState}${searchQueryFromFilters}`

    // TODO вынести searchQuery в отдельную переменную
    const {
      data,
      total_cards,
      status,
    } = yield call(getCardsRequest, { searchQuery: searchQuery || 'c:w or c:r or c:g or c:u or c:b', pageNumber })

    if (status === 404 || status === 400) {
      yield put({ type: 'GET_CARDS_SUCCESS', payload: { data: [], total_cards: 0 } })
    } else {
      yield put({ type: 'GET_CARDS_SUCCESS', payload: { data, total_cards } })
    }
  } catch (error) {
    yield put({ type: 'GET_CARDS_FAIL', payload: error.message })
  }
}
/** Get cards saga end */

export default function* getCardsWatchers() {
  yield all([
    takeEvery('GET_CARDS', getCardsWorker),
    takeEvery('UPDATE_CARD_FILTERS', getCardsWorker),
  ])
}
