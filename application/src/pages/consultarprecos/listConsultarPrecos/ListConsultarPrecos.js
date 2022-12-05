import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';
import ListContainer from '../../../components/listContainer/ListContainer';
import styles from './ListConsultarPrecos.module.css'

const url = "http://localhost:3000/mercadorias/";


const parameters = [
    {id: 1, label: "Nome", attribute:'nome'},
    {id: 2, label: "Código", attribute:'codigo'},
    {id: 3, label: "Estoque", attribute:'estoque_atual'},
    {id: 6, label: "Valor ", attribute:'valor_venda'}
  ]


const ListConsultarPrecos = () => {

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const {data, loading, error} = useFetch(url+"?"+searchParams)
    
  return (
    <div className={styles.MainContainer}>
        <button className={styles.ButtonNavigate} onClick={()=>navigate('/consultas/')}>Nova Consulta</button>
        <ListContainer
        loading={loading}
        error={error}
        parameters={parameters}
        data={data}     
        />
    </div>
  )
}

export default ListConsultarPrecos