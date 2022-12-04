import {React, useState} from 'react'
import {useForm} from "react-hook-form";
import { useFetch } from '../../../hooks/useFetch';
import FormContainer from '../../../components/formContainer/FormContainer';
import { useNavigate, useParams } from 'react-router-dom'


const parameters = [
    {id: 1, name:'tipo', label:'Tipo', type: 'text'},
    {id: 2, name:'classe', label:'Classes', type: 'text' },
    {id: 3, name:'classificacao', label:'Classificação', type: 'text' },
  ]

const FormCategorias = ({edit}) => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [url] = useState(edit ?  "http://localhost:3000/categorias/"+id  :  "http://localhost:3000/categorias/")
    const{register, handleSubmit, reset, setValue} = useForm();
    const {data, httpConfig, loading, error} = useFetch(url);
    
    
    if(edit){
      setValue('tipo', data && data.tipo);
      setValue('classe', data && data.classe);
      setValue('classificacao', data && data.classificacao);
    }
       
    const onSubmit = (e) => {
        if(!edit){
        httpConfig(e, "POST");
        reset(formValues=>({
          ...formValues,
          tipo:'',
          classe:'',
          classificacao:'',
        }))
      } else {
        httpConfig(e, 'PATCH')
      }
    }
    
  const handleBack = () => {
    navigate('/categorias/');
  }


  return (
    <FormContainer 
        loading={loading}
        error={error}
        parameters={parameters} 
        register={register} 
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        handleBack={handleBack}
    />
  )
}

export default FormCategorias