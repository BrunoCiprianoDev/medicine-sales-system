import React from 'react'
import { useState } from 'react'
import styles from './ListSearch.module.css'
import { useFetch } from '../../hooks/useFetch'

const ListSearch = ({url, list, setList}) => {
    const [inputSearch, setInputSearch] = useState('');
    const {data} = useFetch(url+'?q='+inputSearch);
    const currentItens = (data && data.slice(0, 8));


    const handleList = (element) => {
        if(!list.find(e=>e.item === element)){
          setList(arr =>[...arr, {item: element,  quant: 1}]);
        } else {
          let localObject = list.find(e=>e.item === element)
          let index = list.indexOf(localObject);
          localObject.quant = localObject.quant+1;
          setList(arr=>[arr[index] = localObject]);
        }
      }
    
    return (
    <div className={styles.SearchList}>
        <form >
         <input onChange={(e)=>setInputSearch(e.target.value)} type="text" placeholder='Insira informações sobre a mercadoria'/>
        </form>
        <div className={styles.HeaderList}>
          <label>Nome</label>
          <label>Preço</label>
        </div>
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