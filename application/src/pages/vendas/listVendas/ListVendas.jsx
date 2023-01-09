import React from 'react'
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './ListVendas.module.css'

import AlertError from '../../../components/alertContainer/alertError/AlertError';
import ButtonDelete from '../../../components/buttonDelete/ButtonDelete';
import ButtonDetail from '../../../components/buttonDetail/ButtonDetail';
import Loading from '../../../components/loading/Loading';
import PaginationComponent from '../../../components/paginationComponent/PaginationComponent';
import useListVendasJoined from '../../../hooks/vendas/useListVendasJoined';
import SortPanel from '../../../components/sortPanel/SortPanel';

const ListVendas = () => {

  let [searchParams] = useSearchParams()
  const {
    vendas,
    deleteSaleCascade,
    fetchData,
    loading,
    error,
    orderByAttribute } = useListVendasJoined(`?${searchParams}`);

  const navigate = useNavigate();

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(vendas && vendas.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (vendas && vendas.slice(startIndex, endIndex));

  const handleDelete = (id) => {
    deleteSaleCascade(id, () => {
      fetchData()
    });
  }

  const handleDetail = (id) => {
    navigate(`/vendas/detail/${id}`)
  }

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Title}>
        <h2>Lista de vendas</h2>
        <SortPanel
          orderByAttribute={orderByAttribute}
          parameters={[
            { id: 1, attribute: 'data', label: 'Data' },
            { id: 2, attribute: 'total', label: 'Valor' }
          ]}
        />
      </div>
      {loading && <Loading />}
      {error && <AlertError>Falha no carregamento!</AlertError>}
      <table>
        <thead>
          <tr className={styles.HeaderList}>
            <th>ID</th>
            <th>Data</th>
            <th>Funcionario</th>
            <th>Cliente</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItens && currentItens.map((venda) => (
            <tr className={styles.ListComponent} key={venda.id}>
              <td>{venda.id}</td>
              <td>{venda.data}</td>
              <td>{venda.funcionario.nome}</td>
              <td>{venda.cliente && venda.cliente.nome}</td>
              <td>R${venda.total}</td>
              <td>
                <ButtonDetail handleDetail={handleDetail} arg={venda.id} />
                <ButtonDelete handleDelete={handleDelete} arg={venda.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.PaginationArea}>
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