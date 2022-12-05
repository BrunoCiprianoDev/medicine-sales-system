import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';
import ListContainer from '../../../components/listContainer/ListContainer';

const url = "http://localhost:3000/fornecedores/";


const parameters = [
    {id: 1, label: "Nome", attribute:'nome'},
    {id: 2, label: "CNPJ", attribute:'cnpj'},
    {id: 4, label: "Telefone 1", attribute:'telefone_um'},
    {id: 5, label: "Telefone 2", attribute:'telefone_dois'},
    {id: 6, label: "Email", attribute:'email'}
]

const ListFornecedores = ({filter}) => {

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const {data, httpConfig, loading, error} = useFetch(
      filter ? url+"?"+searchParams : url)
    
    const handleEdit = (id) => {
      navigate('/fornecedores/'+id)
    }
    
    const handleRemove = (id) => {
      httpConfig(id, "DELETE");
    }
  
    console.log(data)
  return (
    <ListContainer
      loading={loading}
      error={error}
      parameters={parameters}
      handleRemove={handleRemove}
      handleEdit={handleEdit}
      data={data}   
      editable='true'  
    />
  )
}

export default ListFornecedores