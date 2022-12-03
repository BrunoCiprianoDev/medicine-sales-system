import {React, useState} from 'react'
import styles from './Funcionarios.module.css'
import { useFetch } from '../../../hooks/useFetch'
import Loading from '../../../components/loading/Loading';
import PaginationComponent from '../../../components/paginationComponent/PaginationComponent';
import {useNavigate, useSearchParams } from 'react-router-dom';

import iconeDeletar from '../../../assets/icon-deletar.png'
import iconeDetalhe from '../../../assets/icon-detalhe.png'

const url = "http://localhost:3000/funcionarios";

const parameters = [
    {id: 1, value: "Nome"},
    {id: 2, value: "CPF"},
    {id: 3, value: "Data nascimento"},
    {id: 4, value: "Telefones"},
    {id: 5, value: "E-mails"},
    {id: 6, value: "Função"}
]

export const Funcionarios = () => {

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const {data: funcionarios, httpConfig, loading, error} = useFetch(
    searchParams ? url+"?"+searchParams : url)
  
  //Pagination  
  const [itensPerPage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(funcionarios && funcionarios.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = (funcionarios && funcionarios.slice(startIndex, endIndex));


  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className={styles.MainContainer}>
        <div className={styles.HeaderList}>
            {parameters.map((parameter)=>(
                <div key={parameter.id} className={styles.ElementData}>{parameter.value}</div>
            ))}
            <div className={styles.ElementData}></div>
        </div>
          {error && <p>Falha ao carregar dados....</p>}
          {loading && <Loading/>}
          {currentItens && currentItens.map((funcionario)=>(
            <div className={styles.ListComponent} key={funcionario.id}>
            <div className={styles.ElementData}>{funcionario.nome}</div>
            <div className={styles.ElementData}>{funcionario.cpf}</div>
            <div className={styles.ElementData}>{funcionario.dt_nascimento}</div>
            <div className={styles.ElementData}>{funcionario.telefone_um}<br/>{funcionario.telefone_dois}</div>
            <div className={styles.ElementData}>{funcionario.email}</div>
            <div className={styles.ElementData}>{funcionario.funcao}</div>
            <div className={styles.ElementData}>
              <button className={styles.buttonDetalhe} onClick={()=>(navigate('/funcionarios/'+funcionario.id))}>
                <img src={iconeDetalhe} alt=''/>
              </button>
              <button className={styles.buttonDeletar} onClick={()=>handleRemove(funcionario.id)}>
                <img src={iconeDeletar} alt=''/>
              </button>
            </div>
          </div>
          ))}
          <div className={styles.PaginationArea}>
            <PaginationComponent 
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
              setItemPerPage={setItemPerPage} 
              itensPerPage={itensPerPage}
              pages={pages}/>
          </div>
      </div>
  )
}
