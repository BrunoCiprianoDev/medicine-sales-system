import { React, useState } from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams } from 'react-router-dom'
import { parameters } from '../parameters/pr_fornecedor'
import { urlServer } from '../../../serverConfig';

const FormFornecedores = ({ edit }) => {

  const { id } = useParams();
  const [url] = useState(edit ? `${urlServer}/fornecedores/${id}` : `${urlServer}/fornecedores/`)
  const urlBack = `/fornecedores/`

  return (
    <FormContainer
      parameters={parameters}
      url={url}
      urlBack={urlBack}
      edit={edit}
    />
  )
}

export default FormFornecedores