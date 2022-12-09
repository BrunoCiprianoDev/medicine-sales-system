import React from 'react'
import Loading from '../loading/Loading'
import styles from './FormContainer.module.css'
import {useForm} from "react-hook-form";
import { useFetch } from '../../hooks/useFetch';
import { useNavigate} from 'react-router-dom'

const FormContainer = ({
      parameters,
      url,
      urlBack,
      edit
  }) => {

  const navigate = useNavigate();
  const {data, httpConfig, loading, error} = useFetch(url);
  const{register, handleSubmit, reset, setValue} = useForm();

  if(edit){
    parameters.map((parameter)=>(
      setValue(parameter.attribute, data && data[parameter.attribute])
    ))
  }
       
  const onSubmit = (e) => {
      if(!edit){
      httpConfig(e, "POST");
      parameters.map((parameter)=>(
        reset(formValues=>({
          ...formValues,
          [parameter.attribute]:''
        }))
      ))
    } else {
      httpConfig(e, 'PATCH')
    }
  }
    
  const handleBack = () => {
    navigate(urlBack);
  }

  return (
    <div className={styles.MainContainer}>
    {loading && <Loading/>}
    {error && <p>Falha ao carregar dados....</p>}
    <form onSubmit={handleSubmit(onSubmit)}>
        <div  className={styles['FormContainer']}>
          {parameters.map((parameter)=>(
            <div key={parameter.id}>
              <label>{parameter.label}
                {parameter.type === 'text' && 
                  <input name={parameter.attribute}  
                    {...register(parameter.attribute)} 
                    type={parameter.type} 
                  />
                }
                {parameter.type === 'number' && 
                  <input name={parameter.attribute}  
                    {...register(parameter.attribute)} 
                    type={parameter.type} step='.01' required
                  />
                }
                {parameter.type === 'textarea' && 
                  <textarea name={parameter.attribute}  
                    {...register(parameter.attribute)} 
                    type={parameter.type} rows='10'
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
        <div className={styles.SubmitArea}>
          <input type="submit" value='Salvar'/>
        </div>
      </form>
      <div className={styles.SubmitArea}>
        <button onClick={()=>(handleBack())}>Voltar</button>
      </div>
    </div>
  )
}

export default FormContainer