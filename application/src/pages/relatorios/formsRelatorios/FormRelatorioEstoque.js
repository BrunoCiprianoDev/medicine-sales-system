import React from 'react'
import styles from '../Relatorios.module.css'
import iconePDF from '../../../assets/icon-pdf.png'
import estoquePDF from '../../../components/componentsRelatorio/estoquePdf'
import { useFetch } from '../../../hooks/useFetch'
import { urlServer } from '../../../serverConfig'

const FormRelatorioEstoque = () => {

    const { data } = useFetch(urlServer + '/lotes?_expand=mercadoria', ``)

    return (
        <div className={styles.FormContainer}>
            <form className={styles['FormContainer']}>
                <label >Nome do cliente:<input type="date" /></label>
                <label >Até <input type="number" /></label>
                <label >Nº nota fiscal <input type="text" /></label>
            </form>
            {data && <button onClick={() => estoquePDF(data)}><img src={iconePDF} alt="" /></button>}
        </div>
    )
}

export default FormRelatorioEstoque