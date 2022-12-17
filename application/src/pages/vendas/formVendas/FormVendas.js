import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useFetch } from '../../../hooks/useFetch'
import styles from './FormVendas.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'
import ListSearch from '../../../components/listSearch/ListSearch'
import ListSelect from '../../../components/listSelect/ListSelect'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../components/loading/Loading'


const FormVendas = () => {

  //const navigate = useNavigate();
  const [url] = useState("http://localhost:3000/vendas")
  const {httpConfig, loading} = useFetch(url);
   
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


  const handleConclude = () =>{
    /* Foi necessário o uso de useFetch e Axios juntos para simular 
    esse tipo de requisição.*/
    let idVenda = Date.parse(date);
    let venda = {
      id: idVenda,
      funcionario: funcionarios.id,
      cliente: cliente.id,
    } 
    httpConfig(venda, 'POST')
    listaMercadorias.map((mercadoria)=>(
      insertMercadoria(idVenda, mercadoria)
    )) 
    alert('Venda concluída!')
    setListMercadorias([])
  }

  const insertMercadoria = (idVenda, mercadoria) =>{
    const item ={
      idVenda: idVenda,
      idItem: mercadoria.item.id,
      quantidade: mercadoria.quant
    }
    axios.post('http://localhost:3000/itensVenda/', item).then((response) => {}); 
  }


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
          {!loading && <div>
            <button className={styles.buttonConclude} onClick={()=>handleConclude()}>Concluir venda</button>
            <button className={styles.buttonCancel}>Cancelar venda</button>
          </div>}
          {loading && <Loading/>}
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