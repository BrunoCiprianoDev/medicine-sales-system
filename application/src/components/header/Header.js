import React from 'react'

// CSS
import styles from './Header.module.css'
import iconSearch from '../../assets/icon-search.png'


const Header = () => {
  return (
    <div className={styles.MainContainer}>
        <form className={styles.FormContainer}>
          <input type="text" placeholder='search area'/>
          <button type='submit' ><img src={iconSearch}/></button>
        </form>
    </div>
  )
}

export default Header