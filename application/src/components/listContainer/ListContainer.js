import React from 'react'
import styles from './ListContainer.module.css'
import ButtonsList from '../buttonLists/ButtonsList'
import Loading from '../loading/Loading'
import PaginationComponent from '../paginationComponent/PaginationComponent'
import { useState } from 'react'


const ListContainer = ({
    loading,
    error,
    parameters,
    handleRemove,
    handleEdit,
    data,
    editable,
}) => {
  
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
            {editable && <ButtonsList 
              handleRemove={handleRemove} 
              handleEdit={handleEdit} 
              id={item.id}/>}
          </div>
          ))}
          <div className={styles.PaginationArea}>
            <PaginationComponent 
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
              setItemPerPage={setItemPerPage} 
              itensPerPage={itensPerPage}
              pages={pages}/>
          </div>
      </div>
  )
}

export default ListContainer