import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';
import ListContainer from '../../../components/listContainer/ListContainer';

const url = "http://localhost:3000/categorias/";


const parameters = [
    {id: 1, value: "Tipo", attribute:'tipo'},
    {id: 2, value: "Classe", attribute:'classe'},
    {id: 3, value: "Classificação", attribute:'classificacao'},
]

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
  
    console.log(data)
  return (
    <ListContainer
      loading={loading}
      error={error}
      parameters={parameters}
      handleRemove={handleRemove}
      handleEdit={handleEdit}
      data={data}     
    />
  )
}

export default ListCategorias