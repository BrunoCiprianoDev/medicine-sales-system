import { React } from 'react'
import { useParams } from 'react-router-dom'

import { parametrosFuncionarios } from '../parametros/pr_funcionario'
import { urlServer } from '../../../serverConfig';

import ComponenteFormulario from '../../../components/componenteFormulario/ComponenteFormulario';

const FormularioFuncionarios = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosFuncionarios}
      idFetch={`${id}`}
      urlFetch={`${urlServer}/funcionarios/`}
      urlVoltar={'/funcionarios/search/'}
    />
  )
}

export default FormularioFuncionarios