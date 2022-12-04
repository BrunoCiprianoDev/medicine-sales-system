import {React, useState} from 'react'
import {useForm} from "react-hook-form";
import { useFetch } from '../../../hooks/useFetch';
import FormContainer from '../../../components/formContainer/FormContainer';
import { useNavigate, useParams } from 'react-router-dom'


const parameters = [
    {id: 1, name:'nome', label:'Nome', type: 'text'},
    {id: 2, name:'cnpj', label:'CNPJ', type: 'text' },
    {id: 3, name:'crt', label:'CRT', type: 'text' },
    {id: 4, name:'cep', label:'CEP', type: 'text' },
    {id: 5, name:'cidade', label: 'Cidade', type: 'text'},
    {id: 6, name:'uf', label:'UF', type: 'text' },
    {id: 7, name:'bairro', label:'Bairro', type: 'text' },
    {id: 8, name:'logradouro', label:'Logradouro', type: 'text' },
    {id: 9, name:'numero', label:'Número', type: 'text' },
    {id: 10, name:'complemento', label:'Complemento', type: 'text' },
    {id: 11, name:'telefone_um', label:'Telefone 1', type: 'text' },
    {id: 12, name:'telefone_dois', label:'Telefone 2', type: 'text' },
    {id: 13, name:'email', label:'E-mail', type: 'text' }
  ]





const FormFornecedores = ({edit}) => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [url] = useState(edit ?  "http://localhost:3000/fornecedores/"+id  :  "http://localhost:3000/fornecedores/")
    const{register, handleSubmit, reset, setValue} = useForm();
    const {data, httpConfig, loading, error} = useFetch(url);
    
    
    if(edit){
      setValue('nome', data && data.nome);
      setValue('cnpj', data && data.cnpj);
      setValue('crt', data && data.crt);
      setValue('cep', data && data.cep);
      setValue('uf', data && data.uf);
      setValue('cidade', data && data.cidade);
      setValue('bairro', data && data.bairro);
      setValue('logradouro', data && data.logradouro);
      setValue('numero', data && data.numero);
      setValue('complemento', data && data.complemento);
      setValue('telefone_um', data && data.telefone_um);
      setValue('telefone_dois', data && data.telefone_dois);
      setValue('email', data && data.email);
    }
       
    const onSubmit = (e) => {
        if(!edit){
        httpConfig(e, "POST");
        reset(formValues=>({
          ...formValues,
          nome:'',
          cnpj:'',
          crt:'',
          cep:'',
          uf: '',
          cidade:'',
          bairro:'',
          logradouro:'',
          numero:'',
          complemento:'',
          telefone_um:'',
          telefone_dois:'',
          email:''
        }))
      } else {
        httpConfig(e, 'PATCH')
      }
    }
    
  const handleBack = () => {
    navigate('/fornecedores/');
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

export default FormFornecedores