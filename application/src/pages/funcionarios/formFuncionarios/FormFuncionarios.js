import {React, useState} from 'react'
import {useForm} from "react-hook-form";
import { useFetch } from '../../../hooks/useFetch';
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams } from 'react-router-dom'

const parameters = [
  {id: 1, name:'nome', label:'Nome', type: 'text'},
  {id: 2, name:'cpf', label:'CPF', type: 'text' },
  {id: 3, name:'dt_nascimento', label:'Data nascimento', type: 'date' },
  {id: 4, name:'cep', label:'CEP', type: 'text'},
  {id: 5, name:'cidade', label:'Cidade', type: 'text'},
  {id: 6, name:'bairro', label:'Bairro', type: 'text'},
  {id: 7, name:'logradouro', label:'Logradouro', type: 'text'},
  {id: 8, name:'numero', label:'Número', type: 'text' },
  {id: 10, name:'complemento', label:'Complemento', type: 'text'},
  {id: 11, name:'telefone_um', label:'Telefone um', type: 'text'},
  {id: 12, name:'telefone_dois', label:'Telefone dois', type: 'text'},
  {id: 13, name:'email', label:'E-mail', type: 'text'},
  {id: 14, name:'dt_admissao', label:'Data admissão', type: 'date'},
  {id: 15, name:'funcao', label:'Função:', type: 'text'}
]

const FormFuncionarios = ({edit}) => {


const {id} = useParams();
const [url] = useState(edit ?  "http://localhost:3000/funcionarios/"+id  :  "http://localhost:3000/funcionarios/")
const{register, handleSubmit, reset, setValue} = useForm();
const {data, httpConfig, loading, error} = useFetch(url);


if(edit){
  setValue('nome', data && data.nome);
  setValue('cpf', data && data.cpf);
  setValue('dt_nascimento', data && data.dt_nascimento);
  setValue('cep', data && data.cep);
  setValue('cidade', data && data.cidade);
  setValue('bairro', data && data.bairro);
  setValue('logradouro', data && data.logradouro);
  setValue('numero', data && data.numero);
  setValue('complemento', data && data.complemento);
  setValue('telefone_um', data && data.telefone_um);
  setValue('telefone_dois', data && data.telefone_dois);
  setValue('dt_admissao', data && data.dt_admissao);
  setValue('email', data && data.email);
  setValue('funcao', data && data.funcao);
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
    }))
  } else {
    httpConfig(e, 'PATCH')
  }
}

return (
      <FormContainer 
        loading={loading}
        error={error}
        parameters={parameters} 
        register={register} 
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        />
  )
}

export default FormFuncionarios