import {React, useState} from 'react'
import {useForm} from "react-hook-form";
import { useFetch } from '../../../hooks/useFetch';
import FormContainer from '../../../components/formContainer/FormContainer';
import { useNavigate, useParams} from 'react-router-dom'

const parameters = [
    {id: 1, name:'nome', label:'Nome', type: 'text'},
    {id: 2, name:'codigo', label:'Código', type: 'text' },
    {id: 4, name:'departamento', label:'Departamento', type: 'text' },
    {id: 5, name:'categoria_id', label:'Categoria', type: 'number' },
    {id: 6, name:'estoque_minimo', label:'Estoque minimo', type: 'text' },
    {id: 7, name:'estoque_maximo', label:'Estoque máximo', type: 'text' },
    {id: 8, name:'estoque_atual', label:'Estoque atual', type: 'text' },
    {id: 9, name:'valor_venda', label:'Valor de venda', type: 'number' },
    {id: 10, name:'temp_armazenamento', label:'Temperatura armazenamento', type: 'text' },
    {id: 11, name:'descricao', label:'Descricao', type: 'textarea' },
  ]

const FormMercadorias = ({edit}) => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [url] = useState(edit ?  "http://localhost:3000/mercadorias/"+id  :  "http://localhost:3000/mercadorias/")
    const{register, handleSubmit, reset, setValue} = useForm();
    const {data, httpConfig, loading, error} = useFetch(url);
    console.log(id);
    
    if(edit){
      setValue('nome', data && data.nome);
      setValue('codigo', data && data.codigo);
      setValue('departamento', data && data.departamento);
      setValue('categoria_id', data && data.categoria_id);
      setValue('estoque_minimo', data && data.estoque_minimo);
      setValue('estoque_maximo', data && data.estoque_maximo);
      setValue('estoque_atual', data && data.estoque_atual);
      setValue('valor_venda', data && data.valor_venda);
      setValue('temp_armazenamento', data && data.temp_armazenamento);
      setValue('descricao', data && data.descricao);
    }

    //setValue('departamento', searchParams.toString().substring(2));
       
    const onSubmit = (e) => {
        if(!edit){
        httpConfig(e, "POST");
        reset(formValues=>({
          ...formValues,
          nome:'',
          codigo:'',
          departamento: '',
          categoria:'',
          estoque_minimo:'',
          estoque_maximo:'',
          estoque_atual:'',
          valor_venda:'',
          temp_armazenamento:'',
          descricao:''
        }))
      } else {
        httpConfig(e, 'PATCH')
      }
    }
    
  const handleBack = () => {
    navigate('/mercadorias/');
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

export default FormMercadorias