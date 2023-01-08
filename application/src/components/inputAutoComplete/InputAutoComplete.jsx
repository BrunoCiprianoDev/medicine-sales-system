import React from 'react'
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import styles from './InputAutoComplete.module.css'

const InputAutoComplete = ({ attribute, url, setValue, attributeVisible, hookForm }) => {

  const [inputSearch, setInputSearch] = useState('');
  const { data } = useFetch(`${url}?q=${inputSearch}`);
  const currentItens = (data && data.slice(0, 3));
  const [visibilityAutoComplete, setVisibiliyAutoComplete] = useState(true)

  const handleInsert = (item) => {
    setInputSearch(item[attributeVisible])
    setVisibiliyAutoComplete(false)
    hookForm ? setValue(attribute, item.id) : setValue(item.id)
  }
  const handleOnChange = (event) => {
    hookForm ? setValue(attribute, '') : setValue("")
    setInputSearch(event)
    setVisibiliyAutoComplete(true)
  }

  return (
    <div className={styles.ContainerForm}>
      <div className={styles.InputBox}>
        <input
          className={styles.InputComponent}
          type="text"
          value={inputSearch}
          onChange={(e) => handleOnChange(e.target.value)}
          required
        />
        <div className={visibilityAutoComplete && inputSearch !== '' ? styles.SugestionBox : styles.SugestionBoxNone}>
          {inputSearch !== '' && visibilityAutoComplete &&
            currentItens.map((item) => (
              <label
                className={styles.AutoComplete}
                onClick={() => handleInsert(item)}
                key={item.id}>{item[attributeVisible]}
              </label>
            ))}
        </div>
        {!visibilityAutoComplete && <label className={styles.LabelVerify}>✓</label>}
        {visibilityAutoComplete && inputSearch === '' && <label className={styles.LabelWarning}>x</label>}
        {visibilityAutoComplete && inputSearch !== '' && <label className={styles.LabelNotVerify}>Selecione uma opção</label>}
      </div>
    </div>
  )
}

export default InputAutoComplete