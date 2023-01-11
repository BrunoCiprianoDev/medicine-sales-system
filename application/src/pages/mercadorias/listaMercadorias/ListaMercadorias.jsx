import React from 'react'
import { useSearchParams } from 'react-router-dom';

import { parametrosMercadorias } from '../parametros/pr_mercadorias';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

const ListaMercadorias = () => {

  let [searchParams] = useSearchParams();
  
  const parametrosSelecionados = parametrosMercadorias.slice(0, 3).concat(parametrosMercadorias.slice(13,15));

  return (
      <ComponenteLista
        titulo={searchParams.toString().split('=')[1]}
        urlFetch={ `${urlServer}/mercadorias/`}
        parametros={parametrosSelecionados}
        urlDetalhe={`/mercadorias/detail/`}
        filtro={`?${searchParams}`}
        opcaoEditar={true}
      />
  )
}

export default ListaMercadorias