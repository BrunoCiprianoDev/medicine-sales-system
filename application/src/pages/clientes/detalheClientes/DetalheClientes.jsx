import React from 'react'
import { useParams } from 'react-router-dom'
import ComponenteDetalhe from '../../../components/componenteDetalhe/ComponenteDetalhe'
import { urlServer } from '../../../serverConfig'
import { parametrosClientes } from '../parametros/pr_clientes'

const DetalheClientes = () => {

  const { id } = useParams();

  return (
    <ComponenteDetalhe
      parametros={parametrosClientes}
      idFetch={id}
      urlFetch={`${urlServer}/clients/`}
      urlEditar={'/clientes/form/' + id}
      urlVoltar={'/clientes/search'}
    />
  )
}

export default DetalheClientes
