import React from 'react'
import { useState } from 'react';
import ListSearch from '../../../components/listSearch/ListSearch';
import { urlServer } from '../../../serverConfig';
import styles from './FormVendas.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete';
import { GetDateNow } from '../../../components/dataFormater/DataFormater';
import ListSelect from '../../../components/listSelect/ListSelect';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import useSaveVenda from '../../../hooks/vendas/useSaveVenda';
import Loading from '../../../components/loading/Loading';
import AlertError from '../../../components/alertContainer/alertError/AlertError';

const FormVendas = () => {

  const navigate = useNavigate();
  const [dataVenda] = useState(GetDateNow())
  const [listaMercadorias, setListaMercadorias] = useState([])
  const [funcionarioId, setFuncionarioId] = useState('');
  const [clienteId, setClienteId] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  const [venda, setVenda] = useState({ id: new Date().getTime(), data: dataVenda, funcionarioId: funcionarioId, clienteId: clienteId, total: '' });

  useEffect(() => {
    setTotalValue(0)
    listaMercadorias.map((mercadoria) => (
      setTotalValue(t => t + (parseFloat(mercadoria.valor_com_desconto * mercadoria.quant)))
    ));
    setVenda(v => ({ ...v, total: totalValue }))
  }, [listaMercadorias, totalValue]);

  useEffect(() => {
    setVenda(v => ({ ...v, clienteId: clienteId, funcionarioId: funcionarioId }));
  }, [clienteId, funcionarioId]);

  const { saveVenda, loading, error } = useSaveVenda();

  const handleConclude = () => {
    if (funcionarioId !== '') {
      saveVenda(venda, listaMercadorias)
      alert('Venda concluída!');
    } else {
      alert('Erro! Verifique se o funcionario foi inserido ou se alista de itens não está vazia')
    }
  }

  return (
    <div className={styles.MainContainer}>
      {loading && <Loading />}
      {error && <AlertError>Ocorreu um erro ao salvar a venda</AlertError>}
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
          <ListSearch
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
        <ListSelect
          setList={setListaMercadorias}
          list={listaMercadorias}
        />
      </div>
    </div>
  )
}

export default FormVendas
