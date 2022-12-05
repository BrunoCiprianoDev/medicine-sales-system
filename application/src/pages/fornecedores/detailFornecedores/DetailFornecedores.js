import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import DetailContainer from '../../../components/detailContainer/DetailContainer'

const parameters = [
    {id: 1, label: 'Nome', value: 'nome'},
    {id: 2, label: 'CNPJ', value: 'cnpj'},
    {id: 3, label: 'CRT', value: 'crt'},
    {id: 4, label: 'CEP', value: 'cep'},
    {id: 5, label: "Cidade", value: 'cidade'},
    {id: 6, label: 'UF', value: 'uf'},
    {id: 7, label: 'Bairro', value: 'bairro'},
    {id: 8, label: 'Logradouro', value: 'logradouro'},
    {id: 9, label: 'Número', value: 'numero'},
    {id: 10, label: 'Complemento', value: 'complemento'},
    {id: 11, label: 'Telefone 1', value: 'telefone_um'},
    {id: 12, label: 'Telefone 2', value: 'telefone_dois'},
    {id: 13, label: 'E-mail', value: 'email'}
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