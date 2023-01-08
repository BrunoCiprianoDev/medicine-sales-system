import React from 'react'

import styles from './ButtonDetail.module.css'

import iconeDetalhe from '../../assets/icon-detalhe.png'

const ButtonDetail = ({ handleDetail, arg }) => {
    return (
        <button className={styles.buttonDetalhe} onClick={() => handleDetail(arg)}>
            <img src={iconeDetalhe} alt='' />
        </button>

    )
}

export default ButtonDetail