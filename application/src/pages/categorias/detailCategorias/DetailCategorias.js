import React from 'react'
import { useParams } from 'react-router-dom'
import DetailContainer from '../../../components/detailContainer/DetailContainer'

const parameters = [
    {id: 1, label: 'Tipo', attribute: 'tipo'},
    {id: 2, label: 'Classe', attribute: 'classe'},
    {id: 3, label: 'Classificação', attribute: 'classificacao'},
  ]

const DetailCategorias = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/categorias/"+id;
    const urlHandleEdit = '/categorias/edit/'+id;
    const urlHandleBack = '/categorias/'

  return (
    <DetailContainer
      parameters={parameters}
      url={url}
      urlHandleEdit={urlHandleEdit}
      urlHandleBack={urlHandleBack}
    />
  )
}

export default DetailCategorias