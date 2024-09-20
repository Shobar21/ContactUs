import React from 'react'

import styles from '../Button/Button.module.css'
function Button(props) {
  return (
    <button
      className={props.isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {props.icon}
      {props.text}
    </button>
  )
}

export default Button
