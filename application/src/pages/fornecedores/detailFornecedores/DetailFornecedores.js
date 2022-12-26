import React from 'react'
import { useParams } from 'react-router-dom'
import DetailContainer from '../../../components/detailContainer/DetailContainer'
import { parameters } from '../parameters/pr_fornecedor'

const DetailFornecedores = () => {

    const {id} = useParams();
    const url = "http://localhost:5000/fornecedores/"+id;
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