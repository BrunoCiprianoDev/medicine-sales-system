import { React } from 'react'

import styles from './Header.module.css'

import iconSearch from '../../assets/icon-search.png'
import iconAdicionar from '../../assets/icon-adicionar.png';
import { useHeader } from './useHeader';

const Header = () => {

  const {
    addOptionVisible, 
    handleFormSelector, 
    searchBarVisible, 
    handleSearch, 
    setQuery, 
    query} = useHeader()

  return (
    <div className={styles.MainContainer}>
      {addOptionVisible &&
        <button
          className={styles.buttonNew}
          onClick={() => handleFormSelector()}>
          <img src={iconAdicionar} alt='' /> Adicionar
        </button>}
      {searchBarVisible &&
        <form
          onSubmit={handleSearch}
          className={styles.FormContainer}>
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder='Pesquisar' />
          <button
            type='submit'>
            <img src={iconSearch} alt='' />
          </button>
        </form>}
    </div>
  )
}

export default Header