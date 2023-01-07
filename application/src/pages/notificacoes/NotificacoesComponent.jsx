import React from 'react'
import styles from './NotificacoesComponent.module.css'
import iconeDetalhe from '../../assets/icon-detalhe.png'
import { useFetch } from '../../hooks/useFetch'
import { urlServer } from '../../serverConfig'

const NotificacoesComponent = ({item, handleEdit, vencimento, estoqueBaixo}) => {

    //Os recursos usados aqui são apenas para visualização das telas
    const {data: mercadoria} = useFetch(urlServer+'/mercadorias/'+item.mercadoriaId)

    return (
        <tr className={styles.ListComponent} key={item.id}>
            <td className={styles.ElementData}>{item.lote}</td>
            <td className={styles.ElementData}>{item.validade}</td>
            <td className={styles.ElementData}>{item.unidades}</td>
            <td className={styles.ElementData}>{mercadoria && mercadoria.nome}</td>
            <td className={styles.ElementData} style={{color:'red', fontWeight:'bold'}}>{vencimento ? 'Proximo do vencimento' : '' }{estoqueBaixo ? 'Estoque baixo' : ''}</td>
            <td className={styles.ElementData}>
                <button className={styles.buttonDetalhe} onClick={() => handleEdit(item.mercadoriaId)}>
                    <img src={iconeDetalhe} alt='' />
                </button>
            </td>
        </tr>
    )
}

export default NotificacoesComponent