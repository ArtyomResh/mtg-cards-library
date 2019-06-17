
import { hot } from 'react-hot-loader/root'
import React, { PureComponent } from 'react'
import { bool, func } from 'prop-types'
import Header from './Header'
import Search from '../Search'
import Cards from '../Cards'
import Decks from '../Decks'
import Authorization from '../Authorization'
import '../../styles/variables.styl'
import '../../styles/normalize.styl'
import '../../styles/fonts.styl'
import styles from './App.styl'

class App extends PureComponent {
  componentWillMount() {
    this.props.checkLogin()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <main className={styles.app}>
        <article>
          <Search />
          <Cards />
        </article>
        <aside>
          <Header isLoggedIn={isLoggedIn} />
          { isLoggedIn
            ? <Decks />
            : <Authorization />
          }
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
