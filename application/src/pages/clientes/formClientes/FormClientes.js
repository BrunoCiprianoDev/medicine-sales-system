import {React, useState} from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams } from 'react-router-dom'
import { parameters } from '../parameters/pr_clientes'

const FormClientes = ({edit}) => {

    const {id} = useParams();
    const [url] = useState(edit ?  "http://localhost:3000/clientes/"+id  :  "http://localhost:3000/clientes/")
    const urlBack= '/clientes/'

  return (
    <FormContainer 
    parameters={parameters}
    url={url}
    urlBack={urlBack}
    edit={edit}
/>
  )
}

export default FormClientes