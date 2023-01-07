import React from 'react'
import ListContainer from '../../../components/listContainer/ListContainer'
import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_devolucoes';

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