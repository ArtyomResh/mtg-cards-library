
import React from 'react'
import { string } from 'prop-types'
import { Field as ReactFinalFormField } from 'react-final-form'
import cn from 'classnames'
import styles from './Field.styl'

const Field = ({ id, name, label, type }) =>
  <ReactFinalFormField name={name}>
    {({ input, meta: { invalid, touched, submitFailed, error } }) => {
      // const shouldShowError = invalid && submitFailed

      return (
        <div
          className={cn({
            [styles['field-wrapper']]: true,
            [styles['field-wrapper_filled']]: input.value,
          })}
        >
          <input
            {...input}
            id={id}
            type={type}
          />
          <label htmlFor={id}>
            {label}
          </label>

          {error && touched &&
            <span className={styles.error}>{error}</span>
          }
        </div>
      )
    }}
  </ReactFinalFormField>

Field.propTypes = {
  id: string,
  name: string,
  label: string,
  type: string,
}

export default Field
