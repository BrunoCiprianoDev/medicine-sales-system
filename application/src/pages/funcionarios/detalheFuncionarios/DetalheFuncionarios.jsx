import { React } from 'react'
import { useParams } from 'react-router-dom'

import { parametrosFuncionarios } from '../parametros/pr_funcionario'
import { urlServer } from '../../../serverConfig';
import ComponenteDetalhe from '../../../components/componenteDetalhe/ComponenteDetalhe';



const DetalheFuncionarios = () => {

  const { id } = useParams();

  return (
    <ComponenteDetalhe
      parametros={parametrosFuncionarios}
      idFetch={id}
      urlFetch={`${urlServer}/employees/`}
      urlEditar={'/funcionarios/form/' + id}
      urlVoltar={'/funcionarios/search/'}
    />
  )
}

export default DetalheFuncionarios