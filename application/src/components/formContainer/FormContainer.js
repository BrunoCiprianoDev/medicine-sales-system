import React from 'react'
import Loading from '../loading/Loading'
import styles from './FormContainer.module.css'

const FormContainer = ({
      loading, 
      error, 
      parameters, 
      register, 
      onSubmit, 
      handleSubmit, 
      handleBack
  }) => {
  return (
    <div className={styles.MainContainer}>
    {loading && <Loading/>}
    {error && <p>Falha ao carregar dados....</p>}
    <form onSubmit={handleSubmit(onSubmit)}>
        <div  className={styles['FormContainer']}>
          {parameters.map((parameter)=>(
            <div key={parameter.id}>
              <label>{parameter.label}
                {parameter.type !== 'select' && 
                  <input name={parameter.attribute}  
                    {...register(parameter.attribute)} 
                    type={parameter.type} step='.01' required
                  />
                }
                {parameter.type === 'select' && 
                  <select {...register(parameter.attribute)}>
                    {parameter.options.map((option)=>(
                      <option key={option.id}>{option.value}</option>
                    ))}
                  </select>
                }
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