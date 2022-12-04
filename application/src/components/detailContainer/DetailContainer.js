import React from 'react'
import Loading from '../loading/Loading'
import styles from './DetailContainer.module.css'

const DetailContainer = (
    {parameters,
    loading,
    error,
    data,
    handleEdit,
    id}
) => {
  return (
    <div className={styles['MainContainer']}>
        {error && <p>Falha ao carregar dados....</p>}
        {loading && <Loading/>}
        {parameters && parameters.map((parameter)=>(
            <div key={parameter.id}>
                <label>{parameter.name}</label>
                <p>{data && data[parameter.value]}</p>   
            </div>
        ))}
        <button className={styles.ButtonEdit} onClick={()=>(handleEdit(id))}>Editar</button>      
    </div>
  )
}

export default DetailContainer