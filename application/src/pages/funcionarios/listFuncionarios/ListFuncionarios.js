import {React} from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';

import ListContainer from '../../../components/listContainer/ListContainer';

const url = "http://localhost:3000/funcionarios/";

const parameters = [
    {id: 1, value: "Nome", attribute:'nome'},
    {id: 2, value: "CPF", attribute:'cpf'},
    {id: 3, value: "Data nascimento", attribute:'dt_nascimento'},
    {id: 4, value: "Telefone 1", attribute:'telefone_um'},
    {id: 5, value: "Telefone 2", attribute:'telefone_dois'},
    {id: 6, value: "E-mails", attribute:'email'},
    {id: 7, value: "Função", attribute:'funcao'}
]

export const ListFuncionarios = ({filter}) => {

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  console.log(searchParams)
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
      parameters={parameters}
      handleRemove={handleRemove}
      handleEdit={handleEdit}
      data={data}     
      />
  )
}
