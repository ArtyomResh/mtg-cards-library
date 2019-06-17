import { connect } from 'react-redux'
import * as cardsActions from '../../reducers/cards'
import Search from './Search'

const mapDispatchToProps = {
  getCards: cardsActions.getCards,
}

export default connect(
  null,
  mapDispatchToProps,
)(Search)
