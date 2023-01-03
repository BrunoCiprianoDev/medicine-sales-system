import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { urlServer } from '../../serverConfig'
import styles from './ListSelectComponent.module.css'

const ListSelectComponent = ({ elemento, removeElement, addElement }) => {
    
     const { data } = useFetch(urlServer + '/lotes?mercadoriaId=' + elemento.id)

     const currentItensInventory = () => {
        var unidades = 0;
        data && data.map((lote) => (
            unidades += parseFloat(lote.unidades)
        ))
        return unidades;
    }

    const verify = () => {
        if (currentItensInventory() > elemento.quant) {
            addElement(elemento)
        } else {
            alert('Nâo há mais mercadorias desse tipo no estoque')
        }
    }

    
    
    return (
        <div key={elemento.id} className={styles.ComponenteList}>
            <div>{elemento.nome}</div>
            <div>{elemento.valor_venda}</div>
            <div>{elemento.quant}</div>
            <div>{(elemento.quant * elemento.valor_venda).toFixed(2)}</div>
            <div className={styles.ButtonBox}>
                <button onClick={() => removeElement(elemento)} className={styles.buttonRemove}>-</button>
                <button onClick={() => verify()} className={styles.buttonAdd}>+</button>
            </div>
        </div>
    )
}

export default ListSelectComponent