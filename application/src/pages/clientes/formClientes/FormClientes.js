import {React, useState} from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams } from 'react-router-dom'


const parameters = [
    {id: 1, attribute:'nome', label:'Nome', type: 'text'},
    {id: 2, attribute:'cpf', label:'CPF', type: 'text' },
    {id: 3, attribute:'dt_nascimento', label:'Data nascimento', type: 'date' },
    {id: 4, attribute:'telefone', label:'Telefone', type: 'text' },
    {id: 5, attribute:'email', label:'E-mail', type: 'text' },
  ]

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