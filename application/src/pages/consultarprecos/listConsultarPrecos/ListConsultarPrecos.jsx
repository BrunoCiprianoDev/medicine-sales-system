import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './ListConsultarPrecos.module.css';

import { parameters } from '../../mercadorias/parameters/pr_mercadorias';
import { urlServer } from '../../../serverConfig';

import ListContainer from '../../../components/listContainer/ListContainer';

const ListConsultarPrecos = ({ filter }) => {

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const useParameters = parameters.slice(0, 2).concat(parameters.slice(5, 8));
  const url = urlServer + `/mercadorias/?${searchParams}`;

  return (
    <div className={styles.MainContainer}>
      <button
        className={styles.ButtonNavigate}
        onClick={() => navigate(`/consultas/`)}>
        {'<< Nova Consulta'}
      </button>
      <ListContainer
        url={url}
        parameters={useParameters}
        handleEditUrl={`/mercadorias/detail/`}
        filter={filter}
        editable={false}
      />
    </div>
  )
}

export default ListConsultarPrecos