import React from 'react'
import { useFetch } from '../../hooks/useFetch'

const SelectCustomizado = ({ register, urlFetch, atributo }) => {

  const { data: opcoes } = useFetch(`${urlFetch}`, ``)

  return (
    <select {...register(atributo)}>
      {opcoes && opcoes.map((opcao) => (
        <option
          key={opcao.id} value={opcao[atributo]} required>
          {opcao[atributo]}
        </option>
      ))}
    </select>
  )
}

export default SelectCustomizado