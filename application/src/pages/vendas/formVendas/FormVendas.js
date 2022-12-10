import React from 'react'
import { useState } from 'react'
//import { useFetch } from '../../../hooks/useFetch'
import styles from './FormVendas.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'

const FormVendas = () => {

  const urlCliente = "http://localhost:3000/clientes";
  const [cliente, setCliente] = useState('');
  const urlFuncionarios = "http://localhost:3000/funcionarios";
  const [funcionarios, setFuncionarios] = useState('');


  return (
    <div className={styles.MainContainer}>
        <div className={styles.LeftArea}>
          <InputAutoComplete 
            title={'Funcionario:'}
            url={urlFuncionarios} 
            setSubmitData={setFuncionarios} 
            submitData={funcionarios}
          />
          <InputAutoComplete 
            title={'Cliente:'}
            url={urlCliente} 
            setSubmitData={setCliente} 
            submitData={cliente}
          />
        </div>
        <div className={styles.RightArea}>

        </div>
    </div>
  )
}

export default FormVendas