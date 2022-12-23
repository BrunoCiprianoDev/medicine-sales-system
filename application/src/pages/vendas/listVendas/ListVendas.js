import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import styles from './ListVendas.module.css'
import { useState } from 'react'

const ListVendas = () => {

  const parametersVendas = [
    {id:1, attribute: 'Data'},
    {id:2, attribute: 'Funcionarios'},
    {id:3, attribute: 'Cliente'}
  ]

const parametersItensVenda = [
    {id:1, attribute: 'codigo'},
    {id:2, attribute: 'nome'},
    {id:3, attribute: 'valor_venda'},
    {id: 4, attribute: 'quant'},
    {id: 5, attribute: 'total'}
]

  const url = "http://localhost:3000/vendas/";
  const {data} = useFetch(url);
  
  const [listItensVenda, setListItensVenda] = useState([]);


  return (
    <div className={styles.MainContainer}>
        <div className={styles.ListVendas}>
          <div className={styles.ListHeader}>
            {parametersVendas.map((parameter)=>(
              <div key={parameter.id}>
                {parameter.attribute}
              </div>
            ))}
          </div>
            {data && data.map((venda)=>(
              <div key={venda.id} className={styles.ComponentList} onClick={()=>setListItensVenda(venda.itensVenda)}>
                <div>{venda.id}</div>
                <div>{venda.funcionario.nome}</div>
                <div>{venda.cliente.nome}</div>
              </div>        
            ))}
        </div>
        <div className={styles.ListItens}>
          <div className={styles.ListHeader}>
            {parametersItensVenda.map((parameter)=>(
              <div key={parameter.id}>
                {parameter.attribute}
              </div>
            ))}
          </div>
            {listItensVenda && listItensVenda.map((item)=>(
              <div key={item.id} className={styles.ComponentList}>
                <div>{item.codigo}</div>
                <div>{item.nome}</div>
                <div>{item.quant}</div>
                <div>{item.valor_venda}</div>
                <div>{item.valor_venda*item.quant}</div>
              </div>     
            ))}
        </div>
    </div>
  )
}

export default ListVendas