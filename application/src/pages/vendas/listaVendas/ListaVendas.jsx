import { React } from 'react';

import { parametrosVenda } from '../parametros/pr_vendas';
import { urlServer } from '../../../serverConfig';

import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

export const ListaVendas = () => {

  return (
    <ComponenteLista
      titulo={'Vendas'}
      urlFetch={`${urlServer}/sales`}
      parametros={parametrosVenda}
      urlDetalhe={`/vendas/detail/`}
      sessao={'vendas'}
      opcaoEditar={true}
    />
  )
}

export default ListaVendas;