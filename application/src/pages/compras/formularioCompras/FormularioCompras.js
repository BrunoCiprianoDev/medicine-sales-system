import React from 'react'
import styles from './FormularioCompras.module.css'
import { useState } from 'react';
import FormularioItensCompra from '../../../components/formularioItemCompra/FormularioItensCompra';
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete';
import { urlServer } from '../../../serverConfig';
import BotaoDeletar from '../../../components/botaoDeletar/BotaoDeletar';
import { useNavigate } from 'react-router-dom';

const FormularioCompras = () => {

  const [lista, setLista] = useState([]);
  const [formComprasVisible, setFormComprasVisible] = useState(false);
  const [fornecedor, setFornecedor] = useState('');
  const navigate = useNavigate();

  const removerLoteCompra = (id) => {
    setLista(list => list.filter(e => e.id !== id));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fornecedor.nome);
    alert('Compra do fornecedor registrada, todos os lotes foram inseridos no estoque!');
    navigate('/compras/search/')
  }

  const handleBack = () => {
    navigate('/compras/search/')
  }
  

  return (
    <div className={styles.MainContainer}>
      <div className={styles.LeftArea}>
        <h2 className={styles.Title}>Formulario compra</h2>
        <form onSubmit={(e) => { handleSubmit(e) }} className={styles['FormContainer']}>
          <label className={styles.LabelLocal}>Data <input type="date" /></label>
          <label className={styles.LabelLocal}>Total <input type="number" /></label>
          <label className={styles.LabelLocal}> Fornecedor
            <InputAutoComplete
              attribute={'nome'}
              attributeVisible={'nome'}
              url={`${urlServer}/fornecedores/`}
              setValue={setFornecedor}
            />
          </label>
          <label className={styles.LabelLocal}>Nº nota fiscal <input type="text" /></label>

          <div className={styles.SubmitArea}>
            <input type="submit" value='Concluir' className={styles.SubmitButton} />
          </div>
        </form>
        <button className={styles.ButtonCancelar} onClick={()=>{handleBack()}}>Cancelar</button>
      </div>
      <div className={styles.RightArea}>
        {formComprasVisible &&
          <FormularioItensCompra
            setLista={setLista}
            setFormComprasVisible={setFormComprasVisible}
          />}
        {!formComprasVisible && <table>
          <thead>
            <tr className={styles.HeaderList}>
              <th>Lote</th>
              <th>Id Mercadoria</th>
              <th>Validade</th>
              <th>custo por unidade</th>
              <th>
                <button
                className={styles.AddLote}
                  onClick={() => setFormComprasVisible(true)}>Adicionar lote
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {lista && lista.map((item) => (
              <tr className={styles.ListComponent} key={item.id}>
                <td
                  className={styles.ElementData}>
                  {item.validade}
                </td>
                <td
                  className={styles.ElementData}>
                  {item.unidade}
                </td>
                <td
                  className={styles.ElementData}>
                  {item.custoUnidade}
                </td>
                <td
                  className={styles.ElementData}>
                  {item.mercadoria}
                </td>
                <td><BotaoDeletar handleDelete={removerLoteCompra} arg={item.id} /></td>
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
    </div>
  )
}

export default FormularioCompras