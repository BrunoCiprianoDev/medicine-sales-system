import { React } from 'react';

import { parameters } from '../parameters/pr_funcionario';
import { urlServer } from '../../../serverConfig';

import ListContainer from '../../../components/listContainer/ListContainer';

export const ListFuncionarios = ({ filter }) => {

  const url = `${urlServer}/funcionarios/`;
  const useParameters = parameters.slice(0, 1).concat(parameters.slice(9, 14));

  return (
    <ListContainer
      title={'Funcionarios'}
      url={url}
      parameters={useParameters}
      handleEditUrl={`/funcionarios/`}
      filter={filter}
      editable='true'
    />
  )
}
