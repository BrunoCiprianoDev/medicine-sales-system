import {React, useState} from 'react'
import {useForm} from "react-hook-form";
import { useFetch } from '../../../hooks/useFetch';
import FormContainer from '../../../components/formContainer/FormContainer';
import { useNavigate, useParams } from 'react-router-dom'


const parameters = [
    {id: 1, attribute:'nome', label:'Nome', type: 'text'},
    {id: 2, attribute:'cpf', label:'CPF', type: 'text' },
    {id: 3, attribute:'dt_nascimento', label:'Data nascimento', type: 'date' },
    {id: 4, attribute:'telefone', label:'Telefone', type: 'text' },
    {id: 5, attribute:'email', label:'E-mail', type: 'text' },
  ]

const FormClientes = ({edit}) => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [url] = useState(edit ?  "http://localhost:3000/clientes/"+id  :  "http://localhost:3000/clientes/")
    const{register, handleSubmit, reset, setValue} = useForm();
    const {data, httpConfig, loading, error} = useFetch(url);
    
    
    if(edit){
      setValue('nome', data && data.nome);
      setValue('cpf', data && data.cpf);
      setValue('dt_nascimento', data && data.dt_nascimento);
      setValue('telefone', data && data.telefone);
      setValue('email', data && data.email);
    }
       
    const onSubmit = (e) => {
        if(!edit){
        httpConfig(e, "POST");
        reset(formValues=>({
          ...formValues,
          nome:'',
          cpf:'',
          dt_nascimento:'',
          telefone: '',
          email:''
        }))
      } else {
        httpConfig(e, 'PATCH')
      }
    }
    
  const handleBack = () => {
    navigate('/clientes/');
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

export default FormClientes