import React from 'react'
import ComponenteLista from '../../../components/componenteLista/ComponenteLista'
import { urlServer } from '../../../serverConfig'
import { parametrosCompras } from '../parametros/pr_compras'

const ListaCompras = () => {

    return (
        <ComponenteLista
            titulo={'Compras'}
            urlFetch={`${urlServer}/purchases/search`}
            parametros={parametrosCompras}
            sessao={"compras"}
            opcaoEditar={true}
        />
    )
}

export default ListaCompras