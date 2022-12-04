import {React} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import DetailContainer from '../../../components/detailContainer/DetailContainer'


const parameters = [
  {id: 1, name: 'Nome', value: 'nome'},
  {id: 2, name: 'CPF', value: 'cpf'},
  {id: 3, name: 'Data nascimento', value: 'dt_nascimento'},
  {id: 4, name: 'CEP', value: 'cep'},
  {id: 5, name: 'UF', value: 'uf'},
  {id: 6, name: 'Cidade', value: 'cidade'},
  {id: 7, name: 'Bairro', value: 'bairro'},
  {id: 8, name: 'Logradouro', value: 'logradouro'},
  {id: 9, name: 'Número', value: 'numero'},
  {id: 10, name: 'Complemetno', value: 'complemento'},
  {id: 11, name: 'Telefone 1', value: 'telefone_um'},
  {id: 12, name: 'Telefone 2', value: 'telefone_dois'},
  {id: 13, name: 'E-mail', value: 'email'},
  {id: 14, name: 'Data admissão', value: 'dt_admissao'},
  {id: 15, name: 'Função', value: 'funcao'}
]

const DetailFuncionarios = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/funcionarios/"+id;
    const {data, loading, error} = useFetch(url);
    const navigate = useNavigate();

    const handleEdit = (id) => {
      navigate('/funcionarios/edit/'+id);
    }

    const handleBack = () => {
      navigate('/funcionarios/');
    }

  return (
    <DetailContainer
      loading={loading}
      error={error}
      parameters={parameters}
      data={data}
      handleEdit={handleEdit}
      handleBack={handleBack}
      id={id}         
    />
  )
}

export default DetailFuncionarios