import React from 'react'
import styles from './DetailVendas.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../components/loading/Loading';
import useDetailVendaJoined from '../../../hooks/vendas/useDetailVendaJoined';
import AlertError from '../../../components/alertContainer/alertError/AlertError';
import { useState } from 'react';
import PaginationComponent from '../../../components/paginationComponent/PaginationComponent';

const DetailVendas = () => {

  const { id } = useParams();
  const { venda, funcionario, cliente, listaItensVenda, loading, error } = useDetailVendaJoined(id)
  const navigate = useNavigate();

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(listaItensVenda && listaItensVenda.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (listaItensVenda && listaItensVenda.slice(startIndex, endIndex));

  return (
    <div className={styles.MainContainer}>
      {error && <AlertError>Falha durante o carregamento!</AlertError>}
      {loading && <Loading />}
      <div className={styles.LeftArea}>
        <h2>Detalhes da venda</h2>
        <div className={styles['BodyData']}>
          <div>
            <label>ID</label>
            <p>{venda && venda.id}</p>
          </div>
          <div>
            <label>Data</label>
            <p>{venda && venda.data}</p>
          </div>
          <div>
            <label>Total</label>
            <p>{venda && venda.total}</p>
          </div>
          <div>
            <label>Funcionario</label>
            <p>{funcionario && funcionario.nome}</p>
          </div>
          <div>
            <label>Cliente</label>
            <p>{cliente && cliente.nome}</p>
          </div>
        </div>
        <div className={styles.TextArea}>
          <p>
            Nessa área é possivel conferir os detalhes cada venda.
          </p>
        </div>
        <button className={styles.ButtonVoltar} onClick={() => navigate('/devolucoes/form/')}>Devolução</button>
        <button className={styles.ButtonVoltar} onClick={() => navigate('/vendas/search')}>Voltar</button>
      </div>
      <div className={styles.RightArea}>
        <table>
          <thead>
            <tr className={styles.HeaderList}>
              <th>Código da mercadoria</th>
              <th>Nome mercadoria</th>
              <th>Valor s/desconto</th>
              <th>Valor c/desconto</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {currentItens && currentItens.map((item) => (
              <tr key={item.id} className={styles.ListComponent}>
                <td>{item.codigo}</td>
                <td>{item.nome}</td>
                <td>{item.valor_venda}</td>
                <td>{item.valor_venda-2}</td>
                <td>{item.quant}</td>
                <td>{item.quant * parseFloat(item.valor_venda)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.PaginationArea}>
          {<PaginationComponent 
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage}
          setItemPerPage={setItemPerPage} 
          itensPerPage={itensPerPage}
          pages={pages}
          pagination={'desable'}
          />}
        </div>
      </div>
    </div>
  )
}

export default DetailVendas