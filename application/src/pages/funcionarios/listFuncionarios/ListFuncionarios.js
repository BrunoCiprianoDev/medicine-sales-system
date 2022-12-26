import {React} from 'react'
import ListContainer from '../../../components/listContainer/ListContainer';
import { parameters } from '../parameters/pr_funcionario';

export const ListFuncionarios = ({filter}) => {
  
  const url = "http://localhost:5000/funcionarios/";
  const useParameters = parameters.slice(0, 1).concat(parameters.slice(9, 14));
  
  return (
    <ListContainer
      url={url}
      parameters={useParameters}
      handleEditUrl={'/funcionarios/'} 
      filter={filter}
      editable='true'  
    />
  )
}
