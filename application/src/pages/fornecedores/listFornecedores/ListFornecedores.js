import React from 'react'
import ListContainer from '../../../components/listContainer/ListContainer';
import { parameters } from '../parameters/pr_fornecedor';
import { urlServer } from '../../../serverConfig';
const ListFornecedores = ({filter}) => {

  const url = urlServer+"/fornecedores/";
  const useParameters = parameters.slice(0, 2).concat(parameters.slice(10,12));

  return (
    <ListContainer
      url={url}
      parameters={useParameters}
      handleEditUrl={'/fornecedores/'} 
      filter={filter}
      editable='true'  
    />
  )
}

export default ListFornecedores