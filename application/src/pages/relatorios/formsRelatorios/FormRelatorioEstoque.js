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
            {data && <button onClick={() => estoquePDF(data)}><img src={iconePDF} alt="" /></button>}
        </div>
    )
}

export default FormRelatorioEstoque