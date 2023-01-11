import React from 'react'
import { useSearchParams } from 'react-router-dom';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

import { urlServer } from '../../../serverConfig';
import { parametrosDevolucoes } from '../parametros/pr_devolucoes';

const ListDevolucoes = () => {

  let [searchParams] = useSearchParams();

  return (
    <ComponenteLista
      titulo={'Devoluções'}
      urlFetch={`${urlServer}/devolucoes/`}
      parametros={parametrosDevolucoes}
      urlDetalhe={`/devolucoes/detail/`}
      filtro={`?${searchParams}`}
      opcaoEditar={true}
    />
  )
}

export default ListDevolucoes