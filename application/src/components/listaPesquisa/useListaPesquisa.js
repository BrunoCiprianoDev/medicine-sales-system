
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { urlServer } from "../../serverConfig";

export const useListaPesquisa = (list, setList, vendaId) => {
  const [inputSearch, setInputSearch] = useState('');


  const { data, loading, error } = useFetch(`${urlServer}/merchandises/search`, `?query=${inputSearch}`);

  const currentItens = (data && data.slice(0, 5));

  const handleList = (elemento) => {
    if (!list.find(e => e.id === elemento.id)) {
      setList(arr => [...arr, {
        id: elemento.id + vendaId,
        vendaId: vendaId,
        mercadoriaId: elemento.id,
        name: elemento.name,
        fullPrice: parseFloat(elemento.fullPrice),
        code: elemento.code,
        quant: 1
      }]);
    }
  }
  return { loading, setInputSearch, error, currentItens, handleList }
}