import React from 'react'
import { useState } from 'react';
import PaginationComponent from '../../components/paginationComponent/PaginationComponent';
import { useNavigate } from 'react-router-dom';

import styles from './Notificacoes.module.css'

import AlertError from '../../components/alertContainer/alertError/AlertError';
import Loading from '../../components/loading/Loading';
import useNotificacoes from '../../hooks/notificacoes/useNotificacoes';
import ButtonDetail from '../../components/buttonDetail/ButtonDetail';

const Notificacoes = () => {

  const { notificacoes, error, loading } = useNotificacoes('');
  const navigate = useNavigate();

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(notificacoes && notificacoes.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (notificacoes && notificacoes.slice(startIndex, endIndex));

  const gerarTextoNotificacao = (notificacao) => {
    var text = '';
    if (notificacao.status.alertaValidade) {
      text = text.concat('Lotes com datas de validade próximas do vencimento\n');
    }
    if (notificacao.status.alertaNivelEstoque) {
      text = text.concat('Nivel estoque abaixo do minimo');
    }
    return text;
  }

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Title}>
        <h2>Notificações</h2>
      </div>
      {loading && <Loading />}
      {console.log()}
      {error && <AlertError>Falha no carregamento!</AlertError>}
      <table>
        <thead>
          <tr className={styles.HeaderList}>
            <th>Código mercadoria</th>
            <th>Nome mercadoria</th>
            <th>Notificação</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItens && currentItens.map((notificacao) => (
            <tr className={styles.ListComponent} key={notificacao.id}>
              <td>{notificacao.codigo}</td>
              <td>{notificacao.nome}</td>
              <td><pre>{gerarTextoNotificacao(notificacao)}</pre></td>
              <td>
                <ButtonDetail
                  handleDetail={navigate}
                  arg={`/estoque/${notificacao.id}`} />
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

export default Notificacoes