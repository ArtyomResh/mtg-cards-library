import { connect } from 'react-redux'
import * as cardsActions from '../../../reducers/cards'
import FiltersGroup from './FiltersGroup'

const mapStateToProps = ({ cards }) => ({
  filtersState: cards.filtersState,
})

const mapDispatchToProps = {
  updateCardFilters: cardsActions.updateCardFilters,
  resetSearchQuery: cardsActions.resetSearchQuery
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersGroup)
