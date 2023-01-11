import { useState } from "react";

import { useNavigate, useSearchParams } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch';
import { urlServer } from '../../../serverConfig';

export const useListaEstoque = () => {

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();

    const { data, loading, error, orderByAttribute } = useFetch(`${urlServer}/mercadorias/`, `?${searchParams}`);

    const handleEdit = (id) => {
        navigate(`/estoque/${id}`)
    }

    //Params from pagination
    const [itensPerPage, setItemPerPage] = useState(7);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = Math.ceil(data && data.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = (data && data.slice(startIndex, endIndex));

    return {
        orderByAttribute,
        loading,
        error,
        currentItens,
        currentPage,
        handleEdit,
        setCurrentPage,
        setItemPerPage,
        itensPerPage,
        pages
    }

}