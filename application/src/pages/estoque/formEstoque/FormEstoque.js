import React from 'react'
import { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import styles from './FormEstoque.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CircleBar from '../../../components/circleBar/CircleBar'

const FormEstoque = () => {

  const navigate = useNavigate();
  const [url] = useState("http://localhost:3000/vendas")
  const {httpConfig, loading} = useFetch(url);
   
  const date = Date();
  const urlFornecedor = "http://localhost:3000/fornecedores";
  const [fornecedor, setFornecedor] = useState('');
  const urlFuncionarios = "http://localhost:3000/funcionarios";
  const [funcionarios, setFuncionarios] = useState('');
  const urlMercadorias = "http://localhost:3000/mercadorias";
  const [listaMercadorias, setListMercadorias] = useState([]);
  const [mercadoria, setMercadoria] = useState('')
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
      fornecedor: {
        cnpj: fornecedor.cnpj,
        nome: fornecedor.nome
      },
      itensVenda: listaMercadorias
    }
    if(funcionarios){
      if(listaMercadorias.length !== 0){
        httpConfig(vendas, 'POST')
        setListMercadorias([])
        alert('Venda concluída!')
      } else {
        alert('Não foi possivel concluir a venda, porque lista de itens está vazia!')
      }      
    } else {
      alert('Vendedor não foi identificado!')
    }   
  }
 
  const [percentage, setPercentage] = useState(85)

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
                parameter = {{attribute: 'cpf', label: 'cpf'}}  
              />
              <InputAutoComplete 
                title={'Fornecedor:'}
                url={urlFornecedor} 
                setSubmitData={setFornecedor} 
                submitData={fornecedor}
                parameter = {{attribute: 'cnpj', label: 'CNPJ'}}  
              />
               <InputAutoComplete 
                title={'Mercadoria:'}
                url={urlMercadorias} 
                setSubmitData={setMercadoria} 
                submitData={mercadoria}
                parameter = {{attribute: 'codigo', label: 'Código'}}  
              />
          </div>
          <div className={styles.ListSearch}>
            <div className={styles.DetailMercadoria}>
              <div className={styles.ListInfo}>  
                <div>Detalhes:</div>          
                <label>{mercadoria.nome}</label>
                <label>{mercadoria.departamento}</label>
                <label>R${mercadoria.valor_venda}</label>
              </div>
              <div className={styles.AreaBar}>
                <h2>Nivel atual do estoque:</h2>
                <CircleBar  percentage={percentage} circleWidth='280'/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.RightArea}>         
        </div>
    </div>
  )
}

export default FormEstoque