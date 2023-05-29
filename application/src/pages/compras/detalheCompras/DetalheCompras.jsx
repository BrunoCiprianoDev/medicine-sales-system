import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import styles from './DetalheCompras.module.css'

import Loading from '../../../components/loading/Loading';
import AlertError from '../../../components/alertContainer/alertError/AlertError';
import { parametrosCompras, parametrosItensCompra } from '../parametros/pr_compras';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

import { parametrosEstoque } from '../../estoque/parametros/pr_estoque';
import useFetchList from '../../../hooks/useFetchList';
import { useEffect } from 'react';

const DetalheCompras = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {data, fetchData, isLoading, error} = useFetchList();

  useEffect(()=> {
    fetchData(`${urlServer}/purchases/${id}`); // eslint-disable-next-line
  },[])


  return (
    <div className={styles.MainContainer}>
      {isLoading && <Loading/>}
      {error && <AlertError>{error}</AlertError>}
      {<div className={styles.LeftArea}>
        <h2>Detalhes da compra</h2>
        <div className={styles['BodyData']}>
          {parametrosCompras.map((compra)=>(
            <div key={compra.id}>
              <label>{compra.rotulo}</label>
              <p>{data && data[compra.atributo]}</p>
            </div>
          ))}    
        </div>
        <div className={styles.TextArea}>
          <p>
            Nessa área é possivel conferir os detalhes cada compra.
          </p>
        </div>
        <button
          className={styles.ButtonVoltar}
          onClick={() => navigate(`/compras/search`)}>Voltar
        </button>
      </div>}
      <div className={styles.RightArea}>
        <ComponenteLista
          titulo={'Itens da compra'}
          urlFetch={`${urlServer}/lots/purchase/${id}`}
          parametros={parametrosEstoque}
          urlDetalhe={`/compras/detail/`}
          opcaoEditar={false}
        />
      </div>
    </div>
  )
}

export default DetalheCompras