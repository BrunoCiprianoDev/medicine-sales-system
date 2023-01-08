import React from 'react'

import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_devolucoes';

import ListContainer from '../../../components/listContainer/ListContainer'

const ListDevolucoes = ({ filter }) => {

    const url = `${urlServer}/devolucoes/`;

    return (
        <ListContainer
            title={'Devoluções'}
            url={url}
            parameters={parameters}
            handleEditUrl={`/devolucoes/detail/`}
            filter={filter}
            editable='true'
        />
    )
}

export default ListDevolucoes