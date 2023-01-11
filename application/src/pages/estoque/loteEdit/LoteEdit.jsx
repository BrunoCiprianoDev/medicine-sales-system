import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch';

import styles from './LoteEdit.module.css'

import { urlServer } from '../../../serverConfig';
import { parametrosEstoque } from '../parametros/pr_estoque';
import ComponenteFormulario from '../../../components/componenteFormulario/ComponenteFormulario';

const LoteEdit = () => {

  const { id } = useParams();

  const { data: loteMercadoria } = useFetch(`${urlServer}/lotes/${id}`, `?_expand=mercadoria`)
  const { data: loteFornecedor } = useFetch(`${urlServer}/lotes/${id}`, `?_expand=fornecedore`)

  return (
    <div>
      <div className={styles.Title}>
        <h1>Editar lote</h1>
      </div>
      <div className={styles.Header}>
        <h3>Mercadoria: {loteMercadoria && loteMercadoria.mercadoria.nome}</h3>
        <h3>Fornecedor: {loteFornecedor && loteFornecedor.fornecedore.nome}</h3>
      </div>
      <ComponenteFormulario
        parametros={parametrosEstoque.slice(2, 9)}
        idFetch={id}
        urlFetch={`${urlServer}/lotes/`}
        urlVoltar={'/estoque/search/'}
        edit={true}
      />
    </div>
  )
}

export default LoteEdit