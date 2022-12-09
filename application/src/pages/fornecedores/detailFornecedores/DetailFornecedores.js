import React from 'react'
import { useParams } from 'react-router-dom'
import DetailContainer from '../../../components/detailContainer/DetailContainer'

const parameters = [
    {id: 1, label: 'Nome', attribute: 'nome'},
    {id: 2, label: 'CNPJ', attribute: 'cnpj'},
    {id: 3, label: 'CRT', attribute: 'crt'},
    {id: 4, label: 'CEP', attribute: 'cep'},
    {id: 5, label: "Cidade", attribute: 'cidade'},
    {id: 6, label: 'UF', attribute: 'uf'},
    {id: 7, label: 'Bairro', attribute: 'bairro'},
    {id: 8, label: 'Logradouro', attribute: 'logradouro'},
    {id: 9, label: 'Número', attribute: 'numero'},
    {id: 10, label: 'Complemento', attribute: 'complemento'},
    {id: 11, label: 'Telefone 1', attribute: 'telefone_um'},
    {id: 12, label: 'Telefone 2', attribute: 'telefone_dois'},
    {id: 13, label: 'E-mail', attribute: 'email'}
  ]

const DetailFornecedores = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/fornecedores/"+id;
    const urlHandleEdit = '/fornecedores/edit/'+id;
    const urlHandleBack = '/fornecedores/'

  return (
    <DetailContainer
      parameters={parameters}
      url={url}
      urlHandleEdit={urlHandleEdit}
      urlHandleBack={urlHandleBack}
    />
  )
}

export default DetailFornecedores