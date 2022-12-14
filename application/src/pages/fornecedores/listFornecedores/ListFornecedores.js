import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';
import ListContainer from '../../../components/listContainer/ListContainer';
import { parameters } from '../parameters/pr_fornecedor';

const url = "http://localhost:3000/fornecedores/";

const ListFornecedores = ({filter}) => {

    const useParameters = parameters.slice(0, 2).concat(parameters.slice(9,12));
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
      parameters={useParameters}
      handleRemove={handleRemove}
      handleEdit={handleEdit}
      data={data}   
      editable='true'  
    />
  )
}

export default ListFornecedores