import {React} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import DetailContainer from '../../../components/detailContainer/DetailContainer'


const parameters = [
  {id: 1, label: 'Nome', value: 'nome'},
  {id: 2, label: 'CPF', value: 'cpf'},
  {id: 3, label: 'Data nascimento', value: 'dt_nascimento'},
  {id: 4, label: 'CEP', value: 'cep'},
  {id: 5, label: 'UF', value: 'uf'},
  {id: 6, label: 'Cidade', value: 'cidade'},
  {id: 7, label: 'Bairro', value: 'bairro'},
  {id: 8, label: 'Logradouro', value: 'logradouro'},
  {id: 9, label: 'Número', value: 'numero'},
  {id: 10, label: 'Complemetno', value: 'complemento'},
  {id: 11, label: 'Telefone 1', value: 'telefone_um'},
  {id: 12, label: 'Telefone 2', value: 'telefone_dois'},
  {id: 13, label: 'E-mail', value: 'email'},
  {id: 14, label: 'Data admissão', value: 'dt_admissao'},
  {id: 15, label: 'Função', value: 'funcao'}
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