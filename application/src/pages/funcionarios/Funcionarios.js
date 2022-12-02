import React from 'react'
import styles from './Funcionarios.module.css'

const parameters = [
    {id: 1, value: "Nome"},
    {id: 2, value: "CPF"},
    {id: 3, value: "Data nascimento"},
    {id: 4, value: "Telefones"},
    {id: 5, value: "E-mails"},
    {id: 6, value: "Função"}
]


export const Funcionarios = () => {
  return (
    <div className={styles.MainContainer}>
        <div className={styles.HeaderList}>
            {parameters.map((parameter)=>(
                <div key={parameter.id} className={styles.ElementData}>{parameter.value}</div>
            ))}
            <div className={styles.ElementData}></div>
        </div>
    </div>
  )
}
