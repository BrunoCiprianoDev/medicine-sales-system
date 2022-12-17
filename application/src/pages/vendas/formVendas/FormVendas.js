import React from 'react'
import { useState } from 'react'

//import { useFetch } from '../../../hooks/useFetch'
import styles from './FormVendas.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'
import ListSearch from '../../../components/listSearch/ListSearch'
import ListSelect from '../../../components/listSelect/ListSelect'
import { useEffect } from 'react'
const FormVendas = () => {

  const date = Date();
  const urlCliente = "http://localhost:3000/clientes";
  const [cliente, setCliente] = useState('');
  const urlFuncionarios = "http://localhost:3000/funcionarios";
  const [funcionarios, setFuncionarios] = useState('');
  const urlMercadorias = "http://localhost:3000/mercadorias";
  const [listaMercadorias, setListMercadorias] = useState([])
  const [totalValue, setTotalValue] = useState(0);
  
  useEffect(() => {
    setTotalValue(0)
    listaMercadorias.map((e)=>(
        setTotalValue(t=> t+(parseFloat(e.item.valor_venda*e.quant)))
      ));
  },[listaMercadorias]);


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
        <div className={styles.topListSelect}> 
          <h2>Valor total: R${totalValue.toFixed(2)}</h2>
          <div>
            <button className={styles.buttonConclude}>Concluir venda</button>
            <button className={styles.buttonCancel}>Cancelar venda</button>
          </div>
        </div>
          <ListSelect 
            setList={setListMercadorias} 
            list={listaMercadorias}
          />           
        </div>
    </div>
  )
}

export default FormVendas