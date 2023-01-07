import React from 'react'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { urlServer } from '../../serverConfig'
import styles from './ListSelectComponent.module.css'
import LotSelect from './LotSelect'
const ListSelectComponent = ({ elemento, removeElement, addElement }) => {
    
     const { data } = useFetch(urlServer + '/lotes?mercadoriaId=' + elemento.id)
     const [lotSelectVisible, setLotSelectVisible] = useState(false)

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
        <tr key={elemento.id} className={styles.ComponenteList}>
            {lotSelectVisible && <LotSelect lotes={data} setLotSelectVisible={setLotSelectVisible} />}
            <td className={styles.ComponentListDiv}>{elemento.nome}</td>
            <td className={styles.ComponentListDiv}>{elemento.valor_venda}</td>
            <td className={styles.ComponentListDiv}>{elemento.desconto}</td>
            <td className={styles.ComponentListDiv}>{elemento.quant}</td>
            <td className={styles.ComponentListDiv}>{(elemento.quant * elemento.valor_venda).toFixed(2)}</td>
            <td className={styles.ComponentListDiv}>
                <button onClick={() => removeElement(elemento)} className={styles.buttonRemove}>-</button>
                <button onClick={() => verify()} className={styles.buttonAdd}>+</button>
                <button onClick={() => setLotSelectVisible(true)} className={styles.buttonLote}>L</button>
            </td>
        </tr>
    )
}

export default ListSelectComponent