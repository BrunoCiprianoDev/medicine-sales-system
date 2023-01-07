import { useState, useEffect } from 'react'
import { urlServer } from '../../serverConfig'

const useMercadoriasVenda = (searchBy) => {

    const [mercadorias, setMercadorias] = useState([])
    const [gruposStateDesconto, setStateGruposDesconto] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getTotalUnidadesDaMercadoria = (lotes) => {
        //Contabiliza o total de unidades em todos os lotes de uma mercadoria
        var unidades = 0;
        lotes.map((lote) => (
            unidades += parseInt(lote.unidades)
        ))
        return unidades;
    }

    const getLotes = async (mercadoriaId) => {
        //Carrega todos os lotes relacionados a uma mercadoria
        const loteResponse = await fetch(`${urlServer}/lotes/?mercadoriaId=${mercadoriaId}`);
        const lotes = await loteResponse.json();
        const totalUnidades = getTotalUnidadesDaMercadoria(lotes);
        return totalUnidades
    }

    const getPercentualDesconto = (grupoDescontoMercadoria) => {
        const grupoDescontoLocal = gruposStateDesconto.find(gd => gd.grupoDesconto === grupoDescontoMercadoria);
        return grupoDescontoLocal ? grupoDescontoLocal.percentual : 0;
    }

    const calcularValorComDesconto = (mercadoria) => {
        const valorDescontado = getPercentualDesconto(mercadoria.grupoDesconto);
        return (mercadoria.valor_venda - mercadoria.valor_venda * (valorDescontado/100)).toFixed(2)
    }

    useEffect(() => {
        const firstFetchData = async () => {
            setLoading(true)
            try {
                const mercadoriasResponse = await fetch(`${urlServer}/mercadorias/?q=${searchBy}`)
                const mercadoriasLocal = await mercadoriasResponse.json()
                const grupoDescontoResponse = await fetch(`${urlServer}/grupoDescontos?`);
                const grupoDescontoLocal = await grupoDescontoResponse.json();
                setStateGruposDesconto(grupoDescontoLocal)
                const mercadoriasWithLotes = await Promise.all(
                    mercadoriasLocal.map(async mercadoria => ({
                        ...mercadoria,
                        unidades: await getLotes(mercadoria.id),
                    }))
                )
                setMercadorias(mercadoriasWithLotes)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        firstFetchData()
    }, [searchBy])
    return { mercadorias, getPercentualDesconto, calcularValorComDesconto, loading, error }
}

export default useMercadoriasVenda