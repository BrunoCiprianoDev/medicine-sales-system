import React from 'react'
import { useState } from 'react'

import styles from './SortPanel.module.css'

const SortPanel = ({ orderByAttribute, parameters }) => {

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(parameters[0].attribute);

  const handleChange = (event) => {
    setOrder(event.target.value);
  }

  const handleOrderBy = (event) => {
    setOrderBy(event.target.value);
  }

  const setFilter = () => {
    orderByAttribute(orderBy, order)
  }

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
              value={parameter.attribute}>
              {parameter.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SortPanel