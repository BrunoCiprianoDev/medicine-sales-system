import React from 'react'
import ListContainer from '../../../components/listContainer/ListContainer';
import {parameters} from '../parameters/pr_clientes'
import { urlServer } from '../../../serverConfig';
const ListClientes = ({filter}) => {
 
  const url = `${urlServer}/clientes/`;

  return (
    <ListContainer
      title={'Clientes'}
      url={url}
      parameters={parameters}
      handleEditUrl={`/clientes/`} 
      filter={filter}
      editable='true'    
    />
  )
}

export default ListClientes
