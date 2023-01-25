import { urlServer } from "../../../serverConfig"

export const parametrosDevolucoes = [
    { id: 1, atributo: 'data', rotulo: 'Data da devolucao', tipo: 'date' },
    { id: 2, atributo: 'venda', rotulo: 'Venda', tipo: 'autoComplete', url: urlServer + "/vendas/", atributoVisivel: 'data' },
    { id: 3, atributo: 'nome', rotulo: 'Mercadoria devolvida', tipo: 'autoComplete', url: urlServer + "/mercadorias/", atributoVisivel: 'nome' },
    { id: 4, atributo: 'unidades', rotulo: 'Unidades de devolvidas', tipo: 'number' },
    { id: 5, atributo: 'valorDevolvido', rotulo: 'Valor devolvido', tipo: 'number' },
]