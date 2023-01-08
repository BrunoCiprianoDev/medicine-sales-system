import React from 'react';

import {parameters} from '../parameters/pr_clientes';
import { urlServer } from '../../../serverConfig';

import ListContainer from '../../../components/listContainer/ListContainer';

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
