import { useState, useEffect } from 'react'
import { urlServer } from '../../serverConfig'

const useDetailVendaJoined = (searchBy) => {
    const [venda, setVenda] = useState([])
    const [funcionario, setFuncionario] = useState([])
    const [cliente, setCliente] = useState([])
    const [listaItensVenda, setListaItensVenda] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    /*O objetivo desse hook é unicamente simular uma requisição GET
   a API.*/

    useEffect(() => {
        const firstFetchData = async () => {
            try {
                const vendaResponse = await fetch(`${urlServer}/vendas/${searchBy}?`)
                const vendaJoined = await vendaResponse.json()
                setVenda(vendaJoined);

                const funcionarioResponse = await fetch(`${urlServer}/funcionarios/${vendaJoined.funcionarioId}`)
                const funcionario = await funcionarioResponse.json()
                setFuncionario(funcionario);

                const clienteResponse = await fetch(`${urlServer}/clientes/${vendaJoined.clienteId}`)
                const cliente = await clienteResponse.json()
                setCliente(cliente);

                const listaItensVendaResponse = await fetch(`${urlServer}/listaItensVenda/?vendaId=${vendaJoined.id}`)
                const listaItensVendaJoined = await listaItensVendaResponse.json()
                setListaItensVenda(listaItensVendaJoined)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        firstFetchData()
    }, [searchBy])

    return { venda, funcionario, cliente, listaItensVenda, loading, error }
}

export default useDetailVendaJoined