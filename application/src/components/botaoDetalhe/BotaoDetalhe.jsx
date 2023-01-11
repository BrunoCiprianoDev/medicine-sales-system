import React from 'react'

import styles from './BotaoDetalhe.module.css'

import iconeDetalhe from '../../assets/icon-detalhe.png'

const BotaoDetalhe = ({ handleDetail, arg }) => {
    return (
        <button className={styles.buttonDetalhe} onClick={() => handleDetail(arg)}>
            <img src={iconeDetalhe} alt='' />
        </button>
    )
}

export default BotaoDetalhe