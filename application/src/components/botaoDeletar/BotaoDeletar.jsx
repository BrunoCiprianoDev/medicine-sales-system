import React from 'react'

import styles from './BotaoDeletar.module.css'

import iconeDeletar from '../../assets/icon-deletar.png'

const BotaoDeletar = ({ handleDelete, arg }) => {
    return (
        <button className={styles.buttonDeletar} onClick={() => handleDelete(arg)}>
            <img src={iconeDeletar} alt='' />
        </button>
    )
}

export default BotaoDeletar
