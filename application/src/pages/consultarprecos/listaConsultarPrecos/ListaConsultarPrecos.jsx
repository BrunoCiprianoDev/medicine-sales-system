import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './ListaConsultarPrecos.module.css';

import { parametrosMercadorias } from '../../mercadorias/parametros/pr_mercadorias';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

const ListaConsultarPrecos = () => {

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const parametrosSelecionados = parametrosMercadorias.slice(0, 3).concat(parametrosMercadorias.slice(13, 15));

  return (
    <div className={styles.MainContainer}>
      <button
        className={styles.ButtonNavigate}
        onClick={() => navigate(`/consultas/`)}>
        {'<< Nova Consulta'}
      </button>
      <ComponenteLista
        titulo={'Resultados da pesquisa'}
        urlFetch={`${urlServer}/mercadorias/`}
        parametros={parametrosSelecionados}
        urlDetalhe={`/mercadorias/detail/`}
        filtro={`?${searchParams}`}
        opcaoEditar={false}
      />
    </div>
  )
}

export default ListaConsultarPrecos