import React from 'react'
import styles from './ListEstoque.module.css'
import Loading from '../../../components/loading/Loading'
import PaginationComponent from '../../../components/paginationComponent/PaginationComponent'
import { useState } from 'react'
import {useSearchParams } from 'react-router-dom';
import { urlServer } from '../../../serverConfig'
import { useFetch } from '../../../hooks/useFetch'
import CircleBar from '../../../components/circleBar/CircleBar'


const ListEstoque = ({filter}) => {

const url = urlServer+"/mercadorias/";

const parameters = [
        {id: 1, attribute:'nome', label:'Nome'},
        {id: 2, attribute:'codigo', label:'Código'},
        {id: 3, attribute:'estoque_minimo', label:'Estoque minimo'},
        {id: 4, attribute:'estoque_maximo', label:'Estoque máximo'},
        {id: 5, attribute:'estoque_atual', label: 'Estoque atual'}
]

let [searchParams] = useSearchParams();
const {data, loading, error} = useFetch(
filter ? url+"?"+searchParams : url)

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(8);
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
            <div className={styles.ElementData}></div>
        </div>
          {error && <p>Falha ao carregar dados....</p>}
          {loading && <Loading/>}
          {currentItens && currentItens.map((item)=>(
            <div className={styles.ListComponent} key={item.id}>
              {parameters.map((parameter)=>(
                <div key={parameter.id} className={styles.ElementData}>
                  {item[parameter.attribute]}
                </div>
              ))}
            <div className={styles.ElementData}>
                <CircleBar  
                    percentage={(item.estoque_atual/item.estoque_maximo)*100} 
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

