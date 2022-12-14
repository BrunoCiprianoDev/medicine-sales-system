import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';
import ListContainer from '../../../components/listContainer/ListContainer';
import { parameters } from '../parameters/pr_categoria';

const url = "http://localhost:3000/categorias/";

const ListCategorias = ({filter}) => {

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const {data, httpConfig, loading, error} = useFetch(
      filter ? url+"?"+searchParams : url)
    
    const handleEdit = (id) => {
      navigate('/categorias/'+id)
    }
    
    const handleRemove = (id) => {
      httpConfig(id, "DELETE");
    }

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

export default ListCategorias