import React from 'react'
import { urlServer } from '../../serverConfig';
import {useNavigate, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../components/paginationComponent/PaginationComponent';
import styles from './Notificacoes.module.css'
import AlertError from '../../components/alertContainer/alertError/AlertError';

import Loading from '../../components/loading/Loading';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import NotificacoesComponent from './NotificacoesComponent';
import {GetSimpleDateNow } from '../../components/dataFormater/DataFormater';

const Notificacoes = ({filter}) => {

  const url = urlServer+"/lotes/";

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const {data, loading, error} = useFetch(
    filter ? url+"?"+searchParams : url)

  const handleEdit = (id) => {
    navigate('/estoque/'+id)
  }

  //Params from pagination
  const [itensPerPage, setItemPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(data && data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (data && data.slice(startIndex, endIndex));


  const verification = (item) => {
    //Logica provisória para gerar notificações por data de validade (Apenas visual)
    const dataAtual = GetSimpleDateNow();
    var anoAtual = dataAtual.split('/')[2];
    var mesAtual = dataAtual.split('/')[1];
    var mesValidade = item.validade.split('-')[1];
    var anoValidade = item.validade.split('-')[0];
    var proximoVencimento = false;
    if(anoValidade === anoAtual){
      if(mesAtual === mesValidade){
        proximoVencimento = true;
      }
    }
    var estoqueBaixo = false;
    if(item.unidades < 10) {
      estoqueBaixo = true;
    }

    if(proximoVencimento || estoqueBaixo){
    return (<NotificacoesComponent 
      key={item.id} 
      item={item} 
      handleEdit={handleEdit} 
      vencimento={proximoVencimento}
      estoqueBaixo={estoqueBaixo}
      />)
    }
  }

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Title}>
        <h2>Notificações</h2>
      </div>
      {loading && <Loading/>}
      {error && <AlertError>Falha no carregamento!</AlertError>}
      <table>
        <thead>
        <tr className={styles.HeaderList}>
          <th className={styles.ElementData}>Lote</th>
          <th className={styles.ElementData}>Validade</th>
          <th className={styles.ElementData}>Unidades</th>
          <th className={styles.ElementData}>Mercadoria</th>
          <th className={styles.ElementData}>Obs</th>
          <th className={styles.ElementData}></th>
        </tr>
        </thead>
        <tbody>
            {currentItens && currentItens.map((item)=>(
              verification(item)
            ))}
      </tbody>
      </table>
      <div className={styles.PaginationArea}>
        <PaginationComponent 
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage}
          setItemPerPage={setItemPerPage} 
          itensPerPage={itensPerPage}
          pages={pages}
          pagination={'desable'}
        />
        </div>
    </div>
  )
}

export default Notificacoes