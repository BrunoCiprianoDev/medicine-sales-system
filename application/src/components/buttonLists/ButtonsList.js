import React from 'react'
import styles from './ButtonsList.module.css'

import iconeDeletar from '../../assets/icon-deletar.png'
import iconeDetalhe from '../../assets/icon-detalhe.png'

const ButtonsList = ({handleEdit, handleRemove, id}) => {
  return (
    <div className={styles.ElementData}>
        <button className={styles.buttonDetalhe} onClick={()=>(handleEdit(id))}>
            <img src={iconeDetalhe} alt=''/>
            </button>
            <button className={styles.buttonDeletar} onClick={()=>(handleRemove(id))}>
            <img src={iconeDeletar} alt=''/>
        </button>
    </div>
  )
}

export default ButtonsList