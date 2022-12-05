import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';
import ListContainer from '../../../components/listContainer/ListContainer';

const url = "http://localhost:3000/clientes/";


const parameters = [
    {id: 1, label: "Nome", attribute:'nome'},
    {id: 2, label: "CPF", attribute:'cpf'},
    {id: 3, label: "Data nascimento", attribute:'dt_nascimento'},
    {id: 4, label: "Telefone", attribute:'telefone'},
    {id: 5, label: "E-mail", attribute:'email'},
] 

const ListClientes
 = ({filter}) => {

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const {data, httpConfig, loading, error} = useFetch(
      filter ? url+"?"+searchParams : url)
    
    const handleEdit = (id) => {
      navigate('/clientes/'+id)
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

export default ListClientes
