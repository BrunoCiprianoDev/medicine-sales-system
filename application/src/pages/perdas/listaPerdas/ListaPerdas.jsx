import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ComponenteLista from '../../../components/componenteLista/ComponenteLista'
import { urlServer } from '../../../serverConfig'
import { parametrosPerdas } from '../parametros/pr_perdas'

const ListaPerdas = () => {

  let [searchParams] = useSearchParams();

  return (
   <ComponenteLista
    titulo={'Registro de perdas'}
    urlFetch={`${urlServer}/perdas/`}
    parametros={parametrosPerdas}
    urlDetalhe={`/perdas/`}
    filtro={`?${searchParams}`}
    opcaoEditar={true}
   />
  )
}

export default ListaPerdas