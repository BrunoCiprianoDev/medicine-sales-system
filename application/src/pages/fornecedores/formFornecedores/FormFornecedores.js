import {React, useState} from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams } from 'react-router-dom'
import {parameters} from '../parameters/pr_fornecedor'

const FormFornecedores = ({edit}) => {

    const {id} = useParams();
    const [url] = useState(edit ?  "http://localhost:5000/fornecedores/"+id  :  "http://localhost:5000/fornecedores/")
    const urlBack= '/fornecedores/'

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