
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { urlServer } from "../../serverConfig";

export const useListaPesquisa = (list, setList, vendaId) => {
  const [inputSearch, setInputSearch] = useState('');


  const { data, loading, error } = useFetch(`${urlServer}/mercadorias/`, `?q=${inputSearch}`);

  const currentItens = (data && data.slice(0, 5));

  const handleList = (elemento) => {
    if (!list.find(e => e.id === elemento.id)) {
      setList(arr => [...arr, {
        id: elemento.id + vendaId,
        vendaId: vendaId,
        mercadoriaId: elemento.id,
        nome: elemento.nome,
        preco_com_desconto: parseFloat(elemento.preco_com_desconto),
        desconto: parseFloat(elemento.desconto),
        preco_sem_desconto: parseFloat(elemento.preco_sem_desconto),
        codigo: elemento.codigo,
        quant: 1
      }]);
    }
  }
  return { loading, setInputSearch, error, currentItens, handleList }
}