import React from 'react'
import { useFetch } from '../../hooks/useFetch'

const SelectBox = ({register, url, attribute}) => {

    const { data: options } = useFetch(url)

    return (
        <select {...register(attribute)}>
            {options && options.map((option) => (
                <option 
                    key={option.id} value={option[attribute]}>
                    {option[attribute]}
                </option>
            ))}
        </select>
    )
}

export default SelectBox