import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import DetailContainer from '../../../components/detailContainer/DetailContainer'

const parameters = [
    {id: 1, name: 'Nome', value: 'nome'},
    {id: 2, name: 'CNPJ', value: 'cnpj'},
    {id: 3, name: 'CRT', value: 'crt'},
    {id: 4, name: 'CEP', value: 'cep'},
    {id: 5, name: "Cidade", value: 'cidade'},
    {id: 6, name: 'UF', value: 'uf'},
    {id: 7, name: 'Bairro', value: 'bairro'},
    {id: 8, name: 'Logradouro', value: 'logradouro'},
    {id: 9, name: 'Número', value: 'numero'},
    {id: 10, name: 'Complemento', value: 'complemento'},
    {id: 11, name: 'Telefone 1', value: 'telefone_um'},
    {id: 12, name: 'Telefone 2', value: 'telefone_dois'},
    {id: 13, name: 'E-mail', value: 'email'}
  ]

const DetailFornecedores = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/fornecedores/"+id;
    const {data, loading, error} = useFetch(url);
    const navigate = useNavigate();

    const handleEdit = (id) => {
      navigate('/fornecedores/edit/'+id);
    }

    const handleBack = () => {
      navigate('/fornecedores/');
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

export default DetailFornecedores