import React from 'react'
import ListContainer from '../../../components/listContainer/ListContainer';
import {parameters} from '../parameters/pr_clientes'

const ListClientes = ({filter}) => {
 
  const url = "http://localhost:3000/clientes/";

  return (
    <ListContainer
      url={url}
      parameters={parameters}
      handleEditUrl={'/clientes/'} 
      filter={filter}
      editable='true'    
    />
  )
}

export default ListClientes
