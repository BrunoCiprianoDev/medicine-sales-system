import React from 'react';

import { parametrosClientes } from '../parametros/pr_clientes';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';
import { useSearchParams } from 'react-router-dom';

const ListClientes = () => {

  let [searchParams] = useSearchParams();

  return (
    <ComponenteLista
      titulo={'Clientes'}
      urlFetch={`${urlServer}/clientes/`}
      parametros={parametrosClientes}
      urlDetalhe={`/clientes/`}
      filtro={`?${searchParams}`}
      opcaoEditar={true}
    />
  )
}

export default ListClientes
