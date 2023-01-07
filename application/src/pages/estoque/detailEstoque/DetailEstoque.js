import React from 'react'
import styles from './DetailEstoque.module.css'
import iconeDeletar from "../../../assets/icon-deletar.png"
import iconeEditar from '../../../assets/icon-editar.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { urlServer } from '../../../serverConfig';
import CircleBar from '../../../components/circleBar/CircleBar';
import Loading from '../../../components/loading/Loading';
import { useState } from 'react';
import { SimpleDataFormat } from '../../../components/dataFormater/DataFormater';

const parameters = [
  { id: 1, attribute: 'nome', label: 'Nome', type: 'text' },
  { id: 2, attribute: 'codigo', label: 'Código', type: 'text' },
  { id: 3, attribute: 'estoque_minimo', label: 'Estoque minimo', type: 'text' },
  { id: 4, attribute: 'estoque_maximo', label: 'Estoque máximo', type: 'text' },
  { id: 5, attribute: 'valor_venda', label: 'Valor de venda', type: 'number' }
]

const DetailEstoque = () => {

  const { id } = useParams();
  const { data: mercadoria, loading } = useFetch(urlServer + "/mercadorias/" + id)
  const { data: lotes } = useFetch(urlServer + '/lotes?mercadoriaId=' + id)
  const [url, setUrl] = useState('');
  const { httpConfig } = useFetch(url)
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
    setUrl(urlServer + "/lotes/")
    httpConfig(id, 'DELETE')
    window.location.reload();
  }

  const detailLote = (id) => [
    navigate("/estoque/lote/" + id)
  ]

  return (
    <div className={styles.MainContainer}>
      {loading && <Loading />}
      {!loading && <div className={styles.LeftArea}>
        <h2>Detalhes Estoque/Mercadoria</h2>
        <div className={styles['BodyData']}>
          {parameters && parameters.map((parameter) => (
            <div key={parameter.id}>
              <label>{parameter.label}</label>
              <p>{mercadoria && mercadoria[parameter.attribute]}</p>
            </div>
          ))}
        </div>
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