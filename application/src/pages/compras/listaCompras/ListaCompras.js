import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ComponenteLista from '../../../components/componenteLista/ComponenteLista'
import { urlServer } from '../../../serverConfig'
import { parametrosCompras } from '../parametros/pr_compras'

const ListaCompras = () => {

    let [searchParams] = useSearchParams();

    return (
        <ComponenteLista
            titulo={'Compras'}
            urlFetch={`${urlServer}/compras/`}
            parametros={parametrosCompras}
            urlDetalhe={'/compras/detail/'}
            filtro={`?${searchParams}`}
            opcaoEditar={true}
        />
    )
}

export default ListaCompras