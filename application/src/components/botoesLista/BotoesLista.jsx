import React from 'react'
import styles from './BotoesLista.module.css'

import iconeDeletar from '../../assets/icon-deletar.png'
import iconeDetalhe from '../../assets/icon-detalhe.png'

const BotoesLista = ({handleEdit, handleRemove, id}) => {
  
  return (
    <td className={styles.ElementData}>
        <button className={styles.buttonDetalhe} onClick={()=>(handleEdit(id))}>
            <img src={iconeDetalhe} alt=''/>
            </button>
            <button className={styles.buttonDeletar} onClick={()=>(handleRemove(id))}>
            <img src={iconeDeletar} alt=''/>
        </button>
    </td>
  )
}

export default BotoesLista