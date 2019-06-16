
import { hot } from 'react-hot-loader/root'
import React, { PureComponent } from 'react'
import { bool, func } from 'prop-types'
import Search from '../Search'
import Cards from '../Cards'
import SignUp from '../SignUp'
import Login from '../Login'
import '../../styles/variables.styl'
import '../../styles/normalize.styl'
import '../../styles/fonts.styl'
import styles from './App.styl'

class App extends PureComponent {
  componentWillMount() {
    this.props.checkLogin()
  }

  render() {
    return (
      <main className={styles.app}>
        <article>
          <Search />
          <Cards />
        </article>
        <aside>
          <h2>Log in to Card Library</h2>
          {/* <SignUp /> */}
          <Login isLoggedIn={this.props.isLoggedIn} />
        </aside>
      </main>
    )
  }
}

App.propTypes = {
  isLoggedIn: bool,
  checkLogin: func,
}

export default hot(App)
