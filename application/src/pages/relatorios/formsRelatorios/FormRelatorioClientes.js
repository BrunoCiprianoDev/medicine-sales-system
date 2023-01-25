import React from 'react'
import styles from '../Relatorios.module.css'
import iconePDF from '../../../assets/icon-pdf.png'
import clientePDF from '../../../components/componentsRelatorio/clientePdf'
import { useFetch } from '../../../hooks/useFetch'
import { urlServer } from '../../../serverConfig'

const FormRelatorioClientes = () => {

    const { data } = useFetch(urlServer + '/clientes/', ``)

    return (
        <div className={styles.FormContainer}>
            <form className={styles['FormContainer']}>
                <label >Nome do cliente:<input type="text" /></label>
           </form>
            {data && <button onClick={() => clientePDF(data)}><img src={iconePDF} alt="" /></button>}
        </div>
    )
}

export default FormRelatorioClientes