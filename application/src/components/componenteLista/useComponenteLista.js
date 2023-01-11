import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const useComponenteLista = (urlFetch, urlDetalhe, filtro) => {
  const navigate = useNavigate();
  const { data, httpConfig, loading, error, orderByAttribute } = useFetch(`${urlFetch}`, `${filtro}`)

  const handleEdit = (id) => {
    navigate(urlDetalhe + id)
  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(data && data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  var currentItens = (data && data.slice(startIndex, endIndex));

  return {
    loading,
    error,
    orderByAttribute,
    handleEdit,
    handleRemove,
    itensPerPage,
    setItemPerPage,
    setCurrentPage,
    currentItens,
    pages,
    currentPage
  }
}