import React from 'react';

import { parametrosClientes } from '../parametros/pr_clientes';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';
import { useSearchParams } from 'react-router-dom';

const ListClientes = () => {

  return (
    <ComponenteLista
      titulo={'Clientes'}
      urlFetch={`${urlServer}/clients/search`}
      parametros={parametrosClientes}
      sessao={"clientes"}
      opcaoEditar={true}
    />
  )
}

export default ListClientes
