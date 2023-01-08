import { React, useState } from 'react'
import { useParams } from 'react-router-dom'

import { parameters } from '../parameters/pr_fornecedor'
import { urlServer } from '../../../serverConfig';

import FormContainer from '../../../components/formContainer/FormContainer';

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