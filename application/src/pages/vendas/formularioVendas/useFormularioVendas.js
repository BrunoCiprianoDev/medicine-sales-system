import { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { GetDateNow } from '../../../components/dataFormater/DataFormater';

export const useFormularioVendas = () => {

    const navigate = useNavigate();
    const [dataVenda] = useState(GetDateNow())
    const [listaMercadorias, setListaMercadorias] = useState([])
    const [funcionarioId, setFuncionarioId] = useState('');
    const [clienteId, setClienteId] = useState('');
    const [totalValue, setTotalValue] = useState(0);
    const [venda, setVenda] = useState({ 
      id: new Date().getTime(), 
      data: dataVenda, 
      funcionarioId: funcionarioId, 
      clienteId: clienteId, 
      total: '' 
    });
  
    useEffect(() => {
      setTotalValue(0)
      listaMercadorias.map((mercadoria) => (
        setTotalValue(t => t + (parseFloat(mercadoria.preco_com_desconto * mercadoria.quant)))
      ));
      setVenda(v => ({ ...v, total: totalValue }))
    }, [listaMercadorias, totalValue]);
  
    useEffect(() => {
      setVenda(v => ({ ...v, clienteId: clienteId, funcionarioId: funcionarioId }));
    }, [clienteId, funcionarioId]);
  
    const handleConclude = () => {
    
    }

  return {
    dataVenda, 
    setFuncionarioId, 
    setClienteId, 
    venda, 
    totalValue, 
    handleConclude, 
    navigate, 
    setListaMercadorias, 
    listaMercadorias }
}