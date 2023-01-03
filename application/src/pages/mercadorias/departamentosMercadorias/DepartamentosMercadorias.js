import React from 'react'
import styles from './DepartamentosMercadorias.module.css'
import iconeInfantil from '../../../assets/icon-infantil.png'
import iconeHigiene from '../../../assets/icon-higiene.png'
import iconeCosmeticos from '../../../assets/icon-cosmeticos.png'
import iconeMedicamentos from '../../../assets/icon-medicamentos.png'
import iconeOutros from '../../../assets/icon-outros.png'
import iconeBeleza from '../../../assets/icon-beleza.png'
import iconeSuplemento from '../../../assets/icon-suplemento.png'
import iconeIdoso from '../../../assets/icon-idoso.png'
import { useNavigate } from 'react-router-dom'
const DepartamentosMercadorias = () => {

  const navigate = useNavigate();

  const handleSearchList = (query) => {
    navigate("/listMercadorias/search?departamento_like="+query);
  }  

  return (
    <div className={styles.MainContainer}>
        <div className={styles.ContainerTitle}>
            <h1>Departamentos</h1>
        </div>
        <div className={styles.ContainerDepartment}>
            <div className={styles.ContainerMenu}>
                <button onClick={()=>(handleSearchList('MEDICAMENTO'))}><img src={iconeMedicamentos} alt="" />Medicamento</button>
                <button onClick={()=>(handleSearchList('DERMATOLOGICO'))}><img src={iconeCosmeticos} alt="" />Dermatologia</button>
                <button onClick={()=>(handleSearchList('GERIATRIA'))}><img src={iconeIdoso} alt="" />Geriatria</button>
                <button onClick={()=>(handleSearchList('BELEZA'))}><img src={iconeBeleza} alt="" />Beleza</button>
                <button onClick={()=>(handleSearchList('SUPLEMENTOS'))}><img src={iconeSuplemento} alt="" />Suplementos</button>
                <button onClick={()=>(handleSearchList('HIGIENE'))}><img src={iconeHigiene} alt="" />Higiene</button>
                <button onClick={()=>(handleSearchList('INFANTIL'))}><img src={iconeInfantil} alt="" />Infantil</button>  
                <button onClick={()=>(handleSearchList('OUTROS'))}><img src={iconeOutros} alt="" />Outros</button>
            </div>
        </div>
    </div>
  )
}

export default DepartamentosMercadorias