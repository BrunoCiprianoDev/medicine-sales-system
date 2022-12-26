import React from 'react'
import { useState } from 'react'
import styles from './ListSearch.module.css'
import { useFetch } from '../../hooks/useFetch'

const ListSearch = ({url, list, setList}) => {
    const [inputSearch, setInputSearch] = useState('');
    const {data, error} = useFetch(url+'?q='+inputSearch);
    const currentItens = (data && data.slice(0, 14));

    const handleList = (element) => {
        if(!list.find(e=>e.id === element.id)){
          setList(arr =>[...arr, {
            id: element.id,
            nome: element.nome,
            valor_venda: element.valor_venda,
            codigo: element.codigo,  
            quant: 1
          }]);
        } 
      }
    
    return (
    <div className={styles.SearchList}>
        <form >
         <input onChange={(e)=>setInputSearch(e.target.value)} type="text" placeholder='Insira informações sobre a mercadoria'/>
        </form>
        <div className={styles.HeaderList}>
          <label>Nome</label>
          <label>Preço de venda</label>
        </div>
          {error && <h4>Falha ao carregar dados...</h4>}
          {currentItens && currentItens.map((item)=>(
            <div key={item.id} className={styles.ElementList} onClick={()=>handleList(item)}>
              <label>{item.nome}</label>
              <label>{item.valor_venda}</label>
            </div>
          ))}
    </div>
  )
}

export default ListSearch