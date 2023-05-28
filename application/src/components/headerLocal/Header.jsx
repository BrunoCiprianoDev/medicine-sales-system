import { React } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.css'

import iconSearch from '../../assets/icon-search.png'
import iconAdicionar from '../../assets/icon-adicionar.png';

const Header = ({ query, setQuery, sessao }) => {

  const navigate = useNavigate();

  const handleAdd = () =>{
    console.log(`${sessao}/form/adicionar`);
    navigate(`/${sessao}/form/adicionar`);
  }

  return (
    <div className={styles.MainContainer}>
      <button
        className={styles.buttonNew}>
        <img src={iconAdicionar} alt='' 
        onClick={()=>handleAdd()}
        />
        Adicionar
      </button>
      <form
        className={styles.FormContainer}>
        <input
          type="text"
          placeholder='Pesquisar'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button
          type='submit'
        >
          <img src={iconSearch} alt='' />
        </button>
      </form>
    </div>
  )
}

export default Header