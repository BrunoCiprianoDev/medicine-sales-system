import React from 'react'
import {useParams } from 'react-router-dom'
import DetailContainer from '../../../components/detailContainer/DetailContainer'
import { parameters } from '../parameters/pr_clientes'

const DetailClientes = () => {

  const {id} = useParams();
  const url = "http://localhost:5000/clientes/"+id;
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
