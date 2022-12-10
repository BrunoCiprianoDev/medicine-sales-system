import React from 'react'
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import styles from './InputAutoComplete.module.css'

const InputAutoComplete = ({title, url, submitData, setSubmitData}) => {

    const [inputSearch, setInputSearch] = useState('');
    const {data} = useFetch(url+'?q='+inputSearch)
  
    const currentItens = (data && data.slice(0, 3));
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(currentItens.length === 1){
        setSubmitData(currentItens[0])
      }else{
        alert('Data not found');
      }
      setInputSearch('');
    }

  return (
    <div className={styles.ContainerForm}>
        <h4>{title}</h4>
          {submitData === '' && <form onSubmit={(e)=>handleSubmit(e)}>
               <div className={styles.InputForm}>
                  <input type="text" value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} />
                  <div className={styles.SugestionBox}>
                    {inputSearch !== '' && 
                      currentItens.map((teste)=>(
                        <label className={styles.AutoComplete} onClick={()=>setInputSearch(teste.cpf)} key={teste.id}>{teste.cpf}</label>
                    ))}
                  </div>
              </div>
              <input type="submit" value='Inserir'/>         
          </form>}
          {submitData !== '' && <div className={styles.InsertArea}>
            <div className={styles.DataInsertArea}>
              <p>CPF:{submitData.cpf}</p>
              <p>NOME:{submitData.nome}</p>
            </div>
            <button onClick={()=>setSubmitData('')}>Edit</button>
          </div>}
        </div>
  )
}

export default InputAutoComplete