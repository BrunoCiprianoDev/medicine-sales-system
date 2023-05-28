import React from 'react';
import { useParams } from 'react-router-dom';
import ComponenteDetalhe from '../../../components/componenteDetalhe/ComponenteDetalhe';

import { urlServer } from '../../../serverConfig';
import { parametrosDevolucoes } from '../parametros/pr_devolucoes';

const DetalheDevolucoes = () => {

  const useParameters = parametrosDevolucoes.slice(0, 14)

  const { id } = useParams();

  return (
    <ComponenteDetalhe
      parametros={useParameters}
      idFetch={id}
      urlFetch={`${urlServer}/returns/`}
      urlEditar={'/devolucoes/form/' + id}
      urlVoltar={'/devolucoes/search'}
    />
  )
}

export default DetalheDevolucoes