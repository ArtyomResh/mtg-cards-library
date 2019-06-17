import React, { Fragment } from 'react'
import { bool } from 'prop-types'
import User from '../../User'
import styles from './Header.styl'

const Header = ({ isLoggedIn }) => {
  return (
    <header className={styles.header}>
      {isLoggedIn
        ? <User />
        : <h2>Log in to Card Library</h2>
      }
    </header>
  )
}

Header.propTypes = {
  isLoggedIn: bool,
}

export default Header
