import React from 'react'
import ListContainer from '../../../components/listContainer/ListContainer';
import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_categoria';

const ListCategorias = ({filter}) => {

  const url = urlServer+"/categorias/";

  return (
    <ListContainer
    url={url}
    parameters={parameters}
    handleEditUrl={'/categorias/'} 
    filter={filter}
    editable='true'  
  />
  )
}

export default ListCategorias