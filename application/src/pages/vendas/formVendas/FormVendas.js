import React from 'react'
import { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import styles from './FormVendas.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'
import ListSearch from '../../../components/listSearch/ListSearch'
import ListSelect from '../../../components/listSelect/ListSelect'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../components/loading/Loading'

const FormVendas = () => {

  const navigate = useNavigate();
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
        setTotalValue(t=> t+(parseFloat(e.valor_venda*e.quant)))
      ));
  },[listaMercadorias]);

  const handleConclude = () =>{
    const dateConclude = new Date();
    let idVenda = Date.parse(dateConclude);
    let day = dateConclude.getDate().toString().padStart(2, '0');
    let month = (dateConclude.getMonth()+1).toString().padStart(2, '0');
    let year = dateConclude.getFullYear();
    let data = day+'/'+month+'/'+year;

    let vendas = {
      id: idVenda,
      data: data,
      total: totalValue,
      funcionario:{
        cpf: funcionarios.cpf,
        nome: funcionarios.nome
     },
      cliente: {
        cpf: cliente.cpf,
        nome: cliente.nome
      },
      itensVenda: listaMercadorias
    } 
    httpConfig(vendas, 'POST')
    setListMercadorias([])
    alert('Venda concluída!')
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
            <button className={styles.buttonCancel} onClick={()=>navigate('/vendas/')}>Cancelar venda</button>
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