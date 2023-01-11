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
    if (option === 'CONSULTAR_PRECO' || option === 'RELATORIOS') {
      setSearchBarVisible(false);
      setAddOptionVisible(false);
    } else {
      setSearchBarVisible(true)
      setAddOptionVisible(true);
    }
  }, [option]);

  const handleFormSelector = (id) => {
    switch (option) {
      case 'FUNCIONARIOS':
        navigate(`/funcionarios/form/${id}`);
        break;
      case 'DESCONTOS':
        navigate(`/descontos/form/${id}`);
        break;
      case 'FORNECEDORES':
        navigate(`/fornecedores/form/${id}`);
        break;
      case 'CLIENTES':
        navigate(`/clientes/form/${id}`);
        break;
      case 'MERCADORIAS':
        navigate(`/mercadorias/form/${id}`);
        break;
      case 'VENDAS':
        navigate(`/vendas/form/${id}`);
        break;
      case 'ESTOQUE':
        navigate(`/estoque/form/${id}`);
        break;
      case 'DEVOLUCOES':
        navigate(`/devolucoes/form/${id}`);
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
      case 'NOTIFICACOES':
        navigate('/notificacoes/search?q=' + query)
        setQuery('');
        break;
      default:
        break;
    }
  }

  return { addOptionVisible, handleFormSelector, searchBarVisible, handleSearch, setQuery, query }

}