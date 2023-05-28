import React from 'react'
import ComponenteDetalhe from '../../../components/componenteDetalhe/ComponenteDetalhe'

import { useParams } from 'react-router-dom'
import { urlServer } from '../../../serverConfig'

import { parametrosPerdas } from '../parametros/pr_perdas'

const DetalhePerdas = () => {
 
  const {id} = useParams();
 
  return (
    <ComponenteDetalhe
      parametros={parametrosPerdas}
      idFetch={id}
      urlFetch={`${urlServer}/losses/`}
      urlEditar={'/perdas/form/' + id}
      urlVoltar={'/perdas/search'}
    />
  )
}

export default DetalhePerdas