import React from 'react'
import { useState } from 'react';
import { urlServer } from '../../serverConfig';
import InputAutoComplete from '../inputAutoComplete/InputAutoComplete';

import styles from './FormularioItensCompra.module.css'

const FormularioItensCompra = ({setLista, setFormComprasVisible }) => {

  const [lote, setLote] = useState('');
  const [validade, setValidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [custoUnidade, setCustoUnidade] = useState('');
  const [mercadoria, setMercadoria] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  setLista(lista => [...lista, {
    id: parseInt(Math.random() * 100),
    validade: validade,
    unidade: unidade,
    custoUnidade: custoUnidade,
    mercadoria: mercadoria
  }])
  setFormComprasVisible(false)
}

  return (
    <div className={styles.ContainerFormularioCompras}>
      <h2>Item compra</h2>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label className={styles.LabelLocal}>Lote
          <input type="text" onChange={(e) => { setLote(e.target.value) }} value={lote} />
        </label>
        <label className={styles.LabelLocal}>Validade
          <input type="text" onChange={(e) => { setValidade(e.target.value) }} value={validade} />
        </label>
        <label className={styles.LabelLocal}>Unidades
          <input type="text" onChange={(e) => { setUnidade(e.target.value) }} value={unidade} />
        </label>
        <label className={styles.LabelLocal}>Custo por unidade
          <input type="text" onChange={(e) => { setCustoUnidade(e.target.value) }} value={custoUnidade} />
        </label>
        <label className={styles.LabelLocal}>Mercadoria
          <InputAutoComplete
            attribute={'nome'}
            attributeVisible={'nome'}
            url={`${urlServer}/merchandises/`}
            setValue={setMercadoria}
          />
        </label>
          <input type="submit" />
      </form>
      <button onClick={()=>{setFormComprasVisible(false)}}>Cancelar</button>

    </div>
  )
}

export default FormularioItensCompra