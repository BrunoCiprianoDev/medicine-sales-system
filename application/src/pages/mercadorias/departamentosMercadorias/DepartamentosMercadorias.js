import React from 'react'
import styles from './DepartamentosMercadorias.module.css'

import iconeInfantil from '../../../assets/icon-infantil.png'
import iconeHigiene from '../../../assets/icon-higiene.png'
import iconeCosmeticos from '../../../assets/icon-cosmeticos.png'
import iconeMedicamentos from '../../../assets/icon-medicamentos.png'
import iconeFitness from '../../../assets/icon-fitness.png'
import iconeBeleza from '../../../assets/icon-beleza.png'
import iconeSaude from '../../../assets/icon-saude.png'
import iconeIdoso from '../../../assets/icon-idoso.png'
const DepartamentosMercadorias = () => {
  return (
    <div className={styles.MainContainer}>
        <div className={styles.ContainerTitle}>
            <h1>Departamentos</h1>
        </div>
        <div className={styles.ContainerDepartment}>
            <div className={styles.ContainerMenu}>
                <button><img src={iconeMedicamentos} alt="" />Medicamento</button>
                <button><img src={iconeCosmeticos} alt="" />Dermos-cosméticos</button>
                <button><img src={iconeIdoso} alt="" />Idoso</button>
                <button><img src={iconeBeleza} alt="" />Beleza</button>
                <button><img src={iconeSaude} alt="" />Saúde</button>
                <button><img src={iconeHigiene} alt="" />Higiene</button>
                <button><img src={iconeInfantil} alt="" />Infantil</button>  
                <button><img src={iconeFitness} alt="" />Fitness</button>
            </div>
        </div>
    </div>
  )
}

export default DepartamentosMercadorias