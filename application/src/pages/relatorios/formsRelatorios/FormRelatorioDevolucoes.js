import React from 'react'
import styles from '../Relatorios.module.css'
import iconePDF from '../../../assets/icon-pdf.png'
import devolucoesPDF from '../../../components/componentsRelatorio/devolucoesPdf'
import { useFetch } from '../../../hooks/useFetch'
import { urlServer } from '../../../serverConfig'

const FormRelatorioClientes = () => {

    const { data } = useFetch(urlServer + '/devolucoes/', ``)

    return (
        <div className={styles.FormContainer}>
            <form className={styles['FormContainer']}>
                <label >A partid de<input type="date" /></label>
                <label >Até <input type="date" /></label>
            </form>
            {data && <button onClick={() => devolucoesPDF(data)}><img src={iconePDF} alt="" /></button>}
        </div>
    )
}

export default FormRelatorioClientes