import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../../components/paginationComponent/PaginationComponent';
import styles from './ListEstoque.module.css'
import AlertError from '../../../components/alertContainer/alertError/AlertError';
import Loading from '../../../components/loading/Loading';
import useMercadoriasJoinLotes from '../../../hooks/lotes/useMercadoriasJoinLotes';
import { useState } from 'react';
import CircleBar from '../../../components/circleBar/CircleBar';
import ButtonDetail from '../../../components/buttonDetail/ButtonDetail';

const ListEstoque = () => {

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const { mercadorias, loading, error } = useMercadoriasJoinLotes(`?${searchParams}`)

  const handleEdit = (id) => {
    navigate(`/estoque/${id}`)
  }

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(mercadorias && mercadorias.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (mercadorias && mercadorias.slice(startIndex, endIndex));

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Title}>
        <h2>Mercadorias / Estoque </h2>
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
            <th></th>
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
              <td>{mercadoria.unidades}</td>
              <td>
                {mercadoria && <CircleBar
                  percentage={(mercadoria.unidades / mercadoria.estoque_maximo) * 100}
                  circleWidth='80'
                  paramRadius={35}
                  profile={10}
                  disableText={false}
                />}
              </td>
              <td
                className={styles.ElementData}
                onClick={() => handleEdit(mercadoria.id)}>
                <ButtonDetail />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {<div className={styles.PaginationArea}>
        <PaginationComponent
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

export default ListEstoque