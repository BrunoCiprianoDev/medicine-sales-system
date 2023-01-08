import React from 'react'

import styles from './PaginationComponent.module.css'

const PaginationComponent = ({
  setCurrentPage,
  currentPage,
  setItemPerPage,
  itensPerPage,
  pages,
  pagination
}) => {

  return (
    <div className={styles.PagesArea}>
      {!pagination &&
        <select
          value={itensPerPage}
          onChange={(e) => setItemPerPage(Number(e.target.value))
          }>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
        </select>
      }
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            key={index}
            value={index}
            className={currentPage === index ? styles.buttonActive : styles.buttonDefault}
            onClick={(e) => setCurrentPage(Number(e.target.value))}>
            {index + 1}
          </button>
        )
      })}
    </div>
  )
}

export default PaginationComponent