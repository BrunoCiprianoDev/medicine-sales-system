import { useState } from "react";

export const useListaItensVenda = (list, setList) => {

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(list && list.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (list && list.slice(startIndex, endIndex));

  const [seletorLotes, setSeletorLotes] = useState(false);
  const [mercadoriaLotes, setMercadoriasLotes] = useState('');

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

  const callSeletorLote = (elemento) =>{
    setMercadoriasLotes(elemento.mercadoriaId);
    setSeletorLotes(true);
  }

  return {
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
    setMercadoriasLotes,
    callSeletorLote
}
}