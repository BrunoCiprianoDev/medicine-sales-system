import React from 'react'
import { useState } from 'react';
import PaginationComponent from '../paginationComponent/PaginationComponent';
import styles from './ListSelect.module.css'

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
            <th>Código</th>
            <th>Nome</th>
            <th>Valor s/desc</th>
            <th>Valor c/desc</th>
            <th>Unidade</th>
            <th>Total Item</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItens && currentItens.map((elemento) => (
            <tr key={elemento.id} className={styles.ComponenteList}>
              <td>{elemento.codigo}</td>
              <td>{elemento.nome}</td>
              <td style={{ color: 'red', fontWeight: 'bold' }}>R${elemento.valor_venda}</td>
              <td style={{ color: 'blue', fontWeight: 'bold' }}>R${elemento.valor_com_desconto}</td>
              <td>{elemento.quant}</td>
              <td>{(elemento.quant * elemento.valor_venda).toFixed(2)}</td>
              <td>
                <button onClick={() => removeElement(elemento)} className={styles.buttonRemove}>-</button>
                <button onClick={() => addElement(elemento)} className={styles.buttonAdd}>+</button>
                <button className={styles.buttonLote}>L</button>
              </td>
            </tr>
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