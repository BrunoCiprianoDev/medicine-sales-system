import React from 'react'
import { useState } from 'react'
//import { useFetch } from '../../../hooks/useFetch'
import styles from './FormVendas.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'
import ListSearch from '../../../components/listSearch/ListSearch'
const FormVendas = () => {

  const date = Date();
  const urlCliente = "http://localhost:3000/clientes";
  const [cliente, setCliente] = useState('');
  const urlFuncionarios = "http://localhost:3000/funcionarios";
  const [funcionarios, setFuncionarios] = useState('');
  const urlMercadorias = "http://localhost:3000/mercadorias";
  const [listaMercadorias, setListMercadorias] = useState([])
  
  //Const listSearch

  return (
    <div className={styles.MainContainer}>
        <div className={styles.LeftArea}> 
          <div className={styles.HeaderLeftArea}>
              <div className={styles.DateArea}>{date}</div>
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
          <div className={styles.ListSearch}>
            <ListSearch 
              url={urlMercadorias}
              setList={setListMercadorias}
              list={listaMercadorias}
            />
          </div>
        </div>
        <div className={styles.RightArea}>
          {listaMercadorias && listaMercadorias.map((elemento)=>(
            <p >{elemento.nome}</p>
          ))}
        </div>
    </div>
  )
}

export default FormVendas