import React from 'react';
import { useParams } from 'react-router-dom';

import { parameters } from '../parameters/pr_fornecedor';
import { urlServer } from '../../../serverConfig';

import DetailContainer from '../../../components/detailContainer/DetailContainer';

const DetailFornecedores = () => {

  const { id } = useParams();
  const url = urlServer + `/fornecedores/${id}`;
  const urlHandleEdit = `/fornecedores/edit/${id}`;
  const urlHandleBack = `/fornecedores/`

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