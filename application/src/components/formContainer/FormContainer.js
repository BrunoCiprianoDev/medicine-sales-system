import React from 'react'
import Loading from '../loading/Loading'
import styles from './FormContainer.module.css'

const FormContainer = ({loading, error, parameters, register, onSubmit, handleSubmit, handleBack}) => {
  return (
    <div className={styles.MainContainer}>
    {loading && <Loading/>}
    {error && <p>Falha ao carregar dados....</p>}
    <form onSubmit={handleSubmit(onSubmit)}>
        <div  className={styles['FormContainer']}>
          {parameters.map((parameter)=>(
            <div key={parameter.id}>
              <label>{parameter.label}
                {parameter.type === 'text' && <input name={parameter.attribute}  {...register(parameter.attribute)} type={parameter.type} required/>}
                {parameter.type === 'date' && <input name={parameter.attribute}  {...register(parameter.attribute)} type={parameter.type} required/>}
                {parameter.type === 'textarea' && <input name={parameter.attribute}  {...register(parameter.attribute)} type={parameter.type} required/>}
                {parameter.type === 'number' && <input name={parameter.attribute}  {...register(parameter.attribute)} type={parameter.type} step='.01' required/>}
                {parameter.type === 'password' && <input name={parameter.attribute}  {...register(parameter.attribute)} type={parameter.type} required/>}
              </label>
            </div>
           ))}
        </div>
        <div className={styles.SubmitArea}><input type="submit" value='Salvar'/></div>   
      </form>
      <div className={styles.SubmitArea}><button onClick={()=>(handleBack())}>Voltar</button></div>
    </div>
  )
}

export default FormContainer