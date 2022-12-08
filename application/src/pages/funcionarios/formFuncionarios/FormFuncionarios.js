import {React, useState} from 'react'
import {useForm} from "react-hook-form";
import { useFetch } from '../../../hooks/useFetch';
import FormContainer from '../../../components/formContainer/FormContainer';
import { useNavigate, useParams } from 'react-router-dom'
import {parameters} from '../parameters/FuncionariosPR.js'


const FormFuncionarios = ({edit}) => {

const navigate = useNavigate();
const {id} = useParams();
const [url] = useState(edit ?  "http://localhost:3000/funcionarios/"+id  :  "http://localhost:3000/funcionarios/")
const{register, handleSubmit, reset, setValue} = useForm();
const {data, httpConfig, loading, error} = useFetch(url);

if(edit){
  parameters.map((parameter)=>(
    setValue(parameter.attribute, data && data[parameter.attribute])
  ))
}

const onSubmit = (e) => {
    if(!edit){
    httpConfig(e, "POST");
    reset(formValues=>({
      ...formValues,
      nome: '',
      cpf:'',
      dt_nascimento:'',
      cep:'',
      cidade:'',
      bairro:'',
      logradouro:'',
      numero:'',
      complemento:'',
      telefone_um:'',
      telefone_dois:'',
      dt_admissao:'',
      email:'',
      funcao:''
    }));
  } else {
    httpConfig(e, 'PATCH')
  }
}

const handleBack = () => {
    navigate('/funcionarios/');
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

export default FormFuncionarios