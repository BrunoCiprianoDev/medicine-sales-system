import React from 'react'

import styles from './BotaoDetalhe.module.css'

import iconeDetalhe from '../../assets/icon-detalhe.png'

const BotaoDetalhe = ({handleDetalhe, arg}) => {
    return (
        <button className={styles.buttonDetalhe} >
            <img src={iconeDetalhe} alt='' onClick={()=>handleDetalhe(arg)}/>
        </button>
    )
}

export default BotaoDetalhe