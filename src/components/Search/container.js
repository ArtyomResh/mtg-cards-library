import { connect } from 'react-redux'
import * as cardsActions from '../../reducers/cards'
import Search from './Search'

const mapStateToProps = () => {}

const mapDispatchToProps = {
  getCards: cardsActions.getCards,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)
