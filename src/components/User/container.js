import { connect } from 'react-redux'
// import * as cardsActions from '../../reducers/cards'
import User from './User'

// TODO добавить возможность выбора аватара
const mapStateToProps = ({ user }) => ({
  email: user.email,
})

// const mapDispatchToProps = {
//   getCards: cardsActions.getCards, // TODO добавить логаут
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(User)
