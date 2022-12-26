import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import styles from './ListVendas.module.css'
import { useState } from 'react'
import PaginationComponent from '../../../components/paginationComponent/PaginationComponent'
import Loading from '../../../components/loading/Loading'
import {useSearchParams } from 'react-router-dom';
import { useEffect } from 'react'
import { urlServer } from '../../../serverConfig'

const ListVendas = ({filter}) => {

  const parametersVendas = [
    {id:1, attribute: 'Data'},
    {id:2, attribute: 'Funcionarios'},
    {id:3, attribute: 'Cliente'}
  ]

  const parametersItensVenda = [
    {id:1, attribute: 'codigo', label: "Código"},
    {id:2, attribute: 'nome', label: 'Nome'},
    {id:3, attribute: 'valor_venda', label: 'Valor'},
    {id: 4, attribute: 'quant', label: 'Quantidade'},
    {id: 5, attribute: 'total', label: 'Total'}
  ]

  let [searchParams] = useSearchParams();
  const url = urlServer+"/vendas/";
  const [patchUrl, setPatchUrl] = useState(url)
  const {httpConfig} = useFetch(patchUrl);
  const {data, loading, error} = useFetch(
    filter ? url+"?"+searchParams : url)
  const [listItensVenda, setListItensVenda] = useState([]);
  const [vendaSelect, setVendaSelect] = useState('');
  const [totalValue, setTotalValue] = useState(0);

 //Params from list vendas
 const [itensPerPageVendas, setItemPerPageVendas] = useState(10);
 const [currentPageVendas, setCurrentPageVendas] = useState(0);
 const pagesVendas = Math.ceil(data && data.length / itensPerPageVendas);
 const startIndexVendas = currentPageVendas * itensPerPageVendas;
 const endIndexVendas = startIndexVendas + itensPerPageVendas;
 const currentItensVendas = (data && data.slice(startIndexVendas, endIndexVendas));

 //Params from list itens vendas
 const [itensPerPage, setItemPerPage] = useState(10);
 const [currentPage, setCurrentPage] = useState(0);
 const pages = Math.ceil(listItensVenda && listItensVenda.length / itensPerPage);
 const startIndex = currentPage * itensPerPage;
 const endIndex = startIndex + itensPerPage;
 const currentItens = (listItensVenda && listItensVenda.slice(startIndex, endIndex));

 useEffect(() => {
  setTotalValue(0)
  listItensVenda.map((e)=>(
      setTotalValue(t=> t+(parseFloat(e.valor_venda*e.quant)))
    ));
},[listItensVenda]);

  const dataConverter = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth()+1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes()
    return(
      day+'/'+month+'/'+year+
      '('+hours+':'+(minutes<10 ? '0'+minutes : minutes)+')'
    )
 }

 const onClickVenda= (venda, listItensVenda) =>{
  setListItensVenda(listItensVenda);
  setVendaSelect(venda)
 }

 const handleDeleteItem = (item) =>{
  if(item.quant > 0){
    item.quant--;
    vendaSelect.total=totalValue
  }
   setPatchUrl(url+vendaSelect.id)
   httpConfig(vendaSelect, 'PATCH')
   setListItensVenda(arr=>[...arr])
 }

 const handleAddElement = (item) =>{
   item.quant++;
   vendaSelect.total=totalValue
   setPatchUrl(url+vendaSelect.id)
   httpConfig(vendaSelect, 'PATCH')
   setListItensVenda(arr=>[...arr])
 }

  return (
    <div className={styles.MainContainer}>
        <div className={styles.ListVendas}>
          <h3>VENDAS</h3>
          <div className={styles.ListHeader}>
            {parametersVendas.map((parameter)=>(
              <div key={parameter.id}>
                {parameter.attribute}
              </div>
            ))}
          </div>
            {loading && <Loading/>}
            {error && <p>Error ao carregar dados!</p>}
            {currentItensVendas && currentItensVendas.map((venda)=>(
              <div key={venda.id}
                  className={vendaSelect.id === venda.id ? styles.ComponentListSelect : styles.ComponentList} 
                  onClick={()=>onClickVenda(venda, venda.itensVenda)}
                >
                <div>{dataConverter(venda.id)}</div>
                <div>{venda.funcionario.nome}</div>
                <div>{venda.cliente.nome}</div>
              </div>        
            ))}
            <PaginationComponent
              setCurrentPage={setCurrentPageVendas} 
              currentPage={currentPageVendas}
              setItemPerPage={setItemPerPageVendas} 
              itensPerPage={itensPerPageVendas}
              pages={pagesVendas}
              pagination={'desable'}           
            />
        </div>
        <div className={styles.ListItens}>
        <div className={styles.HeaderListItens}>
          <h3>ITENS DA VENDA</h3>
          <h3>Total: R${totalValue}</h3>
        </div>      
          <div className={styles.ListHeader}>
            {parametersItensVenda.map((parameter)=>(
              <div key={parameter.id}>
                {parameter.label}
              </div>
            ))}
            <div></div>
          </div>
            {currentItens && currentItens.map((item)=>(
              <div key={item.id} className={styles.ComponentList}>
                  <div>{item.codigo}</div>
                  <div>{item.nome}</div>
                  <div>R${item.valor_venda}</div>
                  <div>{item.quant}</div>
                  <div>R${item.quant*item.valor_venda}</div>
                <div>
                  <button onClick={()=>handleDeleteItem(item)} className={styles.buttonRemove}>-</button>
                  <button onClick={()=>handleAddElement(item)} className={styles.buttonAdd}>+</button> 
                </div>
              </div>     
            ))}
            <PaginationComponent 
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
              setItemPerPage={setItemPerPage} 
              itensPerPage={itensPerPage}
              pages={pages}
              pagination={'desable'}
            />
        </div>
    </div>
  )
}

export default ListVendas

