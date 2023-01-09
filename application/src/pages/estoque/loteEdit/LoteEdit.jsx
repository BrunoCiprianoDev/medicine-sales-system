import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch';

import styles from './LoteEdit.module.css'

import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_estoque';

import FormContainer from '../../../components/formContainer/FormContainer';

const LoteEdit = () => {

  const { id } = useParams();
  const [url] = useState(`${urlServer}/lotes/${id}`)
  const urlBack = `/estoque/`

  const { data: loteMercadoria } = useFetch(`${urlServer}/lotes/${id}?_expand=mercadoria`)
  const { data: loteFornecedor } = useFetch(`${urlServer}/lotes/${id}?_expand=fornecedore`)

  return (
    <div>
      <div className={styles.Title}>
        <h1>Editar lote</h1>
      </div>
      <div className={styles.Header}>
        <h3>Mercadoria: {loteMercadoria && loteMercadoria.mercadoria.nome}</h3>
        <h3>Fornecedor: {loteFornecedor && loteFornecedor.fornecedore.nome}</h3>
      </div>
      <FormContainer
        parameters={parameters.slice(2, 9)}
        url={url}
        urlBack={urlBack}
        edit={true}
      />
    </div>
  )
}

export default LoteEdit