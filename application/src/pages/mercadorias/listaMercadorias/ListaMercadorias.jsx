import React from 'react'
import { useSearchParams } from 'react-router-dom';

import { parametrosMercadorias } from '../parametros/pr_mercadorias';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

const ListaMercadorias = () => {

   return (
      <ComponenteLista
         titulo={'Mercadorias'}
         urlFetch={`${urlServer}/merchandises/search`}
         parametros={parametrosMercadorias.slice(0, 3).concat(parametrosMercadorias.slice(13, 15))}
         sessao={'mercadorias'}
         opcaoEditar={true}
      />
   )
}

export default ListaMercadorias