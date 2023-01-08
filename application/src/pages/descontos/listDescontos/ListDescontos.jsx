import React from 'react'

import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_descontos';

import ListContainer from '../../../components/listContainer/ListContainer';

const ListDescontos = ({ filter }) => {

  const url = `${urlServer}/grupoDescontos/`;

  return (
    <ListContainer
      title={'Listas de descontos'}
      url={url}
      parameters={parameters}
      handleEditUrl={`/descontos/detail/`}
      filter={filter}
      editable='true'
    />
  )
}

export default ListDescontos