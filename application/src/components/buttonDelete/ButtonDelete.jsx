import React from 'react'
import styles from './ButtonDelete.module.css'

import iconeDeletar from '../../assets/icon-deletar.png'

const ButtonDelete = ({ handleDelete, arg }) => {
    return (
        <button className={styles.buttonDeletar} onClick={() => handleDelete(arg)}>
            <img src={iconeDeletar} alt='' />
        </button>
    )
}

export default ButtonDelete
