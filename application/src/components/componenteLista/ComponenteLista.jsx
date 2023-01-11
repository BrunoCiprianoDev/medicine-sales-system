import React from 'react'
import styles from './ComponenteLista.module.css'
import Loading from '../loading/Loading'
import AlertError from '../alertContainer/alertError/AlertError'
import { useComponenteLista } from './useComponenteLista'
import PainelOrdenacao from '../painelOrdenacao/PainelOrdenacao'
import ComponentePaginacao from '../componentePaginacao/ComponentePaginacao'
import BotoesLista from '../botoesLista/BotoesLista'

const ComponenteLista = ({
  titulo,
  urlFetch,
  parametros,
  urlDetalhe,
  filtro,
  opcaoEditar
}) => {

  const {
    loading,
    error,
    orderByAttribute,
    handleEdit,
    handleRemove,
    itensPerPage,
    setItemPerPage,
    setCurrentPage,
    currentItens,
    currentPage,
    pages } = useComponenteLista(urlFetch, urlDetalhe, filtro)

  return (
    <div className={styles.MainContainer}>
      {loading && <Loading />}
      {error && <AlertError>Falha no carregamento!</AlertError>}
      <div className={styles.Title}>
        {titulo && <div>
          <h2>{titulo}</h2>
        </div>}
        <PainelOrdenacao orderByAttribute={orderByAttribute} parameters={parametros} />
      </div>
      <table>
        <thead>
          <tr className={styles.HeaderList}>
            {parametros.map((parametro) => (
              <th key={parametro.id} className={styles.ElementData}>{parametro.rotulo}</th>
            ))}
            {opcaoEditar === true && <th className={styles.ElementData}></th>}
          </tr>
        </thead>
        <tbody>
          {currentItens && currentItens.map((item) => (
            <tr className={styles.ListComponent} key={item.id}>
              {parametros.map((parametro) => (
                <td
                  key={parametro.id}
                  className={styles.ElementData}>
                  {item[parametro.atributo]}
                </td>
              ))}
              {opcaoEditar === true && <BotoesLista
                handleRemove={handleRemove}
                handleEdit={handleEdit}
                id={item.id} />}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.PaginationArea}>
        <ComponentePaginacao
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

export default ComponenteLista

