import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { urlServer } from '../../serverConfig'
import styles from './ListSearchComponent.module.css'


const ListSearchComponent = ({ handleList, item }) => {

    const { data } = useFetch(urlServer + '/lotes?mercadoriaId=' + item.id)

    const currentItensInventory = () => {
        var unidades = 0;
        data && data.map((lote) => (
            unidades += parseFloat(lote.unidades)
        ))
        return unidades;
    }

    const verify = () => {
        if (currentItensInventory() > 0) {
            handleList(item)
        } else {
            alert('Mercadoria em falta!')
        }
    }

    return (
        <div key={item.id} className={styles.ElementList} onClick={() => verify()}>
            <label>{item.nome}</label>
            <label>{item.valor_venda}</label>
            <label>{currentItensInventory()}</label>
        </div>
    )
}

export default ListSearchComponent