import { useState, useEffect } from 'react'
import { urlServer } from '../../serverConfig'

const useListVendasJoined = (searchBy) => {
    const [vendas, setVendas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    /*O objetivo desse hook é unicamente simular uma requisição GET
   a API. Entendemos que chamar todos os itens de cada tabela e depois
   relaciona-los um a um tem um alto custo de processamento, mas esse tipo
   de requisição envolvendo join entre duas ou mais tabelas não é possível de ser feita
   com json server 
   */

    const fetchData = async () => {
        setLoading(true)
        try {
            const vendasResponse = await fetch(`${urlServer}/vendas/${searchBy}`)
            const vendas = await vendasResponse.json()
            const funcionariosResponse = await fetch(`${urlServer}/funcionarios/`)
            const funcionarios = await funcionariosResponse.json()
            const clientesResponse = await fetch(`${urlServer}/clientes/`)
            const clientes = await clientesResponse.json()
            const vendasJoined = vendas.map(venda => ({
                ...venda,
                funcionario: funcionarios.find(funcionario => funcionario.id === venda.funcionarioId),
                cliente: clientes.find(cliente => cliente.id === venda.clienteId)
            }))
            setVendas(vendasJoined)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const deleteSaleCascade = async (saleId, callback) => {
        setLoading(true)
        try {
            // Deletar cada item da venda (tabela listaItensVenda)
            const itemsResponse = await fetch(`${urlServer}/listaItensVenda?vendaId=${saleId}`)
            const items = await itemsResponse.json()
            items.forEach(async (item) => {
                await fetch(`${urlServer}/listaItensVenda/${item.id}`, {
                    method: 'DELETE'
                })
            })
            // Deletar a venda (tabela vendas)
            await fetch(`${urlServer}/vendas/${saleId}`, {
                method: 'DELETE'
            })

            callback();
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const firstFetchData = async () => {
            setLoading(true)
            try {
                const vendasResponse = await fetch(`${urlServer}/vendas/${searchBy}`)
                const vendas = await vendasResponse.json()
                const funcionariosResponse = await fetch(`${urlServer}/funcionarios/`)
                const funcionarios = await funcionariosResponse.json()
                const clientesResponse = await fetch(`${urlServer}/clientes/`)
                const clientes = await clientesResponse.json()
                const vendasJoined = vendas.map(venda => ({
                    ...venda,
                    funcionario: funcionarios.find(funcionario => funcionario.id === venda.funcionarioId),
                    cliente: clientes.find(cliente => cliente.id === venda.clienteId)
                }))
                setVendas(vendasJoined)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        firstFetchData()
    }, [searchBy])

    return { vendas, fetchData, deleteSaleCascade, loading, error }
}

export default useListVendasJoined