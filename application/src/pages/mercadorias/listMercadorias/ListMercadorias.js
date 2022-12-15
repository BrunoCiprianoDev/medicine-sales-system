import React from 'react'
import {useSearchParams } from 'react-router-dom';
import ListContainer from '../../../components/listContainer/ListContainer';
import styles from './ListMercadorias.module.css';
import { parameters } from '../parameters/pr_mercadorias';

const ListMercadorias = ({filter}) => {

  let [searchParams] = useSearchParams();
  const url = "http://localhost:3000/mercadorias/?"+searchParams;
  const useParameters = parameters.slice(0,2).concat(parameters.slice(5,8));

  return (
    <div className={styles.MainContainer}>
      <h2>{searchParams.toString().substring(2)}</h2>
      <ListContainer
        url={url}
        parameters={useParameters}
        handleEditUrl={'/mercadorias/detail/'} 
        filter={filter}
        editable='true'    
      />
  </div>
  )
}

export default ListMercadorias