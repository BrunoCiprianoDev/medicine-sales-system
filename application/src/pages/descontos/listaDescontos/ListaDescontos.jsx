import React from 'react'
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

import { urlServer } from '../../../serverConfig';
import { parametrosDescontos } from '../parametros/pr_descontos';

const ListDescontos = () => {

  return (
    <ComponenteLista
      titulo={'Descontos'}
      urlFetch={`${urlServer}/discounts/search`}
      parametros={parametrosDescontos}
      sessao={"descontos"}
      opcaoEditar={true}
    />
  )
}

export default ListDescontos