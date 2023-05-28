import React from 'react'
import ComponenteLista from '../../../components/componenteLista/ComponenteLista'
import { urlServer } from '../../../serverConfig'
import { parametrosPerdas } from '../parametros/pr_perdas'

const ListaPerdas = () => {

  return (
    <ComponenteLista
      titulo={'Perdas'}
      urlFetch={`${urlServer}/losses/search`}
      parametros={parametrosPerdas}
      sessao={"perdas"}
      opcaoEditar={true}
    />
  )
}

export default ListaPerdas