import React from 'react'
import { string } from 'prop-types'
import styles from './User.styl'
import logoUrl from '../../../static/images/icons/logo.svg'
import { ReactComponent as LogoutIcon } from '../../../static/images/icons/logout.svg'

const User = ({ email }) =>
  <div className={styles.user}>
    <img src={logoUrl} alt="User avatar" width={24} height={24} />

    <span>{email}</span>

    <button type="button">
      <LogoutIcon />
    </button>
  </div>

User.propTypes = {
  email: string,
}

export default User
