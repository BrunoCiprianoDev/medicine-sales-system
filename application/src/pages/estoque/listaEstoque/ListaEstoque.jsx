import React from 'react'

import { parametrosEstoque } from '../parametros/pr_estoque'
import ComponenteLista from '../../../components/componenteLista/ComponenteLista'
import { urlServer } from '../../../serverConfig'
const ListaEstoque = () => {

  return (
    <ComponenteLista
      titulo={'Lotes'}
      urlFetch={`${urlServer}/lots/search`}
      parametros={parametrosEstoque}
      sessao={"lots"}
    />
  )
}

export default ListaEstoque