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
            <th>Preço inteiro</th>
            <th>Desconto</th>
            <th>Preço c/desconto</th>
            <th>Unidades disponiveis</th>
          </tr>
        </thead>
        <tbody>
          {error && <AlertError>Erro no carregamento!</AlertError>}
          {currentItens && currentItens.map((item) => (
            <tr key={item.id}
              className={styles.ElementList}
              onClick={() => handleList(item)}
            >
              <td>{item.nome}</td>
              <td>R${item.preco_sem_desconto}</td>
              <td>%{item.desconto}</td>
              <td>R${item.preco_com_desconto}</td>
              <td>{item.unidades}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaPesquisa