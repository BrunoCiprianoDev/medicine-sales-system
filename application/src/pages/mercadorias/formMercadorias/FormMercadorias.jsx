import { React } from 'react'
import { useParams } from 'react-router-dom'

import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_mercadorias';

import FormContainer from '../../../components/formContainer/FormContainer';

const FormMercadorias = ({ edit }) => {

  const { id } = useParams();
  const url = (edit ? `${urlServer}/mercadorias/${id}` : `${urlServer}/mercadorias/`);
  const urlBack = '/mercadorias/';

  return (
    <FormContainer
      parameters={parameters}
      url={url}
      urlBack={urlBack}
      edit={edit}
    />
  )
}

export default FormMercadorias