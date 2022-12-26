import {React} from 'react'
import { useParams } from 'react-router-dom'
import DetailContainer from '../../../components/detailContainer/DetailContainer'
import { parameters } from '../parameters/pr_funcionario'
import { urlServer } from '../../../serverConfig';
const DetailFuncionarios = () => {

    const useParameters = parameters.slice(0,14)
    const {id} = useParams();
    const url = urlServer+"/funcionarios/"+id;
    const urlHandleEdit = '/funcionarios/edit/'+id;
    const urlHandleBack = '/funcionarios/'

  return (
     <DetailContainer
      parameters={useParameters}
      url={url}
      urlHandleEdit={urlHandleEdit}
      urlHandleBack={urlHandleBack}
    />
  )
}

export default DetailFuncionarios