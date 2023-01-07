import React from 'react'
import styles from '../Relatorios.module.css'
import iconePDF from '../../../assets/icon-pdf.png'
import mercadoriaPDF from '../../../components/componentsRelatorio/mercadoriaPdf'
import { useFetch } from '../../../hooks/useFetch'
import { urlServer } from '../../../serverConfig'

const FormRelatorioEstoque = () => {

    const { data } = useFetch(urlServer + '/mercadorias/')

    return (
        <div className={styles.FormContainer}>         
            {data && <button onClick={() => mercadoriaPDF(data)}><img src={iconePDF} alt="" /></button>}
        </div>
    )
}

export default FormRelatorioEstoque