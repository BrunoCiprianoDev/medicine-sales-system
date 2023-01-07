import React from 'react'
import { useParams } from 'react-router-dom'
import DetailContainer from '../../../components/detailContainer/DetailContainer';
import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_descontos';

const DetailDescontos = () => {

  const { id } = useParams();
  const url = `${urlServer}/grupoDescontos/${id}`;
  const urlHandleEdit = `/descontos/edit/${id}`;
  const urlHandleBack = `/descontos`

  return (
    <DetailContainer
      parameters={parameters}
      url={url}
      urlHandleEdit={urlHandleEdit}
      urlHandleBack={urlHandleBack}
    />
  )
}

export default DetailDescontos