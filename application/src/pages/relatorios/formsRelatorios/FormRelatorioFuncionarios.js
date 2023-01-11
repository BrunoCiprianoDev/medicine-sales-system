import React from 'react'
import styles from '../Relatorios.module.css'
import iconePDF from '../../../assets/icon-pdf.png'
import funcionarioPDF from '../../../components/componentsRelatorio/funcionarioPdf'
import { useFetch } from '../../../hooks/useFetch'
import { urlServer } from '../../../serverConfig'

const FormRelatorioFuncionarios = () => {

    const { data } = useFetch(urlServer + '/funcionarios/', ``)

    return (
        <div className={styles.FormContainer}>
            {data && <button onClick={() => funcionarioPDF(data)}><img src={iconePDF} alt="" /></button>}
        </div>
    )
}

export default FormRelatorioFuncionarios