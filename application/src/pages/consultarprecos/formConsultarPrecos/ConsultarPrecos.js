import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ConsultarPrecos.module.css'

const ConsultarPrecos = () => {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e)=>{
    e.preventDefault();
    navigate('/consulta/search?q='+query);
  }


  return (
    <div className={styles.MainContainer}>
        <h2 className={styles.Tittle}>Consulta de preços</h2>    
        <div className={styles.FormContainer}>
            <form onSubmit={handleSearch}>
                <label>Insira informações sobre a mercadoria:
                    <input type="text" onChange={(e)=>setQuery(e.target.value)}/>
                </label>
                <input type="submit" value='Pesquisar'/>
            </form>
        </div>
    </div>
  )
}

export default ConsultarPrecos