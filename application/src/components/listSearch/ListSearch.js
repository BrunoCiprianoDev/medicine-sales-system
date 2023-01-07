import React from 'react'
import { useState } from 'react'
import styles from './ListSearch.module.css'
import { useFetch } from '../../hooks/useFetch'
import ListSearchComponent from './ListSearchComponent'
import AlertError from '../alertContainer/alertError/AlertError'

const ListSearch = ({ url, list, setList }) => {
  const [inputSearch, setInputSearch] = useState('');
  const { data, error } = useFetch(url + '?q=' + inputSearch);
  const currentItens = (data && data.slice(0, 5));

  const handleList = (element) => {
    if (!list.find(e => e.id === element.id)) {
      setList(arr => [...arr, {
        id: element.id,
        nome: element.nome,
        valor_venda: element.valor_venda,
        codigo: element.codigo,
        quant: 1,
        quant_edit: 1
      }]);
    }
  }

  return (
    <div className={styles.SearchList}>
      <form >
        <input onChange={(e) => setInputSearch(e.target.value)} type="text" placeholder='Insira informações sobre a mercadoria' />
      </form>
      <div className={styles.HeaderList}>
        <label>Nome</label>
        <label>Preço de venda</label>
        <label>Unidades disponiveis</label>
      </div>
      {error && <AlertError>Erro no carregamento!</AlertError>}
      {currentItens && currentItens.map((item) => (
        <ListSearchComponent handleList={handleList} item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default ListSearch