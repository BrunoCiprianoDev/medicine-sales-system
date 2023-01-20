import React from 'react'

import styles from './ListaEstoque.module.css'

import AlertError from '../../../components/alertContainer/alertError/AlertError';
import CircleBar from '../../../components/circleBar/CircleBar';
import Loading from '../../../components/loading/Loading';
import PainelOrdenacao from '../../../components/painelOrdenacao/PainelOrdenacao';
import ComponentePaginacao from '../../../components/componentePaginacao/ComponentePaginacao';
import BotaoDetalhe from '../../../components/botaoDetalhe/BotaoDetalhe';

import { parametrosOrdencacao } from '../parametros/pr_estoque';
import { useListaEstoque } from './useListaEstoque';

const ListaEstoque = () => {

const {
  orderByAttribute,
  loading,
  error,
  currentItens,
  currentPage,
  handleEdit,
  setCurrentPage,
  setItemPerPage,
  itensPerPage,
  pages
} = useListaEstoque()

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Title}>
        <h2>Mercadorias / Estoque </h2>
        <PainelOrdenacao
        orderByAttribute={orderByAttribute} 
        parameters={parametrosOrdencacao}/>
      </div>
      {loading && <Loading />}
      {error && <AlertError>Falha no carregamento!</AlertError>}
      <table>
        <thead>
          <tr className={styles.HeaderList}>
            <th>Código</th>
            <th>Nome da mercadoria</th>
            <th>Estoque estoque mínimo</th>
            <th>Estoque maximo</th>
            <th>Estoque atual</th>
            <th>Nivel estoque</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItens && currentItens.map((mercadoria) => (
            <tr className={styles.ListComponent} key={mercadoria.id}>
              <td>{mercadoria.codigo}</td>
              <td>{mercadoria.nome}</td>
              <td>{mercadoria.estoque_minimo}</td>
              <td>{mercadoria.estoque_maximo}</td>
              <td>{mercadoria.estoque_atual}</td>
              <td>
                {mercadoria && <CircleBar
                  percentage={(mercadoria.estoque_atual / mercadoria.estoque_maximo) * 100}
                  circleWidth='80'
                  paramRadius={35}
                  profile={10}
                  disableText={false}
                />}
              </td>
              <td
                className={styles.ElementData}>
                <BotaoDetalhe handleDetalhe={handleEdit} arg={mercadoria.id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {<div className={styles.PaginationArea}>
        <ComponentePaginacao
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setItemPerPage={setItemPerPage}
          itensPerPage={itensPerPage}
          pages={pages}
          pagination={'desable'}
        />
      </div>}
    </div>
  )
}

export default ListaEstoque