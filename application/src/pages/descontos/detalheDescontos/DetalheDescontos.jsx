import React from 'react'
import { useParams } from 'react-router-dom'
import ComponenteDetalhe from '../../../components/componenteDetalhe/ComponenteDetalhe';

import { urlServer } from '../../../serverConfig';
import { parametrosDescontos } from '../parametros/pr_descontos';

const DetalheDescontos = () => {

  const { id } = useParams();

  return (
    <ComponenteDetalhe
      parametros={parametrosDescontos}
      idFetch={id}
      urlFetch={`${urlServer}/discounts/`}
      urlEditar={'/descontos/form/' + id}
      urlVoltar={'/descontos/search/'}
    />
  )
}

export default DetalheDescontos