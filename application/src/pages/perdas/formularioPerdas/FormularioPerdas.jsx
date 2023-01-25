import React from 'react'

import { useParams } from 'react-router-dom'
import ComponenteFormulario from '../../../components/componenteFormulario/ComponenteFormulario';
import { urlServer } from '../../../serverConfig';

import { parametrosPerdas } from '../parametros/pr_perdas'

const FormularioPerdas = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosPerdas}
      idFetch={`${id}`}
      urlFetch={`${urlServer}/perdas/`}
      urlVoltar={'/perdas/search/'}
    />
  )
}

export default FormularioPerdas