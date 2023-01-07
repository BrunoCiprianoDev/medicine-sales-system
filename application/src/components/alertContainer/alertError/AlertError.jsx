import React from 'react'
import styles from './AlertError.module.css'

const AlertError = (props) => {
  return (
    <div className={styles.MainContainer}>
        <div className={styles.Card}>
            <h3>{props.children}</h3>
        </div>
    </div>
  )
}

export default AlertError