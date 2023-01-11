import React from 'react'
import {useParams } from 'react-router-dom'
import ComponenteDetalhe from '../../../components/componenteDetalhe/ComponenteDetalhe'

import { urlServer } from '../../../serverConfig'
import { parametrosMercadorias } from '../parametros/pr_mercadorias'

const DetalheMercadorias = () => {

  const {id} = useParams();

  return (
    <ComponenteDetalhe
      parametros={parametrosMercadorias}
      idFetch= {id}
      urlFetch={`${urlServer}/mercadorias/`}
      urlEditar={'/mercadorias/form/'+id}
      urlVoltar={'/mercadorias/search/'}
    />
  )
}

export default DetalheMercadorias