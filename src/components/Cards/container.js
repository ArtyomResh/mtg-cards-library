import { connect } from 'react-redux'
import * as cardsActions from '../../reducers/cards'
import Cards from './Cards'

const mapStateToProps = state => ({
  cards: state.cards.cards,
  totalCards: state.cards.totalCards,
  searchQuery: state.cards.searchQuery,
  activePageNumber: state.cards.activePageNumber,
  isCardsFetching: state.cards.isCardsFetching,
})

const mapDispatchToProps = {
  getCards: cardsActions.getCards,
  updatePageNumber: cardsActions.updatePageNumber,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards)
