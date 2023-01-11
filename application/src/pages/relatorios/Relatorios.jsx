import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Relatorios.module.css'

import iconeFuncionarios from '../../assets/icon-funcionario.png'
import iconeFornecedores from '../../assets/icon-fornecedores.png'
import iconeMercadorias from '../../assets/icon-mercadorias.png'
import iconeEstoque from '../../assets/icon-estoque.png'
import iconeClientes from '../../assets/icon-estoque.png'
import iconeDevolucoes from '../../assets/icon-devolucao.png'

const Relatorios = () => {

  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate("/relatorio/" + query + "/");
  }

  const pr_MenuRelatorios = [
    { id: 1, urlPagina: 'funcionarios', rotulo: 'Funcionarios', src: iconeFuncionarios, alt: 'Icone funcionarios' },
    { id: 2, urlPagina: 'fornecedores', rotulo: 'Fornecedores', src: iconeFornecedores, alt: 'Icone fornecedores' },
    { id: 3, urlPagina: 'mercadorias', rotulo: 'Mercadorias', src: iconeMercadorias, alt: 'Icone mercadorias' },
    { id: 4, urlPagina: 'clientes', rotulo: 'Clientes', src: iconeClientes, alt: 'Icone clientes' },
    { id: 5, urlPagina: 'devolucoes', rotulo: 'Devoluções', src: iconeDevolucoes, alt: 'Icone devolucoes' },
    { id: 6, urlPagina: 'estoque', rotulo: 'Estoque', src: iconeEstoque, alt: 'Icone estoque' },
  ]

  return (
    <div className={styles.MainContainer}>
      <div className={styles.ContainerTitle}>
        <h1>CLASSES DE RELATÓRIOS</h1>
      </div>
      <div className={styles.ContainerDepartment}>
        <div className={styles.ContainerMenu}>
          {pr_MenuRelatorios.map((opcao) => (
            <button key={opcao.id} onClick={() => (handleSearch(opcao.urlPagina))}>
              <img src={opcao.src} alt="" />{opcao.rotulo}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Relatorios