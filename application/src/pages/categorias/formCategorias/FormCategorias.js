import {React, useState} from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams } from 'react-router-dom'
import { parameters } from '../parameters/pr_categoria';
import { urlServer } from '../../../serverConfig';

const FormCategorias = ({edit}) => {

    const {id} = useParams();
    const [url] = useState(edit ?  urlServer+"/categorias/"+id  :  urlServer+"/categorias/")
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