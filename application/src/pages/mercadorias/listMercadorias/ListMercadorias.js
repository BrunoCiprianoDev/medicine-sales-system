import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';
import ListContainer from '../../../components/listContainer/ListContainer';
import styles from './ListMercadorias.module.css';

const url = "http://localhost:3000/produtos/";

const parameters = [
  {id: 1, value: "Nome", attribute:'nome'},
  {id: 2, value: "Código", attribute:'codigo'},
  {id: 3, value: "Estoque", attribute:'estoque_atual'},
  {id: 4, value: "Estoque minmo", attribute:'estoque_minimo'},
  {id: 5, value: "Estoque maximo", attribute:'estoque_maximo'},
  {id: 6, value: "Valor ", attribute:'valor_venda'}
]

const ListMercadorias = () => {

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const {data, httpConfig, loading, error} = useFetch(url+"?"+searchParams)

  const handleEdit = (id) => {
    navigate('/mercadorias/detail/'+id+'/search?'+searchParams)
  }
  
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }


  return (
    <div className={styles.MainContainer}>
      <h2>{searchParams.toString().substring(2)}</h2>
      <ListContainer
        loading={loading}
        error={error}
        parameters={parameters}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
        data={data}     
      />
  </div>
  )
}

export default ListMercadorias