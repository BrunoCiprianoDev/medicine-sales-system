import React from 'react'
import { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import styles from './FormVendas.module.css'



const FormVendas = () => {

  const urlClientes = ("http://localhost:3000/clientes")
  const [inputSearch, setInputSearch] = useState('');
  const {data} = useFetch(urlClientes+'?q='+inputSearch)
  const currentItens = (data && data.slice(0, 5));

  return (
    <div className={styles.MainContainer}>
        <div className={styles.ContainerForm}>
                <form >
                    <label className={styles.InputArea}>
                        <input type="text" value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} />
                        {inputSearch !== '' && 
                        currentItens.map((teste)=>(
                            <p className={styles.AutoComplete} key={teste.id}>{teste.nome}</p>
                        ))}
                    </label>
                    <input type="submit" />
                </form>
        </div>
    </div>
  )
}

export default FormVendas