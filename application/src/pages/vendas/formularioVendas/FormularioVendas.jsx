import React from 'react'

import { urlServer } from '../../../serverConfig';

import styles from './FormularioVendas.module.css'

import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete';
import ListaPesquisa from '../../../components/listaPesquisa/ListaPesquisa';
import ListaItensVenda from '../../../components/listaItensVenda/ListaItensVenda';
import { useFormularioVendas } from './useFormularioVendas';

const FormularioVendas = () => {

  const {
    dataVenda, 
    setFuncionarioId, 
    setClienteId, 
    venda, 
    totalValue, 
    handleConclude, navigate, 
    setListaMercadorias, 
    listaMercadorias } = useFormularioVendas();

  return (
    <div className={styles.MainContainer}>
      <div className={styles.LeftArea}>
        <div className={styles.HeaderLeftArea}>
          <h2>{'Nova venda'}</h2>
          <div className={styles.DateArea}>
            <h4 >Data: {dataVenda}</h4>
            <label className={styles.LabelDateArea}> Funcionario:
              <InputAutoComplete
                attribute={'nome'}
                attributeVisible={'nome'}
                url={`${urlServer}/funcionarios`}
                setValue={setFuncionarioId}
              />
            </label>
            <label className={styles.LabelDateArea} > Cliente:
              <InputAutoComplete
                attribute={'nome'}
                attributeVisible={'nome'}
                url={`${urlServer}/clientes`}
                setValue={setClienteId}
              />
            </label>
          </div>
        </div>
        <div className={styles.ListSearch}>
          <ListaPesquisa
            vendaId={venda.id}
            setList={setListaMercadorias}
            list={listaMercadorias}
          />
        </div>
      </div>
      <div className={styles.RightArea}>
        <div className={styles.TopListSelect}>
          <h2>Valor total: R${totalValue.toFixed(2)}</h2>
          <div className={styles.ContainerButtons}>
            <button className={styles.buttonConclude}
              onClick={() => handleConclude()}>Concluir venda
            </button>
            <button className={styles.buttonCancel}
              onClick={() => navigate(`/vendas/search/`)}>Cancelar venda
            </button>
          </div>
        </div>
        <ListaItensVenda
          setList={setListaMercadorias}
          list={listaMercadorias}
        />
      </div>
    </div>
  )
}

export default FormularioVendas
