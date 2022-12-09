import {React, useState} from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import {useParams } from 'react-router-dom'
import {parameters} from '../parameters/FuncionariosPR.js'


const FormFuncionarios = ({edit}) => {

const {id} = useParams();
const [url] = useState(edit ?  "http://localhost:3000/funcionarios/"+id  :  "http://localhost:3000/funcionarios/")
const urlBack = '/funcionarios/'


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