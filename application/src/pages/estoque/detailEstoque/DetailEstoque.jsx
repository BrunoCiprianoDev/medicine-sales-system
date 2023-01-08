import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './DetailEstoque.module.css';
import { useFetch } from '../../../hooks/useFetch';
import { urlServer } from '../../../serverConfig';
import { SimpleDataFormat } from '../../../components/dataFormater/DataFormater';

import CircleBar from '../../../components/circleBar/CircleBar';
import Loading from '../../../components/loading/Loading';
import iconeDeletar from '../../../assets/icon-deletar.png';
import iconeEditar from '../../../assets/icon-editar.png';

const DetailEstoque = () => {

  const { id } = useParams();
  const { data: mercadoria, loading } = useFetch(`${urlServer}/mercadorias/${id}`)
  const { data: lotes } = useFetch(`${urlServer}/lotes?mercadoriaId=${id}`)
  const [url, setUrl] = useState('');
  const { httpConfig } = useFetch(url);
  const navigate = useNavigate();

  const currentItensInventory = () => {
    var unidades = 0;
    lotes && lotes.map((lote) => (
      unidades += parseFloat(lote.unidades)
    ))
    return unidades;
  }

  const percentualCurrent = () => {
    return (currentItensInventory() / parseFloat(mercadoria.estoque_maximo)) * 100
  }

  const deleteLote = (id) => {
    setUrl(`${urlServer}/lotes/`)
    httpConfig(id, 'DELETE')
    window.location.reload();
  }

  const detailLote = (id) => [
    navigate(`/estoque/lote/${id}`)
  ]

  return (
    <div className={styles.MainContainer}>
      {loading && <Loading />}
      {!loading && <div className={styles.LeftArea}>
        <h2>Detalhes Estoque/Mercadoria</h2>
        {mercadoria && <div className={styles['BodyData']}>
            <div>
              <label>Código</label>
              <p>{mercadoria.codigo}</p>
            </div>
            <div>
              <label>Mercadoria</label>
              <p>{mercadoria.nome}</p>
            </div>
            <div>
              <label>Estoque mínimo</label>
              <p>{mercadoria.estoque_minimo}</p>
            </div>
            <div>
              <label>Estoque máximo</label>
              <p>{mercadoria.estoque_maximo}</p>
            </div>
            <div>
              <label>Valor de venda</label>
              <p>{mercadoria.valor_venda}</p>
            </div>
        </div>}
        <div className={styles.ComponentGraphic}>
          <h2>Unidades no estoque: {mercadoria && currentItensInventory(mercadoria.lotes)}</h2>
          {mercadoria && <CircleBar
            percentage={percentualCurrent(mercadoria.lotes)}
            circleWidth='225'
            paramRadius={100}
            profile={25}
            numberSize={'2.4em'}
            disableText={false}
          />}
        </div>
      </div>}
      <div className={styles.RightArea}>
        <div><h2>Lotes cadastrados</h2></div>
        <div className={styles.ListContainer}>
          <div className={styles.HeaderList}>
            <div><p>Lote</p></div>
            <div><p>Validade</p></div>
            <div><p>Quantidade</p></div>
            <div></div>
          </div>
          {lotes && lotes.map((lote) => (
            <div key={lote.id} className={styles.lotListComponent}>
              <div><p>{lote.lote}</p></div>
              <div><p>{SimpleDataFormat(lote.validade)}</p></div>
              <div><p>{lote.unidades}</p></div>
              <div>
                <button className={styles.buttonDetalhe} onClick={() => detailLote(lote.id)}>
                  <img src={iconeEditar} alt='' />
                </button>
                <button className={styles.buttonDeletar} onClick={() => deleteLote(lote.id)}>
                  <img src={iconeDeletar} alt='' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailEstoque