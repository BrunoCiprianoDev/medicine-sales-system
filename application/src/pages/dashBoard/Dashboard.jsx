import React from 'react'

import styles from './Dashboard.module.css'

import iconeVendas from '../../assets/icon-vendas.png'
import iconeDesconto from '../../assets/icon-desconto.png'
import iconeReceita from '../../assets/icon-cifrao.png'

import ColumnChart from '../../components/dashBoardComponents/painelInferior/columnChart/ColumnChart'
import Cards from '../../components/dashBoardComponents/painelSuperior/cards/Cards'

const Dashboard = () => {

  return (
    <div className={styles.MainContainer}>
      <div className={styles.PainelSuperior}>
        <h2 className={styles.Title}>Painel principal</h2>
        <div className={styles.CardsArea}>
          <Cards data={'10050'} title={'Vendas'} >
            <img src={iconeVendas} alt="Icone ilustração de um idoso" />
          </Cards>
          <Cards data={'2075.00'} title={'Receita'}>
            <img src={iconeDesconto} alt="Icone ilustração de um idoso" />
          </Cards>
          <Cards data={'560.00'} title={'Descontos'} >
            <img src={iconeReceita} alt="Icone ilustração de um idoso" />
          </Cards>
        </div>
      </div>
      <div className={styles.PainelInferior}>
        <div className={styles.GraphicArea}>
          <ColumnChart />
        </div>
      </div>
      <div className={styles.PainelLateral}>
      </div>
    </div>
  )
}

export default Dashboard