import React from 'react'

import styles from './Dashboard.module.css'

import iconeVendas from '../../assets/icon-vendas.png'
import iconeDesconto from '../../assets/icon-desconto.png'
import iconeReceita from '../../assets/icon-cifrao.png'

import Cards from '../../components/dashBoardComponents/painelSuperior/cards/Cards'
import { urlServer } from '../../serverConfig'
import ComponenteLista from '../../components/componenteLista/ComponenteLista'
import { parametrosNotificacoes } from '../notificacoes/pr_notificacoes'
import ColumnChart from '../../components/dashBoardComponents/painelInferior/columnChart/ColumnChart'

const Dashboard = () => {

  return (
    <div className={styles.MainContainer}>
      <div className={styles.PainelSuperior}>
        <h2 className={styles.Title}>Painel principal</h2>
        <div className={styles.CardsArea}>
          <Cards data={'10050'} title={'Vendas'} >
            <img src={iconeVendas} alt="Vendas" />
          </Cards>
          <Cards data={'2075.00'} title={'Receita'}>
            <img src={iconeDesconto} alt="Descontos" />
          </Cards>
          <Cards data={'560.00'} title={'Descontos'} >
            <img src={iconeReceita} alt="Receita" />
          </Cards>
        </div>
      </div>
      <div className={styles.PainelInferior}>
        <div className={styles.GraphicArea}>
          <ColumnChart/>
        </div>
      </div>
      <div className={styles.PainelLateral}>
        <ComponenteLista
          titulo={'Notificações'}
          urlFetch={`${urlServer}/notificacoes/`}
          parametros={parametrosNotificacoes}
          filtro={``}
          opcaoEditar={false}
        />
      </div>
    </div>
  )
}

export default Dashboard