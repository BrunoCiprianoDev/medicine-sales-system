import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import DetailContainer from '../../../components/detailContainer/DetailContainer'

const parameters = [
    {id: 1, label: 'Tipo', attribute: 'tipo'},
    {id: 2, label: 'Classe', attribute: 'classe'},
    {id: 3, label: 'Classificação', attribute: 'classificacao'},
  ]

const DetailCategorias = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/categorias/"+id;
    const {data, loading, error} = useFetch(url);
    const navigate = useNavigate();

    const handleEdit = (id) => {
      navigate('/categorias/edit/'+id);
    }

    const handleBack = () => {
      navigate('/categorias/');
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

export default DetailCategorias