import React from 'react'

import styles from './PainelOrdenacao.module.css'
import { usePainelOrdenacao } from './usePainelOrdenacao'

const PainelOrdenacao = ({ orderByAttribute, parameters }) => {

  const {handleChange, handleOrderBy, setFilter, order, orderBy} = usePainelOrdenacao(orderByAttribute, parameters) 

  return (
    <div className={styles.MainContainer}>
      <button onClick={() => setFilter()} className={styles.ButtonFilter}>Ordenar
        </button>
      <div>
        <select name="order" onChange={handleChange} value={order}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <div>
        <select name="attributeOrder" onChange={handleOrderBy} value={orderBy}>
          {parameters && parameters.map((parameter) => (
            <option
              key={parameter.id}
              value={parameter.atributo}>
              {parameter.rotulo}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default PainelOrdenacao