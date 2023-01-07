import React from 'react'

import { useState } from 'react';
import PaginationComponent from '../paginationComponent/PaginationComponent';
import styles from './ListSelect.module.css'
import ListSelectComponent from './ListSelectComponent';

const ListSelect = ({ list, setList }) => {

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(list && list.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (list && list.slice(startIndex, endIndex));


  const removeElement = (elemento) => {
    elemento.quant--;
    elemento.quant_edit--;
    if (elemento.quant === 0) {
      setList(list => list.filter(e => e !== elemento));
    }
    setList(arr => [...arr])
  }

  const addElement = (elemento) => {
    elemento.quant++;
    elemento.quant_edit++;
    setList(arr => [...arr])
  }

  return (
    <div className={styles.MainContainer}>
      <table>
        <thead>
          <tr className={styles.HeaderList}>
            <th>Nome</th>
            <th>Valor</th>
            <th>Desconto</th>
            <th>Unidade</th>
            <th>Total Item</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItens && currentItens.map((elemento) => (
            <ListSelectComponent
              key={elemento.id}
              elemento={elemento}
              removeElement={removeElement}
              addElement={addElement} />
          ))}
        </tbody>
      </table>
      <div>
        <PaginationComponent
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setItemPerPage={setItemPerPage}
          itensPerPage={itensPerPage}
          pages={pages}
          pagination={'desable'}
        />
      </div>
    </div>
  )
}

export default ListSelect