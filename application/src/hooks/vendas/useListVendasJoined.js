import { useState, useEffect } from 'react'
import { urlServer } from '../../serverConfig'

const useListVendasJoined = (searchBy) => {
  const [vendas, setVendas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const orderByAttribute = (orderBy, order) => {

    let arrayDataSort = vendas.slice();

    arrayDataSort.sort(function (a, b) {
      let attributeA = a[orderBy];
      let attributeB = b[orderBy];

      if (typeof attributeA === 'string') {
        attributeA = attributeA.toLowerCase();
        attributeB = attributeB.toLowerCase();

        if (order === 'asc') {
          if (attributeA < attributeB) {
            return -1;
          }
          if (attributeA > attributeB) {
            return 1;
          }
        } else if (order === 'desc') {
          if (attributeA < attributeB) {
            return 1;
          }
          if (attributeA > attributeB) {
            return -1;
          }
        }
        return 0
      } else {
        if(order === 'asc'){
          return attributeB - attributeA;
        } else {
          return attributeB - attributeA;
        }
      }
    });

    setVendas(arrayDataSort);
  }

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

      const itemsResponse = await fetch(`${urlServer}/listaItensVenda?vendaId=${saleId}`)
      const items = await itemsResponse.json()
      items.forEach(async (item) => {
        await fetch(`${urlServer}/listaItensVenda/${item.id}`, {
          method: 'DELETE'
        })
      })

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
    fetchData()
  }, [searchBy])

  return { vendas, fetchData, deleteSaleCascade, loading, error, orderByAttribute }
}

export default useListVendasJoined