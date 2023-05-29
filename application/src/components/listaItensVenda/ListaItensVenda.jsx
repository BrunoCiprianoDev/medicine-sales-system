import React from 'react'

import styles from './ListaItensVenda.module.css'

import { useListaItensVenda } from './useListaItensVenda';
import ComponentePaginacao from '../componentePaginacao/ComponentePaginacao';
import SeletorLotes from '../seletorLotes/SeletorLotes';

const ListaItensVenda = ({ list, setList }) => {

const {
  currentItens, 
  removeElement, 
  addElement, 
  setCurrentPage, 
  currentPage, 
  setItemPerPage, 
  itensPerPage, 
  pages,
  seletorLotes,
  setSeletorLotes,
  mercadoriaLotes,
  callSeletorLote
} = useListaItensVenda(list, setList)


  return (
    <div className={styles.MainContainer}>
      {seletorLotes && <SeletorLotes mercadoriaLotes={mercadoriaLotes} setSeletorLotes={setSeletorLotes} />}
      <table>
        <thead>
          <tr className={styles.HeaderList}>
            <th>Código</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Unidade</th>
            <th>Total Item</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItens && currentItens.map((elemento) => (
            <tr key={elemento.id} className={styles.ComponenteList}>
              <td>{elemento.code}</td>
              <td>{elemento.name}</td>
              <td style={{ color: 'red', fontWeight: 'bold' }}>
                R${elemento.fullPrice}
              </td>
              <td>{elemento.quant}</td>
              <td>{(elemento.quant * elemento.fullPrice).toFixed(2)}</td>
              <td>
                <button onClick={() => removeElement(elemento)}
                  className={styles.buttonRemove}>-
                </button>
                <button onClick={() => addElement(elemento)}
                  className={styles.buttonAdd}>+
                </button>
                <button onClick={() => callSeletorLote(elemento)}
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