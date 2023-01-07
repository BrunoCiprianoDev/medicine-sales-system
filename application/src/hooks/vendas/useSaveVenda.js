import { useState } from 'react'
import { urlServer } from '../../serverConfig'

const useSaveVenda = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const saveVenda = (venda, items) => {
    setLoading(true)
    setError(null)

    // Salvar a venda
    fetch(urlServer+'/vendas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(venda)
    })
      .then(response => response.json())
      .then(data => {
        // Salvar cada item da venda
        items.forEach(item => {
          fetch(urlServer+'/listaItensVenda/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
          })
            .then(response => response.json())
            .then(data => {
              // Tratar sucesso aqui (opcional)
            })
            .catch(error => {
              // Tratar erro aqui (opcional)
            })
        })

        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }

  return { loading, error, saveVenda }
}

export default useSaveVenda