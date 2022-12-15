import React from 'react'
import ListContainer from '../../../components/listContainer/ListContainer';
import { parameters } from '../parameters/pr_categoria';

const ListCategorias = ({filter}) => {

  const url = "http://localhost:3000/categorias/";

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