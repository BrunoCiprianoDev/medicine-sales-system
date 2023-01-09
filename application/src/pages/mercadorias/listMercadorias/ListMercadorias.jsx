import React from 'react'
import { useSearchParams } from 'react-router-dom';

import styles from './ListMercadorias.module.css';

import { parameters } from '../parameters/pr_mercadorias';
import { urlServer } from '../../../serverConfig';

import ListContainer from '../../../components/listContainer/ListContainer';

const ListMercadorias = ({ filter }) => {

  let [searchParams] = useSearchParams();
  const url = `${urlServer}/mercadorias/?${searchParams}`;
  const useParameters = parameters.slice(0, 3).concat(parameters.slice(13,15));

  return (
    <div className={styles.MainContainer}>
      <ListContainer
        title={searchParams.toString().split('=')[1]}
        url={url}
        parameters={useParameters}
        handleEditUrl={`/mercadorias/detail/`}
        filter={filter}
        orderBy={'nome'}
        editable='true'
      />
    </div>
  )
}

export default ListMercadorias