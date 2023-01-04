import React from 'react'
import styles from './ListContainer.module.css'
import ButtonsList from '../buttonLists/ButtonsList'
import Loading from '../loading/Loading'
import PaginationComponent from '../paginationComponent/PaginationComponent'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useNavigate, useSearchParams } from 'react-router-dom';
import AlertError from '../alertContainer/alertError/AlertError'
import { useOptionContext } from '../../hooks/useOptionContext'
import { urlServer } from '../../serverConfig'

const ListContainer = ({
    title,
    url,
    parameters,
    handleEditUrl,
    filter,
    editable,
}) => {

  const [urlDelete, setUrlDelete] = useState('')
  const {option} = useOptionContext();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const {data, loading, error} = useFetch(
    filter ? url+"?"+searchParams : url)

  const {httpConfig} = useFetch(urlDelete)

  const handleEdit = (id) => {
    navigate(handleEditUrl+id)
  }
  
  const handleRemove = (id) => {
    setUrlDelete(urlServer+"/"+option.toLowerCase())
    httpConfig(id, "DELETE");
    window.location.reload();
  }
  
  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(data && data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (data && data.slice(startIndex, endIndex));

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Title}>
        {title && <h2>{title}</h2>}
      </div>
      {loading && <Loading/>}
      {error && <AlertError>Falha no carregamento!</AlertError>}
      <table>
        <thead>
        <tr className={styles.HeaderList}>
          {parameters.map((parameter)=>(
            <th key={parameter.id} className={styles.ElementData}>{parameter.label}</th>
          ))}
          {editable && <th className={styles.ElementData}></th>}
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
                {editable && <ButtonsList 
                  handleRemove={handleRemove} 
                  handleEdit={handleEdit} 
                  id={item.id}/>}
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

export default ListContainer

