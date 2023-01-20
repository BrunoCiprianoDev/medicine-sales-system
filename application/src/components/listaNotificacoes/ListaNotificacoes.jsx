import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './ListaNotificacoes.module.css'

import AlertError from '../alertContainer/alertError/AlertError';
import Loading from '../loading/Loading';
import useNotificacoes from '../../hooks/notificacoes/useNotificacoes';
import ComponentePaginacao from '../componentePaginacao/ComponentePaginacao';
import BotaoDetalhe from '../botaoDetalhe/BotaoDetalhe';

const ListaNotificacoes = () => {

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
            <th>Nome mercadoria</th>
            <th>Notificação</th>
            <th>Visualização</th>
          </tr>
        </thead>
        <tbody>
          {currentItens && currentItens.map((notificacao) => (
            <tr className={styles.ListComponent} key={notificacao.id}>
              <td>{notificacao.nome}</td>
              <td>{gerarTextoNotificacao(notificacao)}</td>
              <td>
                <BotaoDetalhe
                  handleDetail={navigate}
                  arg={`/estoque/${notificacao.id}`} />
              </td>
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

export default ListaNotificacoes