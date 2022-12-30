import React from 'react'
import PainelSuperior from '../../components/dashBoardComponents/painelSuperior/PainelSuperior'
import styles from './Dashboard.module.css'

const Dashboard = () => {

  return (
    <div className={styles.MainContainer}>
        <div className={styles.PainelSuperior}>
           <PainelSuperior/>
        </div>
        <div className={styles.PainelInferior}>
        </div>
        <div className={styles.PainelLateral}>
        </div>
    </div>
  )
}

export default Dashboard