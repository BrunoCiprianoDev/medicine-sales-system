import React from 'react'
import styles from './ListEstoque.module.css'
import Loading from '../../../components/loading/Loading'
import PaginationComponent from '../../../components/paginationComponent/PaginationComponent'
import { useState } from 'react'
import {useNavigate, useSearchParams } from 'react-router-dom';
import { urlServer } from '../../../serverConfig'
import { useFetch } from '../../../hooks/useFetch'
import CircleBar from '../../../components/circleBar/CircleBar'


const ListEstoque = ({filter}) => {
const navigate = useNavigate();

const url = urlServer+"/mercadorias/";

const parameters = [
        {id: 1, attribute:'nome', label:'Nome'},
        {id: 2, attribute:'codigo', label:'Código'},
        {id: 3, attribute:'estoque_minimo', label:'Estoque minimo'},
        {id: 4, attribute:'estoque_maximo', label:'Estoque máximo'},
        {id: 5, attribute:'estoque_atual', label: 'Estoque atual'},
        {id: 6, attribute: 'nivel', label: 'Status'}
]

let [searchParams] = useSearchParams();
const {data, loading, error} = useFetch(
filter ? url+"?"+searchParams : url)


const totalUnidades = (lotes) => {
  var unidades = 0;
  lotes && lotes.map((lote)=>(
    unidades+=lote.unidades
  ))
  return unidades;
}

const handleDetail = (id) => {
  navigate('/estoque/detail/'+id)
}

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(data && data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (data && data.slice(startIndex, endIndex));


  return (
    <div className={styles.MainContainer}>
        <div className={styles.HeaderList}>
            {parameters.map((parameter)=>(
                <div key={parameter.id} className={styles.ElementData}>{parameter.label}</div>
            ))}
        </div>
          {error && <p>Falha ao carregar dados....</p>}
          {loading && <Loading/>}
          {currentItens && currentItens.map((item)=>(
            <div className={styles.ListComponent} key={item.id} onClick={()=>handleDetail(item.id)}>
              <div className={styles.ElementData}>{item.nome}</div>
              <div className={styles.ElementData}>{item.codigo}</div>
              <div className={styles.ElementData}>{item.estoque_minimo}</div>
              <div className={styles.ElementData}>{item.estoque_maximo}</div>
              <div className={styles.ElementData}>{totalUnidades(item.lotes)}</div>
            <div className={styles.ElementData}>
                <CircleBar  
                    percentage={(totalUnidades(item.lotes)/item.estoque_maximo)*100} 
                    circleWidth='58' 
                    paramRadius={25} 
                    profile={7} 
                    numberSize={'0.4em'}
                    disableText={true}
                />
            </div>
          </div>
          ))}
          <div className={styles.PaginationArea}>
            <PaginationComponent 
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
              setItemPerPage={setItemPerPage} 
              itensPerPage={itensPerPage}
              pages={pages}
              pagination={'desable'}
              />
          </div>
      </div>
  )
}

export default ListEstoque

