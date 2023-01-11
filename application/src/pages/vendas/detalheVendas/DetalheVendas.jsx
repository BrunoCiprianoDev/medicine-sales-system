import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import styles from './DetalheVendas.module.css'

import Loading from '../../../components/loading/Loading';
import AlertError from '../../../components/alertContainer/alertError/AlertError';
import {parametrosVenda, parametrosItensVenda } from '../parametros/pr_vendas';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';
import { useFetch } from '../../../hooks/useFetch';

const DetalheVendas = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {data, loading, error} = useFetch(`${urlServer}/vendas/`, `${id}`)

  return (
    <div className={styles.MainContainer}>
      {loading && <Loading/>}
      {error && <AlertError>{error}</AlertError>}
      {<div className={styles.LeftArea}>
        <h2>Detalhes da venda</h2>
        <div className={styles['BodyData']}>
          {parametrosVenda.map((venda)=>(
            <div key={venda.id}>
              <label>{venda.rotulo}</label>
              <p>{data && data[venda.atributo]}</p>
            </div>
          ))}    
        </div>
        <div className={styles.TextArea}>
          <p>
            Nessa área é possivel conferir os detalhes cada venda.
          </p>
        </div>
        <button
          className={styles.ButtonVoltar}
          onClick={() => navigate(`/devolucoes/form/${data.id}`)}>Devolução
        </button>
        <button
          className={styles.ButtonVoltar}
          onClick={() => navigate(`/vendas/search`)}>Voltar
        </button>
      </div>}
      <div className={styles.RightArea}>
        <ComponenteLista
          titulo={'Vendas'}
          urlFetch={`${urlServer}/itensVendas/`}
          filtro={`?vendaId=${id}`}
          parametros={parametrosItensVenda}
          urlDetalhe={`/vendas/detail/`}
          opcaoEditar={false}
        />
      </div>
    </div>
  )
}

export default DetalheVendas