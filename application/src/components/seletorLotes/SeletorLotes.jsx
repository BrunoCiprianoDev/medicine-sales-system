import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { urlServer } from '../../serverConfig';
import Loading from '../loading/Loading';

import styles from './SeletorLotes.module.css'
import AlertError from '../alertContainer/alertError/AlertError';

const SelectorLotes = ({ mercadoriaLotes, setSeletorLotes }) => {

  const { data, error, loading } = useFetch(`${urlServer}/lotes`, `?mercadoriaId=${mercadoriaLotes}`);

  const handleClose = () => {
    setSeletorLotes(false);
  }

  return (
    <div className={styles.MainContainer}>
      {error && <AlertError>Erro no carregamento!</AlertError>}
      {loading && <Loading />}
      <button className={styles.Fechar} onClick={() => handleClose()}>X</button>
      <h3>Lotes cadastrados</h3>
      <p>Por padrão, os itens adicionados a venda são contabilizados
        do lote com o prazo mais proximo do vencimento. Caso seja necessario,
        você pode escolher selecionando de qual lote a mercadoria será retirada.
      </p>
      <table className={styles.TableLotes}>
        <thead>
          <tr className={styles.TableLotesHead}>
            <th>Lote</th>
            <th>Validade</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((lote) => (
            <tr key={lote.id} className={styles.TableLineBody} onClick={() => handleClose()}>
              <td>{lote.lote}</td>
              <td>{lote.validade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SelectorLotes