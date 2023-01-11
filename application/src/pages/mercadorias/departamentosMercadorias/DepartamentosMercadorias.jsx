import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './DepartamentosMercadorias.module.css'

import { menuDepartamentos } from '../parametros/pr_mercadorias'

const DepartamentosMercadorias = () => {

  const navigate = useNavigate();

  const handleSearchList = (query) => {
    navigate(`/mercadorias/search?departamento_like=${query}`);
  }  

  return (
    <div className={styles.MainContainer}>
        <div className={styles.ContainerTitle}>
            <h1>Departamentos</h1>
        </div>
        <div className={styles.ContainerDepartment}>
            <div className={styles.ContainerMenu}>

               {menuDepartamentos.map((departamento)=>(
                <button key={departamento.id} onClick={()=>(handleSearchList(departamento.departamento))}>
                  <img src={departamento.src} alt={departamento.alt}/>
                  {departamento.rotulo}
                </button>
               ))}
               
            </div>
        </div>
    </div>
  )
}

export default DepartamentosMercadorias