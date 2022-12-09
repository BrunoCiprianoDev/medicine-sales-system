import React from 'react'
import {useParams } from 'react-router-dom'
import DetailContainer from '../../../components/detailContainer/DetailContainer'

const parameters = [
    {id: 1, label: 'Nome', attribute: 'nome'},
    {id: 2, label: 'CPF', attribute: 'cpf'},
    {id: 3, label: 'Data nascimento', attribute: 'dt_nascimento'},
    {id: 4, label: 'Telefone', attribute: 'telefone'},
    {id: 5, label: 'Email', attribute: 'email'},
  ]

const DetailClientes = () => {

  const {id} = useParams();
  const url = "http://localhost:3000/clientes/"+id;
  const urlHandleEdit = '/clientes/edit/'+id;
  const urlHandleBack = '/clientes/'


  return (
    <DetailContainer
      parameters={parameters}
      url={url}
      urlHandleEdit={urlHandleEdit}
      urlHandleBack={urlHandleBack}
    />
  )
}

export default DetailClientes
