import React from 'react'
import { useParams } from 'react-router-dom'
import DetailContainer from '../../../components/detailContainer/DetailContainer'
import { parameters } from '../parameters/pr_categoria'

const DetailCategorias = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/categorias/"+id;
    const urlHandleEdit = '/categorias/edit/'+id;
    const urlHandleBack = '/categorias/'

  return (
    <DetailContainer
      parameters={parameters}
      url={url}
      urlHandleEdit={urlHandleEdit}
      urlHandleBack={urlHandleBack}
    />
  )
}

export default DetailCategorias