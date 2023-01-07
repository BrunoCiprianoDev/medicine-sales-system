import React from 'react'
import { useState } from 'react'
import styles from './ListSearch.module.css'
import { useFetch } from '../../hooks/useFetch'
import AlertError from '../alertContainer/alertError/AlertError'
import Loading from '../loading/Loading'
import { urlServer } from '../../serverConfig'

const ListSearch = ({list, setList, vendaId}) => {
  const [inputSearch, setInputSearch] = useState('');
  const { data, loading, error } = useFetch(urlServer+'/mercadorias/?q=' + inputSearch);
  const currentItens = (data && data.slice(0, 5));

  const handleList = (element) => {
    if (!list.find(e => e.id === element.id)) {
      setList(arr => [...arr, {
        id: element.id + vendaId,
        vendaId: vendaId,
        mercadoriaId: element.id,
        nome: element.nome,
        valor_venda: element.valor_venda,
        desconto: element.desconto,
        codigo: element.codigo,
        quant: 1
      }]);
    }
  }

  return (
    <div className={styles.SearchList}>
      <form >
        {loading && <Loading/>}
        <input onChange={(e) => setInputSearch(e.target.value)} type="text" placeholder='Insira informações sobre a mercadoria' />
      </form>
      <table>
        <thead>
          <tr className={styles.HeaderList}>
            <th>Nome</th>
            <th>Preço inteiro</th>
            <th>Preço c/desconto</th>
            <th>Unidades disponiveis</th>
          </tr>
        </thead>
        <tbody>
          {error && <AlertError>Erro no carregamento!</AlertError>}
          {currentItens && currentItens.map((item) => (
              <tr key={item.id} className={styles.ElementList} onClick={()=>handleList(item)}>
              <td>{item.nome}</td>
              <td>R${item.valor_venda}</td>
              <td>R$</td>
              <td></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListSearch