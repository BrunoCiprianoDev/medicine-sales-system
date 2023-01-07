import React from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_estoque';
import { useParams} from 'react-router-dom'

const FormEstoque = ({edit}) => {
    const {id} = useParams();
    const url= (edit ?  urlServer+"/lotes/"+id  :  urlServer+"/lotes/");
    const urlBack= '/estoque/';
  
      return (
        <FormContainer 
          parameters={parameters}
          url={url}
          urlBack={urlBack}
          edit={edit}
        />
      )
}

export default FormEstoque