import React from 'react'
import { useSearchParams } from 'react-router-dom';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

import { urlServer } from '../../../serverConfig';
import { parametrosDescontos } from '../parametros/pr_descontos';

const ListDescontos = () => {

  const url = `${urlServer}/grupoDescontos/`;

  let [searchParams] = useSearchParams();

  return (
    <ComponenteLista
      titulo={'Listas de descontos'}
      urlFetch={url}
      parametros={parametrosDescontos}
      urlDetalhe={`/descontos/detail/`}
      filtro={`?${searchParams}`}
      opcaoEditar={true}
    />
  )
}

export default ListDescontos