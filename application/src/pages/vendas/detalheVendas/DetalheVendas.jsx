import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import styles from './DetalheVendas.module.css'

import Loading from '../../../components/loading/Loading';
import AlertError from '../../../components/alertContainer/alertError/AlertError';
import {parametrosVenda, parametrosItensVenda } from '../parametros/pr_vendas';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';
import useFetchList from '../../../hooks/useFetchList';
import { useEffect } from 'react';

const DetalheVendas = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {data, fetchData, isLoading, error} = useFetchList();

  useEffect(()=> {
    fetchData(`${urlServer}/sales/${id}`); // eslint-disable-next-line
  },[])

  return (
    <div className={styles.MainContainer}>
      {isLoading && <Loading/>}
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
          urlFetch={`${urlServer}/saleItems/sale/${id}`}
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