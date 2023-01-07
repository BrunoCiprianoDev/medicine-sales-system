import React from 'react'
import { urlServer } from '../../../serverConfig';
import {useNavigate, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../../components/paginationComponent/PaginationComponent';
import styles from './ListEstoque.module.css'
import AlertError from '../../../components/alertContainer/alertError/AlertError';
import iconeDetalhe from '../../../assets/icon-detalhe.png'
import Loading from '../../../components/loading/Loading';
import { useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import GraphicCurrentItens from '../../../components/graphicCurrentItens/GraphicCurrentItens';

const ListEstoque = ({filter}) => {

    const parameters = [
        {id: 1, attribute:'nome', label:'Nome', type: 'text'},
        {id: 2, attribute:'codigo', label:'Código', type: 'text' },
        {id: 4, attribute:'estoque_minimo', label:'Estoque minimo', type: 'number' },
        {id: 5, attribute:'estoque_maximo', label:'Estoque máximo', type: 'number' }
      ]

  const urlMercadorias = urlServer+"/mercadorias/";

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const {data, loading, error} = useFetch(
    filter ? urlMercadorias+"?"+searchParams : urlMercadorias)

  const handleEdit = (id) => {
    navigate('/estoque/'+id)
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
      <div className={styles.Title}>
        <h2>Mercadorias / Estoque </h2>
      </div>
      {loading && <Loading/>}
      {error && <AlertError>Falha no carregamento!</AlertError>}
      <table>
        <thead>
        <tr className={styles.HeaderList}>
          {parameters.map((parameter)=>(
            <th key={parameter.id} className={styles.ElementData}>{parameter.label}</th>
          ))}
          <th className={styles.ElementData}>Percentual</th>
          <th className={styles.ElementData}></th>
        </tr>
        </thead>
        <tbody>
          {currentItens && currentItens.map((item)=>(
            <tr className={styles.ListComponent} key={item.id}>
              {parameters.map((parameter)=>(
                <td 
                  key={parameter.id} 
                  className={styles.ElementData}>
                  {item[parameter.attribute]}
                </td>
              ))}
              <GraphicCurrentItens mercadoria={item}/>
              <td className={styles.ElementData}>
                <button className={styles.buttonDetalhe} onClick={()=>handleEdit(item.id)}>
                  <img src={iconeDetalhe} alt=''/>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
      </table>
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