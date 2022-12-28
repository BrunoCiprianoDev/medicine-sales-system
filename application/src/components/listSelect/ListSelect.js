import React from 'react'

import { useState } from 'react';
import PaginationComponent from '../paginationComponent/PaginationComponent';
import styles from './ListSelect.module.css'

const ListSelect = ({list, setList}) => {
    
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
        if(elemento.quant === 0){
          setList(list => list.filter(e => e !== elemento));
        }
        setList(arr=>[...arr])
      }
    
      const addElement = (elemento) => {
        elemento.quant++;
        elemento.quant_edit++; 
        setList(arr=>[...arr])
      }
    
  return (
    <div className={styles.MainContainer}>
      <div className={styles.HeaderList}>
        <div>Nome</div>
        <div>Valor</div> 
        <div>Unidade</div>    
        <div>Total Item</div>
        <div></div>
      </div>    
      {currentItens && currentItens.map((elemento)=>(
          <div key={elemento.id} className={styles.ComponenteList}>
            <div>{elemento.nome}</div>
            <div>{elemento.valor_venda}</div>
            <div>{elemento.quant}</div>   
            <div>{(elemento.quant*elemento.valor_venda).toFixed(2)}</div>         
            <div className={styles.ButtonBox}>
              <button onClick={()=>removeElement(elemento)} className={styles.buttonRemove}>-</button>
              <button onClick={()=>addElement(elemento)} className={styles.buttonAdd}>+</button>  
            </div>        
          </div>
        ))}
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