import React from 'react'

import { parameters } from '../parameters/pr_fornecedor';
import { urlServer } from '../../../serverConfig';

import ListContainer from '../../../components/listContainer/ListContainer';

const ListFornecedores = ({ filter }) => {

  const url = `${urlServer}/fornecedores/`;
  const useParameters = parameters.slice(0, 2).concat(parameters.slice(10, 12));

  return (
    <ListContainer
      title={'Fornecedores'}
      url={url}
      parameters={useParameters}
      handleEditUrl={`/fornecedores/`}
      filter={filter}
      editable='true'
    />
  )
}

export default ListFornecedores