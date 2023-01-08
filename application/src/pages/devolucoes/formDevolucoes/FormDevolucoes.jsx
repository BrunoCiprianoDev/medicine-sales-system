import React from 'react';
import { useParams } from 'react-router-dom';

import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_devolucoes';

import FormContainer from '../../../components/formContainer/FormContainer';

const Devolucoes = ({edit}) => {
  
  const {id} = useParams();
  const url = (edit ? `${urlServer}/devolucoes/${id}` : `${urlServer}/devolucoes/`);
  const urlBack= `/devolucoes/`;
  
  return (
    <FormContainer
      parameters={parameters}
      url={url}
      urlBack={urlBack}
      edit={edit}
    />
  )
}

export default Devolucoes