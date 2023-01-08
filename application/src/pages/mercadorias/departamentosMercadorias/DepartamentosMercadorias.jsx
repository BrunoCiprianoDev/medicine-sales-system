import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './DepartamentosMercadorias.module.css'

import iconeInfantil from '../../../assets/icon-infantil.png'
import iconeHigiene from '../../../assets/icon-higiene.png'
import iconeCosmeticos from '../../../assets/icon-cosmeticos.png'
import iconeMedicamentos from '../../../assets/icon-medicamentos.png'
import iconeOutros from '../../../assets/icon-outros.png'
import iconeBeleza from '../../../assets/icon-beleza.png'
import iconeSuplemento from '../../../assets/icon-suplemento.png'
import iconeIdoso from '../../../assets/icon-idoso.png'

const DepartamentosMercadorias = () => {

  const navigate = useNavigate();

  const handleSearchList = (query) => {
    navigate(`/listMercadorias/search?departamento_like=${query}`);
  }  

  return (
    <div className={styles.MainContainer}>
        <div className={styles.ContainerTitle}>
            <h1>Departamentos</h1>
        </div>
        <div className={styles.ContainerDepartment}>
            <div className={styles.ContainerMenu}>
                <button onClick={()=>(handleSearchList('MEDICAMENTO'))}>
                  <img src={iconeMedicamentos} alt="Ilustração de medicamentos" />Medicamento
                </button>
                <button onClick={()=>(handleSearchList('DERMATOLOGICO'))}>
                  <img src={iconeCosmeticos} alt="Ilustração de cosmeticos" />Dermatologia
                </button>
                <button onClick={()=>(handleSearchList('GERIATRIA'))}>
                  <img src={iconeIdoso} alt="Icone ilustração de um idoso" />Geriatria
                </button>
                <button onClick={()=>(handleSearchList('BELEZA'))}>
                  <img src={iconeBeleza} alt="Ilustração de produtos de beleza" />Beleza
                </button>
                <button onClick={()=>(handleSearchList('SUPLEMENTOS'))}>
                  <img src={iconeSuplemento} alt="Ilustração de suplementos" />Suplementos
                </button>
                <button onClick={()=>(handleSearchList('HIGIENE'))}>
                  <img src={iconeHigiene} alt="Ilustração de produtos de higiene" />Higiene
                </button>
                <button onClick={()=>(handleSearchList('INFANTIL'))}>
                  <img src={iconeInfantil} alt="Ilustração produtos infantis" />Infantil
                </button>  
                <button onClick={()=>(handleSearchList('OUTROS'))}>
                  <img src={iconeOutros} alt="Ilustração outros departamentos" />Outros
                </button>
            </div>
        </div>
    </div>
  )
}

export default DepartamentosMercadorias