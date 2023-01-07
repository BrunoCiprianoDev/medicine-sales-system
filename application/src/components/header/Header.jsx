import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useOptionContext } from '../../hooks/useOptionContext';
import { useEffect } from 'react';
// CSS
import styles from './Header.module.css'
import iconSearch from '../../assets/icon-search.png'
import iconAdicionar from '../../assets/icon-adicionar.png';

const Header = () => {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { option } = useOptionContext();
  const [searchBarVisible, setSearchBarVisible] = useState(true);
  const [addOptionVisible, setAddOptionVisible] = useState(true);

  useEffect(() => {
    if (option === 'CONSULTAR_PRECO' || option === 'NOTIFICACOES' || option === 'RELATORIOS') {
      setSearchBarVisible(false);
      setAddOptionVisible(false);
    } else {
      setSearchBarVisible(true)
      setAddOptionVisible(true);
    }
  }, [option]);

  const handleFormSelector = () => {
    if (option === 'FUNCIONARIOS') {
      navigate("/funcionarios/form");
    } else if (option === 'DESCONTOS') {
      navigate("/descontos/form");
    } else if (option === 'FORNECEDORES') {
      navigate('/fornecedores/form');
    } else if (option === 'CLIENTES') {
      navigate('/clientes/form');
    } else if (option === 'MERCADORIAS') {
      navigate('/mercadorias/form');
    } else if (option === 'VENDAS') {
      navigate('vendas/form');
    } else if (option === 'ESTOQUE') {
      navigate('estoque/form');
    } else if (option === 'DEVOLUCOES') {
      navigate('/devolucoes/form/');
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (option === 'FUNCIONARIOS') {
      navigate("/funcionarios/search?q=" + query);
      setQuery('');
    } else if (option === 'DESCONTOS') {
      navigate("/descontos/search?q=" + query);
      setQuery('');
    } else if (option === 'FORNECEDORES') {
      navigate("/fornecedores/search?q=" + query);
      setQuery('');
    } else if (option === 'CLIENTES') {
      navigate("/clientes/search?q=" + query);
      setQuery('');
    } else if (option === 'MERCADORIAS') {
      navigate("/listMercadorias/search?q=" + query);
      setQuery('');
    } else if (option === 'VENDAS') {
      navigate("/vendas/search?q=" + query);
      setQuery('');
    } else if (option === 'ESTOQUE') {
      navigate("/estoque/search?q=" + query);
      setQuery('');
    } else if (option === 'DEVOLUCOES') {
      navigate('/devolucoes/search?=' + query)
      setQuery('');
    }
  }

  return (
    <div className={styles.MainContainer}>
      <button className={styles.buttonRequirements}>?</button>
      {addOptionVisible &&
        <button
          className={styles.buttonNew}
          onClick={() => handleFormSelector()}>
          <img src={iconAdicionar} alt='' /> Adicionar
        </button>}
      {searchBarVisible &&
        <form
          onSubmit={handleSearch}
          className={styles.FormContainer}>
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder='Pesquisar' />
          <button
            type='submit'>
            <img src={iconSearch} alt='' />
          </button>
        </form>}
    </div>
  )
}

export default Header