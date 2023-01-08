import React from 'react'
import iconePaginaNaoEncontrada from '../../assets/icon-erro-404.png'
import styles from './Pagina404.module.css'

const Pagina404 = () => {
  return (
    <div className={styles.MainContainer}>
      <h1>404</h1>
      <div className={styles.imgArea}>
        <img src={iconePaginaNaoEncontrada} alt='Icone de página não encontrada' />
      </div>
      <h2>Página não encontrada!</h2>
    </div>
  )
}

export default Pagina404