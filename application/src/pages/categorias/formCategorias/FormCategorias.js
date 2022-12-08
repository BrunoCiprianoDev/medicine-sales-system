import {React, useState} from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams } from 'react-router-dom'


const parameters = [
    {id: 1, attribute:'tipo', label:'Tipo', type: 'text'},
    {id: 2, attribute:'classe', label:'Classes', type: 'text' },
    {id: 3, attribute:'classificacao', label:'Classificação', type: 'text' },
  ]

const FormCategorias = ({edit}) => {

    const {id} = useParams();
    const [url] = useState(edit ?  "http://localhost:3000/categorias/"+id  :  "http://localhost:3000/categorias/")
    const urlBack = '/categorias/'

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