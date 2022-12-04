import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import DetailContainer from '../../../components/detailContainer/DetailContainer'

const parameters = [
    {id: 1, name: 'Nome', value: 'nome'},
    {id: 2, name: 'CPF', value: 'cpf'},
    {id: 3, name: 'Data nascimento', value: 'dt_nascimento'},
    {id: 4, name: 'Telefone', value: 'telefone'},
    {id: 5, name: 'Email', value: 'email'},
  ]

const DetailClientes
 = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/clientes/"+id;
    const {data, loading, error} = useFetch(url);
    const navigate = useNavigate();

    const handleEdit = (id) => {
      navigate('/clientes/edit/'+id);
    }

    const handleBack = () => {
      navigate('/clientes/');
    }

  return (
    <DetailContainer
    loading={loading}
    error={error}
    parameters={parameters}
    data={data}
    handleEdit={handleEdit}
    handleBack={handleBack}
    id={id}         
  />
  )
}

export default DetailClientes
