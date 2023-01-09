import React from 'react'
import styles from './Cards.module.css'
const Cards = (props) => {
  return (
    <button className={styles.MainContainer} >
      <div className={styles.TextArea}>
        <h3 className={styles.Title}>{props.title}</h3>
        <h4 className={styles.Data}>R${props.data}</h4>
      </div>
      {props.children}
    </button>
  )
}

export default Cards