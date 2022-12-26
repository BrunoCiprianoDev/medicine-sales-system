import React from 'react'
import ListContainer from '../../../components/listContainer/ListContainer';
import { parameters } from '../parameters/pr_fornecedor';

const ListFornecedores = ({filter}) => {

  const url = "http://localhost:5000/fornecedores/";
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