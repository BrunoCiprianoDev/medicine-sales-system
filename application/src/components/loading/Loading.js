import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles['LoadContainer']}>
        <div className={styles['c-loader']}></div>
    </div>
  )
}

export default Loading