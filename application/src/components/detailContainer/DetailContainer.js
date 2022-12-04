import React from 'react'
import Loading from '../loading/Loading'
import styles from './DetailContainer.module.css'

const DetailContainer = (
    {parameters,
    loading,
    error,
    data,
    handleEdit,
    handleBack,
    id}
) => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles['BodyData']}>
        {error && <p>Falha ao carregar dados....</p>}
        {loading && <Loading/>}
        {parameters && parameters.map((parameter)=>(
            <div key={parameter.id}>
                <label>{parameter.name}</label>
                <p>{data && data[parameter.value]}</p>   
            </div>
        ))}       
      </div>
      <div className={styles.ButtonArea}>
          <button onClick={()=>(handleEdit(id))}>Editar</button>
          <button onClick={()=>(handleBack())}>Voltar</button>      
        </div>
    </div>
  )
}

export default DetailContainer