import { useState, useEffect } from 'react'
import { urlServer } from '../../serverConfig'

const getLotesJoined = async () => {

    /*O objetivo desse hook é simular uma requisição GET a API. Entendemos 
    que chamar todos os itens de cada tabela e depois relaciona-los um a um 
    tem um alto custo de processamento, mas esse tipo de requisição envolvendo 
    join entre tabelas não é possível de ser feita
    com json server 
    */
    try {
        const lotesResponse = await fetch(`${urlServer}/lotes/`)
        const lotes = await lotesResponse.json()
        const mercadoriasResponse = await fetch(`${urlServer}/mercadorias/`)
        const mercadorias = await mercadoriasResponse.json()
        const fornecedoresResponse = await fetch(`${urlServer}/fornecedores/`)
        const fornecedores = await fornecedoresResponse.json()
        const lotesJoined = lotes.map(lote => ({
            ...lote,
            mercadoria: mercadorias.find(mercadoria => mercadoria.id === lote.mercadoriaId),
            fornecedore: fornecedores.find(fornecedore => fornecedore.id === lote.fornecedoreId)
        }))
        return lotesJoined
    } catch (error) {
        throw error
    }
}

const useLotesJoined = () => {
    const [lotes, setLotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getLotesJoined()
                setLotes(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { lotes, loading, error }
}

export default useLotesJoined