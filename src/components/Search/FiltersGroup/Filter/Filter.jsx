
import React from 'react'
import { oneOfType, node, string, bool, func } from 'prop-types'
import styles from './Filter.styl'

const Filter = ({ id, name, checked, content, onChange }) => {
  const handleChange = data => {
    onChange(data)
  }

  return (
    <div className={styles.filter}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />

      <label htmlFor={id}>
        {content}
      </label>
    </div>
  )
}

Filter.propTypes = {
  id: string,
  name: string,
  checked: bool,
  content: oneOfType([node, string]),
  onChange: func,
}

export default Filter
