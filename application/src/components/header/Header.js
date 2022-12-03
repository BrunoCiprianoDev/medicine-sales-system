import React from 'react'

// CSS
import styles from './Header.module.css'
import iconSearch from '../../assets/icon-search.png'
import iconAdicionar from '../../assets/icon-adicionar.png';

const Header = () => {
  return (
    <div className={styles.MainContainer}>
        <button className={styles.buttonNew}><img src={iconAdicionar} /> Adicionar</button>
        <form className={styles.FormContainer}>
          <input type="text" placeholder='search area'/>
          <button type='submit'><img src={iconSearch}/></button>
        </form>
        
    </div>
  )
}

export default Header