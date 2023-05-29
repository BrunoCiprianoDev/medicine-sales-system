import React from 'react'
import styles from './ListaPesquisa.module.css'
import AlertError from '../alertContainer/alertError/AlertError'
import Loading from '../loading/Loading'
import { useListaPesquisa } from './useListaPesquisa'


const ListaPesquisa = ({ list, setList, vendaId }) => {

  const {
    loading,
    setInputSearch,
    error,
    currentItens,
    handleList } = useListaPesquisa(list, setList, vendaId)

  return (
    <div className={styles.SearchList}>
      <form >
        {loading && <Loading />}
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder='Insira informações sobre a mercadoria'
        />
      </form>
      <table>
        <thead>
          <tr className={styles.HeaderList}>
            <th>Nome</th>
            <th>Preço c/desconto</th>
          </tr>
        </thead>
        <tbody>
          {error && <AlertError>Erro no carregamento!</AlertError>}
          {currentItens && currentItens.map((item) => (
            <tr key={item.id}
              className={styles.ElementList}
              onClick={() => handleList(item)}
            >
              <td>{item.name}</td>
              <td>R${item.fullPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaPesquisa