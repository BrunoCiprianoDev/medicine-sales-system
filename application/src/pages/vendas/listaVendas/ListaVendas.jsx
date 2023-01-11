import { React } from 'react';
import { useSearchParams } from 'react-router-dom';

import { parametrosVenda } from '../parametros/pr_vendas';
import { urlServer } from '../../../serverConfig';

import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

export const ListaVendas = () => {

  const url = `${urlServer}/vendas/`;

  let [searchParams] = useSearchParams();

  return (
    <ComponenteLista
      titulo={'Vendas'}
      urlFetch={url}
      parametros={parametrosVenda}
      urlDetalhe={`/vendas/detail/`}
      filtro={`?${searchParams}`}
      opcaoEditar={true}
    />
  )
}

export default ListaVendas;