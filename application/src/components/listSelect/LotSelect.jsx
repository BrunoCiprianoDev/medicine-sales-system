import React from 'react'
import styles from './LotSelect.module.css'


const LotSelect = ({ lotes, setLotSelectVisible }) => {
  return (
    <div className={styles.BoxContainer}>
      <div className={styles.HeaderContainer}>
        <h2 className={styles.Title}>Alterar lote:</h2>
        <h2 className={styles.Exit} onClick={() => setLotSelectVisible(false)}>X</h2>
      </div>
      <p className={styles.Text}>Por padrão, os itens adicionados na venda são
        retirados dos lotes com data de válidade mais próxima
        do vencimento.
        Você pode alterar isso, selecionando o lote
        manualmente na lista abaixo.
      </p>
      <table className={styles.TableContainer}>
        <thead>
          <tr className={styles.HeaderList}>
            <th className={styles.ElementData}>Lote</th>
            <th className={styles.ElementData}>Validade</th>
            <th className={styles.ElementData}>Unidades</th>
          </tr>
        </thead>
        <tbody >
          {lotes && lotes.map((lote) => (
            <tr key={lote.id} className={styles.ListComponent} onClick={() => setLotSelectVisible(false)}>
              <td className={styles.ElementData}>{lote.lote}</td>
              <td className={styles.ElementData}>{lote.validade}</td>
              <td className={styles.ElementData}>{lote.unidades}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default LotSelect