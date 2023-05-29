import { urlServer } from "../../../serverConfig"

export const parametrosEstoque = [
    { id: 1, atributo: 'merchandiseName', rotulo: 'Mercadoria', tipo: 'autoComplete', url: urlServer + "/merchandises/", atributoVisivel: 'nome' },
    { id: 2, atributo: 'units', rotulo: 'Unidades', tipo: 'autoComplete', atributoVisivel: 'nome' },
    { id: 3, atributo: 'number', rotulo: 'Lote', tipo: 'text' },
    { id: 4, atributo: 'expirationDate', rotulo: 'Validade', tipo: 'date' },
]

export const parametrosOrdencacao = [
    { id: 1, atributo: 'codigo', rotulo: 'Codigo' },
    { id: 2, atributo: 'nome', rotulo: 'Nome' },
    { id: 3, atributo: 'estoque_minimo', rotulo: 'Estoque mínimo' },
    { id: 4, atributo: 'estoque_maximo', rotulo: 'Estoque máximo' },
    { id: 5, atributo: 'estoque_atual', rotulo: 'Estoque atual' }
]