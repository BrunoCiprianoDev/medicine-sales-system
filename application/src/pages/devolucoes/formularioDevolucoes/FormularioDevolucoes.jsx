import React from 'react';
import { useParams } from 'react-router-dom';

import { urlServer } from '../../../serverConfig';
import { parametrosDevolucoes } from '../parametros/pr_devolucoes';

import ComponenteFormulario from '../../../components/componenteFormulario/ComponenteFormulario';

const Devolucoes = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosDevolucoes}
      idFetch={`${id}`}
      urlFetch={`${urlServer}/returns/`}
      urlVoltar={'/devolucoes/search/'}
    />
  )
}

export default Devolucoes