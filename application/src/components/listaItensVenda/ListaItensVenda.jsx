import React from 'react'

import styles from './ListaItensVenda.module.css'

import { useListaItensVenda } from './useListaItensVenda';
import ComponentePaginacao from '../componentePaginacao/ComponentePaginacao';

const ListaItensVenda = ({ list, setList }) => {

const {
  currentItens, 
  removeElement, 
  addElement, 
  setCurrentPage, 
  currentPage, 
  setItemPerPage, 
  itensPerPage, 
  pages } = useListaItensVenda(list, setList)

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
              <td style={{ color: 'red', fontWeight: 'bold' }}>
                R${elemento.preco_sem_desconto}
              </td>
              <td style={{ color: 'blue', fontWeight: 'bold' }}>
                R${elemento.preco_com_desconto}
              </td>
              <td>{elemento.quant}</td>
              <td>{(elemento.quant * elemento.preco_com_desconto).toFixed(2)}</td>
              <td>
                <button onClick={() => removeElement(elemento)}
                  className={styles.buttonRemove}>-
                </button>
                <button onClick={() => addElement(elemento)}
                  className={styles.buttonAdd}>+
                </button>
                <button
                  className={styles.buttonLote}>L
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <ComponentePaginacao
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

export default ListaItensVenda