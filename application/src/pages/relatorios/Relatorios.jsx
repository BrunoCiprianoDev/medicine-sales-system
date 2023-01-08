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

    return (
        <div className={styles.MainContainer}>
            <div className={styles.ContainerTitle}>
                <h1>CLASSES DE RELATÓRIOS</h1>
            </div>
            <div className={styles.ContainerDepartment}>
                <div className={styles.ContainerMenu}>
                    <button onClick={() => (handleSearch('funcionarios'))}>
                        <img src={iconeFuncionarios} alt="" />Funcionarios
                    </button>
                    <button onClick={() => (handleSearch('fornecedores'))}>
                        <img src={iconeFornecedores} alt="" />Fornecedores
                    </button>
                    <button onClick={() => (handleSearch('mercadorias'))}>
                        <img src={iconeMercadorias} alt="" />Mercadorias
                    </button>
                    <button onClick={() => (handleSearch('clientes'))}>
                        <img src={iconeClientes} alt="" />Clientes
                    </button>
                    <button onClick={() => (handleSearch('devolucoes'))}>
                        <img src={iconeDevolucoes} alt="" />Devoluções
                    </button>
                    <button onClick={() => (handleSearch('estoque'))}>
                        <img src={iconeEstoque} alt="" />Estoque
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Relatorios