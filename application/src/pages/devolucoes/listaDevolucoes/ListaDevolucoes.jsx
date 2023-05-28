import React from 'react'
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

import { urlServer } from '../../../serverConfig';
import { parametrosDevolucoes } from '../parametros/pr_devolucoes';

const ListDevolucoes = () => {

  return (
     <ComponenteLista
      titulo={'Retorno'}
      urlFetch={`${urlServer}/returns`}
      parametros={parametrosDevolucoes}
      sessao={"devolucoes"}
      opcaoEditar={true}
    />
  )
}

export default ListDevolucoes