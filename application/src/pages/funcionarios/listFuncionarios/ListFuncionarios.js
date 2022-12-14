import {React} from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';
import ListContainer from '../../../components/listContainer/ListContainer';
import { parameters } from '../parameters/pr_funcionario';
const url = "http://localhost:3000/funcionarios/";

export const ListFuncionarios = ({filter}) => {
  const useParameters = parameters.slice(0, 1).concat(parameters.slice(9, 14));
  
  const navigate = useNavigate();
  
  let [searchParams] = useSearchParams();
  const {data, httpConfig, loading, error} = useFetch(
    filter ? url+"?"+searchParams : url)
  
  const handleEdit = (id) => {
    navigate('/funcionarios/'+id)
  }
  
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <ListContainer
      loading={loading}
      error={error}
      parameters={useParameters}
      handleRemove={handleRemove}
      handleEdit={handleEdit}
      data={data}  
      editable='true'   
    />
  )
}
