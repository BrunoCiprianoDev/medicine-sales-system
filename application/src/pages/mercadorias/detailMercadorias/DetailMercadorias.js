import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import DetailContainer from '../../../components/detailContainer/DetailContainer'


const parameters = [
    {id: 1, attribute:'nome', label:'Nome', type: 'text'},
    {id: 2, attribute:'codigo', label:'Código', type: 'text' },
    {id: 4, attribute:'departamento', label:'Departamento', type: 'text' },
    {id: 5, attribute:'categoria_id', label:'Categoria', type: 'text' },
    {id: 6, attribute:'estoque_minimo', label:'Estoque minimo', type: 'text' },
    {id: 7, attribute:'estoque_maximo', label:'Estoque máximo', type: 'text' },
    {id: 8, attribute:'estoque_atual', label:'Estoque atual', type: 'text' },
    {id: 9, attribute:'valor_venda', label:'Valor de venda', type: 'number' },
    {id: 10, attribute:'temp_armazenamento', label:'Temperatura armazenamento', type: 'text' },
    {id: 11, attribute:'descricao', label:'Descricao', type: 'textarea' },
  ]

const DetailMercadorias = () => {

    let [searchParams] = useSearchParams();
    const {id} = useParams();
    const url = "http://localhost:3000/mercadorias/"+id;
    const {data, loading, error} = useFetch(url);
    const navigate = useNavigate();

    const handleEdit = (id) => {
      navigate('/mercadorias/edit/'+id+'/search?'+searchParams);
    }

    const handleBack = () => {
      navigate('/mercadorias/');
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

export default DetailMercadorias