import { useFetch } from '../../../hooks/useFetch';
import { urlServer } from '../../../serverConfig';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useDetalheEstoque = () => {

    const { id } = useParams();
    const { data: mercadoria, loading } = useFetch(`${urlServer}/mercadorias/${id}`, ``)
    const { data: lotes } = useFetch(`${urlServer}/lotes/`, `?mercadoriaId=${id}`)
    const [url, setUrl] = useState('');
    const { httpConfig } = useFetch(url);
    const navigate = useNavigate();

    const currentItensInventory = () => {
        var unidades = 0;
        lotes && lotes.map((lote) => (
            unidades += parseFloat(lote.unidades)
        ))
        return unidades;
    }

    const percentualCurrent = () => {
        return (currentItensInventory() / parseFloat(mercadoria.estoque_maximo)) * 100
    }

    const deleteLote = (id) => {
        setUrl(`${urlServer}/lotes/`)
        httpConfig(id, 'DELETE')
        window.location.reload();
    }

    const detailLote = (id) => [
        navigate(`/estoque/lote/${id}`)
    ]

    return {
        loading,
        mercadoria,
        currentItensInventory,
        percentualCurrent,
        lotes,
        deleteLote,
        detailLote
    }

}