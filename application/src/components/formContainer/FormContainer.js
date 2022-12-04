import React from 'react'
import Loading from '../loading/Loading'
import styles from './FormContainer.module.css'

const FormContainer = ({loading, error, parameters, register, onSubmit, handleSubmit}) => {
  return (
    <div className={styles.MainContainer}>
    {loading && <Loading/>}
    {error && <p>Falha ao carregar dados....</p>}
    <form onSubmit={handleSubmit(onSubmit)}>
        <div  className={styles['FormContainer']}>
          {parameters.map((parameter)=>(
            <div key={parameter.id}>
              <label>{parameter.label}
                <input name={parameter.name}  {...register(parameter.name)} type={parameter.type} required/>
              </label>
            </div>
           ))}
        </div>
        <div className={styles.SubmitArea}><input type="submit" value='Salvar'/></div>       
      </form>
    </div>
  )
}

export default FormContainer