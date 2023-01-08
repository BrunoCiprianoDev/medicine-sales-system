import React from 'react'
import {useForm} from "react-hook-form";
import { useFetch } from '../../hooks/useFetch';
import { useNavigate} from 'react-router-dom'

import styles from './FormContainer.module.css'

import Loading from '../loading/Loading'

import AlertError from '../alertContainer/alertError/AlertError';
import InputAutoComplete from '../inputAutoComplete/InputAutoComplete';
import SelectBox from '../selectBox/SelectBox';

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
    alert('Dados enviados!')
    window.location.reload();
  }
    
  const handleBack = () => {
    navigate(urlBack);
  }

  return (
    <div className={styles.MainContainer}>
    {loading && <Loading/>}
    {error && <AlertError>Falha no carregamento!</AlertError>}
    <form onSubmit={handleSubmit(onSubmit)}>
        <div  className={styles['FormContainer']}>
          {parameters.map((parameter)=>(
            <div key={parameter.id}>
              <label className={styles.LabelsForm}>{parameter.label}        
                {parameter.type === 'text' && 
                  <input name={parameter.attribute}  
                    {...register(parameter.attribute)} 
                    type={parameter.type} 
                  />
                }
                 {parameter.type === 'date' && 
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
                    type={parameter.type} rows='3' required
                  />
                }
                {parameter.type === 'password' && 
                  <input name={parameter.attribute}  
                    {...register(parameter.attribute)} 
                    type={parameter.type} required
                  />
                }
                {parameter.type === 'select' && 
                  <select {...register(parameter.attribute)} required> 
                    {parameter.options.map((option)=>(
                      <option key={option.id}>{option.value}</option>
                    ))}
                  </select>
                }
                {parameter.type === 'autoComplete' &&
                  <InputAutoComplete
                    attribute={parameter.attribute}
                    url={parameter.url}
                    attributeVisible={parameter.attributeVisible}
                    register={register}
                    setValue={setValue}
                    hookForm={true}
                  />
                }
                {parameter.type === 'selectBox' &&
                  <SelectBox
                    register={register}
                    url={parameter.url}
                    attribute={parameter.attribute}
                  />
                }
             </label>
            </div>
           ))}
        </div>
        <div className={styles.SubmitArea}>
          <input type="submit" value='Salvar' className={styles.SubmitButton}/>
        </div>
      </form>
      <div className={styles.SubmitArea}>
        <button className={styles.ButtonBack} onClick={()=>(handleBack())}>Voltar</button>
      </div>
    </div>
  )
}

export default FormContainer