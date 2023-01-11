import React from 'react'

import { parametrosFornecedores } from '../parametros/pr_fornecedor';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';
import { useSearchParams } from 'react-router-dom';


export const ListaFornecedores = () => {

  const url = `${urlServer}/fornecedores/`;

  const parametrosSelecionados = parametrosFornecedores.slice(0, 2).concat(parametrosFornecedores.slice(10, 12));

  let [searchParams] = useSearchParams();

  return (
    <ComponenteLista
      titulo={'Fornecedores'}
      urlFetch={url}
      parametros={parametrosSelecionados}
      urlDetalhe={`/fornecedores/`}
      filtro={`?${searchParams}`}
      opcaoEditar={true}
    />
  )
}

export default ListaFornecedores
