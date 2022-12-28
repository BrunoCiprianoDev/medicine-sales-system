import React, { useEffect } from 'react'
import { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import styles from './FormEstoque.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'
import { urlServer } from '../../../serverConfig';
import {useForm} from "react-hook-form";

const FormEstoque = () => {

  const date = Date();
  const urlFornecedor = urlServer+"/fornecedores";
  const [fornecedor, setFornecedor] = useState('');
  const urlMercadorias = urlServer+"/mercadorias";
  const [mercadoria, setMercadoria] = useState('');
  const [url, setUrl] = useState(urlServer+"/mercadorias/")
  const {httpConfig} = useFetch(url);
  const{register, handleSubmit} = useForm(); 
  const [totalUnidades, setTotalUnidades] = useState('')

  const onSubmit = (e) => {
    if(mercadoria && fornecedor) {
      if(!mercadoria.lotes){ 
        // Função para simular o relacionamento entre tabelas[mercadorias/lotes]
        const mercadoriaUpdate = {
          id: mercadoria.id,
          nome: mercadoria.nome,
          departamento: mercadoria.departamento,
          categoria_id: mercadoria.categoria_id,
          estoque_minimo: mercadoria.estoque_minimo,
          estoque_maximo: mercadoria.estoque_maximo,
          valor_venda: mercadoria.valor_venda,
          temp_armazenamento: mercadoria.temp_armazenamento,
          descricao: mercadoria.descricao,
          lotes: [{id: e.lote+'-'+e.validade, 
            fornecedor:fornecedor.cnpj, 
            lote: e.lote,
            validade: e.validade, 
            valor_custo: parseFloat(e.custo), 
            unidades: parseInt(e.unidades)}]
        }
        setMercadoria(mercadoriaUpdate)
        httpConfig(mercadoriaUpdate, 'PATCH')
    } else {
       const lote = {
        id:  e.lote+'-'+e.validade,
        fornecedor: fornecedor.cnpj,
        lote: e.lote,
        validade: e.validade,
        valor_custo: parseFloat(e.custo),
        unidades: parseInt(e.unidades)
      }
      const listLote = mercadoria.lotes;
      listLote.push(lote)
      setMercadoria(prevState => ({ ...prevState, lotes: listLote}));
    }
    }else {
      alert('Erro! Existem campos que não foram preenchidos')
    }
  }

  const loteRemove = (lote) => {
      setMercadoria(prevState => ({ ...prevState, lotes: prevState.lotes.filter(e => e.id !== lote.id)}));
  }

  useEffect(() => { 
    setTotalUnidades(0);
    mercadoria && setUrl(urlServer+"/mercadorias/"+mercadoria.id);
    mercadoria && httpConfig(mercadoria, 'PATCH')
    mercadoria.lotes && mercadoria.lotes.map((lote)=>(
      setTotalUnidades(t=> t+(parseInt(lote.unidades)))
    ))
  },[mercadoria]); 
  /*WARNING: HttpConfig deve ser chamado apenas uma vez quando ocorre qualquer alteração no
  estado do state 'mercadoria', por isso NÃO pode ser incluido no array de dependencias desse
  useEffect.*/



  return (
    <div className={styles.MainContainer}>
        <div className={styles.LeftArea}> 
          <div className={styles.HeaderLeftArea}>
            <div className={styles.DateArea}>{date}</div>
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
                <label>Estoque minimo: {mercadoria.estoque_minimo}</label>
                <label>Estoque maximo: {mercadoria.estoque_maximo}</label>
              </div>
              <div className={styles.loteArea}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label>Número do lote:
                    <input type="text" {...register('lote')} required/>
                  </label>
                  <label>Quantidade:
                    <input type="number" {...register('unidades')}  required/>
                  </label>
                  <label>Validade:
                    <input type="date" {...register('validade')}  required/>
                  </label>
                  <label>Custo por unidade:
                    <input type="number" {...register('custo')} step='0.01'  required/>
                  </label>
                  <input type="submit" value={'Inserir lote'} />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.RightArea}> 
        <div><h1>Lotes cadastrados</h1><h2>Estoque atual: {totalUnidades}</h2></div>
        <div className={styles.ListContainer}>
          <div className={styles.HeaderList}>
              <div><p>Lote</p></div>
              <div><p>Fornecedor</p></div>
              <div><p>Validade</p></div>
              <div><p>Quantidade</p></div>
              <div></div>
          </div>
          {mercadoria.lotes && mercadoria.lotes.map((lote)=>(
            <div key={lote.id} className={styles.lotListComponent}>
              <div><p>{lote.lote}</p></div>
              <div><p>{lote.fornecedor}</p></div>
              <div><p>{lote.validade}</p></div>
              <div><p>{lote.unidades}</p></div>
              <div>
                <button 
                  onClick={()=>loteRemove(lote)}
                  className={styles.LoteDelete}
                >X</button>
              </div>
            </div>
            ))}    
          </div>
        </div> 
    </div>
  )
}

export default FormEstoque


