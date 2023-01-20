import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOptionContext } from "../../hooks/useOptionContext";

export const useHeader = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { option } = useOptionContext();
  const [searchBarVisible, setSearchBarVisible] = useState(true);
  const [addOptionVisible, setAddOptionVisible] = useState(true);

  useEffect(() => {
    if (option === 'CONSULTAR_PRECO' || option === 'RELATORIOS' || option === 'DASHBOARD') {
      setSearchBarVisible(false);
      setAddOptionVisible(false);
    } else {
      setSearchBarVisible(true)
      setAddOptionVisible(true);
    }

  }, [option]);

  const handleFormSelector = () => {
    switch (option) {
      case 'FUNCIONARIOS':
        navigate(`/funcionarios/form/adicionar`);
        break;
      case 'DESCONTOS':
        navigate(`/descontos/form/adicionar`);
        break;
      case 'FORNECEDORES':
        navigate(`/fornecedores/form/adicionar`);
        break;
      case 'COMPRAS':
        navigate(`/compras/form/`);
        break;
      case 'CLIENTES':
        navigate(`/clientes/form/adicionar`);
        break;
      case 'MERCADORIAS':
        navigate(`/mercadorias/form/adicionar`);
        break;
      case 'VENDAS':
        navigate(`/vendas/form/adicionar`);
        break;
      case 'ESTOQUE':
        navigate(`/compras/form/`);
        break;
      case 'DEVOLUCOES':
        navigate(`/devolucoes/form/adicionar`);
        break;
      default:
        break;
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    switch (option) {
      case 'FUNCIONARIOS':
        navigate("/funcionarios/search?q=" + query);
        setQuery('');
        break;
      case 'DESCONTOS':
        navigate("/descontos/search?q=" + query);
        setQuery('');
        break;
      case 'FORNECEDORES':
        navigate("/fornecedores/search?q=" + query);
        setQuery('');
        break;
      case 'CLIENTES':
        navigate("/clientes/search?q=" + query);
        setQuery('');
        break;
      case 'COMPRAS':
        navigate("/compras/search?q=" + query);
        setQuery('');
        break;
      case 'MERCADORIAS':
        navigate("/mercadorias/search?q=" + query);
        setQuery('');
        break;
      case 'VENDAS':
        navigate("/vendas/search?q=" + query);
        setQuery('');
        break;
      case 'ESTOQUE':
        navigate("/estoque/search?q=" + query);
        setQuery('');
        break;
      case 'DEVOLUCOES':
        navigate('/devolucoes/search?q=' + query)
        setQuery('');
        break;
      default:
        break;
    }
  }

  return { addOptionVisible, handleFormSelector, searchBarVisible, handleSearch, setQuery, query }

}