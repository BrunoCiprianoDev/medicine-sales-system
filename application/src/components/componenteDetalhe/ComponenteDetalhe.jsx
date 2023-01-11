import React from 'react'

import styles from './ComponenteDetalhe.module.css'
import Loading from '../loading/Loading'
import AlertError from '../alertContainer/alertError/AlertError'
import { useComponenteDetalhe } from './useComponenteDetalhe'

const ComponenteDetalhe = ({
  parametros,
  idFetch,
  urlFetch,
  urlEditar,
  urlVoltar
}) => {

  const {
    data,
    loading,
    error,
    funcaoEditar,
    funcaoVoltar } = useComponenteDetalhe(urlFetch, idFetch, urlEditar, urlVoltar)

  return (
    <div className={styles.MainContainer}>
      <div className={styles['BodyData']}>
        {error && <AlertError>Falha no carregamento!</AlertError>}
        {loading && <Loading />}
        {parametros && parametros.map((parametro) => (
          <div key={parametro.id}>
            <label>{parametro.rotulo}</label>
            <p>{data && data[parametro.atributo]}</p>
          </div>
        ))}
      </div>
      <div className={styles.ButtonArea}>
        <button onClick={() => (funcaoEditar())}>Editar</button>
        <button onClick={() => (funcaoVoltar())}>Voltar</button>
      </div>
    </div>
  )
}

export default ComponenteDetalhe