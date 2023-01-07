import { useState, useEffect } from 'react'
import { urlServer } from '../../serverConfig'

const useNotificacoes = (searchBy) => {
    const [notificacoes, setNotificacoes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const dataAtual = new Date();

    const verificarValidade = (loteValidade) => {
        // Considere que um dia tem 86400000 milisegundos
        const dias = (Date.parse(loteValidade) - Date.parse(dataAtual)) / 86400000;
        return dias < 15 ? true : false;
    }

    const getNotificacoes = (lotes, mercadoria) => {
        //Contabiliza o total de unidades em todos os lotes de uma mercadoria
        var altertaValidade = false;
        var alertaNivelEstoque = false;
        var unidades = 0;
        lotes.map((lote) => (
            unidades += parseInt(lote.unidades),
            altertaValidade =verificarValidade(lote.validade)
        ))
        alertaNivelEstoque = (unidades > mercadoria.estoque_minimo) ? false : true;
        return {alertaNivelEstoque, altertaValidade};
    }

    const getLotes = async (mercadoria) => {
        //Carrega todos os lotes relacionados a uma mercadoria
        const loteResponse = await fetch(`${urlServer}/lotes/?mercadoriaId=${mercadoria.id}`);
        const lotes = await loteResponse.json();
        return getNotificacoes(lotes, mercadoria);
    }

    useEffect(() => {
        const firstFetchData = async () => {
            setLoading(true)
            try {
                const mercadoriasResponse = await fetch(`${urlServer}/mercadorias/${searchBy}`);
                const mercadoriasLocal = await mercadoriasResponse.json();
                const mercadoriasWithLotes = await Promise.all(
                    mercadoriasLocal.map(async mercadoria => ({
                        ...mercadoria,
                        status: await getLotes(mercadoria),
                    }))
                )               
                setNotificacoes(mercadoriasWithLotes)
                //setList(list => list.filter(e => e !== elemento))
                setNotificacoes(list => list.filter(e => (e.status.alertaNivelEstoque || e.status.altertaValidade)));
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        firstFetchData()
    }, [searchBy])

    return { notificacoes, loading, error }
}

export default useNotificacoes