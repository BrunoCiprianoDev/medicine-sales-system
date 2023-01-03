import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { urlServer } from '../../serverConfig'
import CircleBar from '../circleBar/CircleBar'
import styles from './GraphicCurrentItens.module.css'

const GraphicCurrentItens = ({mercadoria}) => {

const {data} = useFetch(urlServer+"/lotes?mercadoriaId="+mercadoria.id)

const currentItensInventory = () =>{
    var unidades = 0;
    data && data.map((lote)=>(
        unidades+=parseFloat(lote.unidades)
    ))
    return unidades;
  }

  const percentualStock = ()=> {
    return (currentItensInventory()/parseFloat(mercadoria.estoque_maximo))*100
  }

  return (
    <td className={styles.ElementData}>
        <CircleBar 
            percentage={percentualStock()}
            circleWidth='58' 
            paramRadius={25} 
            profile={7} 
            numberSize={'0.4em'}
            disableText={true}/>
    </td>
  )
}

export default GraphicCurrentItens