import {React, useState} from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import {useParams } from 'react-router-dom'
import {parameters} from '../parameters/pr_funcionario'
import { urlServer } from '../../../serverConfig';
const FormFuncionarios = ({edit}) => {

const {id} = useParams();
const [url] = useState(edit ?  `${urlServer}/funcionarios/${id}`  :  `${urlServer}/funcionarios/`)
const urlBack = `/funcionarios/`

return (
  <FormContainer 
    parameters={parameters}
    url={url}
    urlBack={urlBack}
    edit={edit}
  />
  )
}

export default FormFuncionarios