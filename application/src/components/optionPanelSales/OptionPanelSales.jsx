import React from 'react'
import styles from './OptionPanelSales.module.css'
import iconeVendas from '../../assets/icon-vendas.png'
import iconeEstoque from '../../assets/icon-estoque.png'
const OptionPanelSales = () => {
    return (
        <div className={styles.BoxContainer}>
            <h1 className={styles.Title}>Vendas</h1>
            <div className={styles.BoxOptions}>
                <button className={styles.Option}>
                    <div className={styles.Icon}>
                        <img src={iconeVendas} alt=""  />
                    </div>
                    <div className={styles.TitleOption}>Nova Venda</div>
                </button>
                <button className={styles.Option}>
                    <div className={styles.Icon}>
                        <img src={iconeEstoque} alt="" />
                    </div>
                    <div className={styles.TitleOption}>Estoque</div>
                </button>
            </div>
        </div>
    )
}

export default OptionPanelSales