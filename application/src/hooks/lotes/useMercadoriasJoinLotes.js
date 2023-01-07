import { useState, useEffect } from 'react'
import { urlServer } from '../../serverConfig'

const useMercadoriasJoinLotes = (searchBy) => {
    const [mercadorias, setMercadorias] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getTotalUnidadesDaMercadoria = (lotes) => {
        //Contabiliza o total de unidades em todos os lotes de uma mercadoria
        var unidades = 0;
        lotes.map((lote)=>(
            unidades+= parseInt(lote.unidades)
        ))
        return unidades;
    }

    const getLotes = async (mercadoriaId) => {
        //Carrega todos os lotes relacionados a uma mercadoria
        const loteResponse = await fetch(`${urlServer}/lotes/?mercadoriaId=${mercadoriaId}`)
        const lotes = await loteResponse.json()
        const totalUnidades = getTotalUnidadesDaMercadoria(lotes);

         return totalUnidades
    }

    useEffect(() => {
        const firstFetchData = async () => {
            setLoading(true)
            try {
                const mercadoriasResponse = await fetch(`${urlServer}/mercadorias/${searchBy}`)
                const mercadoriasLocal = await mercadoriasResponse.json()
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

    return { mercadorias, loading, error }
}

export default useMercadoriasJoinLotes