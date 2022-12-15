import React from 'react'
import {useParams } from 'react-router-dom'
import DetailContainer from '../../../components/detailContainer/DetailContainer'
import { parameters } from '../parameters/pr_mercadorias'

const DetailMercadorias = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/mercadorias/"+id;
    const urlHandleEdit = '/mercadorias/edit/'+id;
    const urlHandleBack = '/mercadorias/'

  return (
    <DetailContainer
      parameters={parameters}
      url={url}
      urlHandleEdit={urlHandleEdit}
      urlHandleBack={urlHandleBack}
    />
  )
}

export default DetailMercadorias