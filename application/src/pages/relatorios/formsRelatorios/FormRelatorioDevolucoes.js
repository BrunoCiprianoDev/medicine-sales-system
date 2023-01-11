import React from 'react'
import styles from '../Relatorios.module.css'
import iconePDF from '../../../assets/icon-pdf.png'
import devolucoesPDF from '../../../components/componentsRelatorio/devolucoesPdf'
import { useFetch } from '../../../hooks/useFetch'
import { urlServer } from '../../../serverConfig'

const FormRelatorioClientes = () => {

    const { data } = useFetch(urlServer + '/devolucoes?_expand=mercadoria' , ``)

    return (
        <div className={styles.FormContainer}>           
            {data && <button onClick={() => devolucoesPDF(data)}><img src={iconePDF} alt="" /></button>}
        </div>
    )
}

export default FormRelatorioClientes