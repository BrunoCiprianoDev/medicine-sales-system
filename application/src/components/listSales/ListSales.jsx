import React from 'react'
import iconeDetalhe from '../../assets/icon-detalhe.png'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './ListSales.module.css'
import PaginationComponent from '../paginationComponent/PaginationComponent';
import { urlServer } from '../../serverConfig';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../loading/Loading';
import AlertError from '../alertContainer/alertError/AlertError';

const parameters = [
    { id: 1, attribute: 'id', label: 'Id', type: 'text' },
    { id: 2, attribute: 'data', label: 'Data', type: 'text' },
    { id: 3, attribute: 'total', label: 'Total', type: 'text' },
    { id: 4, attribute: 'funcionarioId', label: 'Funcionario', type: 'number' },
    { id: 5, attribute: 'clienteId', label: 'Cliente', type: 'number' }
]

const ListSales = ({ filter }) => {

    const urlVendas = urlServer + "/vendas/";
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const { data, loading, error } = useFetch(
        filter ? urlVendas + "?" + searchParams : urlVendas)

    //Params from pagination
    const [itensPerPage, setItemPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = Math.ceil(data && data.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = (data && data.slice(startIndex, endIndex));

    return (
        <div>
            {loading && <Loading/>}
            {error && <AlertError>Falha no carregamento!</AlertError>}
            <table className={styles.TableSales}>
                <thead>
                    <tr className={styles.HeaderList}>
                        {parameters.map((parameter) => (
                            <th key={parameter.id}
                                className={styles.ElementData}>
                                {parameter.label}
                            </th>
                        ))}
                        <th className={styles.ElementData}></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItens && currentItens.map((item) => (
                        <tr className={styles.ListComponent} key={item.id}>
                            {parameters.map((parameter) => (
                                <td
                                    key={parameter.id}
                                    className={styles.ElementData}>
                                    {item[parameter.attribute]}
                                </td>
                            ))}
                            <td></td>
                            <td className={styles.ElementData}>
                                <button className={styles.buttonDetalhe}>
                                    <img src={iconeDetalhe} alt='' />
                                </button>
                            </td>
                        </tr>
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

export default ListSales