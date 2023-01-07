import { React, useState } from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams } from 'react-router-dom'
import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_descontos';

const FormCategorias = ({ edit }) => {

  const { id } = useParams();
  const [url] = useState(edit ? `${urlServer}/grupoDescontos/${id}` : `${urlServer}/grupoDescontos/`)
  const urlBack = `/descontos/`

  return (
    <FormContainer
      parameters={parameters}
      url={url}
      urlBack={urlBack}
      edit={edit}
    />
  )
}

export default FormCategorias