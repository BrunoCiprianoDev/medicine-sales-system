import { React } from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams } from 'react-router-dom'
import { parameters } from '../parameters/pr_mercadorias';
import { urlServer } from '../../../serverConfig';

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