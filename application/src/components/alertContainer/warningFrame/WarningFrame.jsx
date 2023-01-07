import React from 'react'
import styles from './WarningFrame.module.css'


const WarningFrame = (props) => {

  return (
    <div className={styles.BoxContainer}>
      <div className={styles.HeaderContainer}>
        <h2 className={styles.Title}>Atenção!</h2>
        <h2 className={styles.Exit}>X</h2>
      </div>
      <p className={styles.Text}>{props.children}
      </p>
    </div>
  )
}

export default WarningFrame