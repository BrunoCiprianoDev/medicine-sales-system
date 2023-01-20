import { urlServer } from "../../../serverConfig"

export const parametrosEstoque = [
    { id: 1, atributo: 'mercadoriaId', rotulo: 'Mercadoria', tipo: 'autoComplete', url: urlServer + "/mercadorias/", atributoVisivel: 'nome' },
    { id: 2, atributo: 'fornecedoreId', rotulo: 'Fornecedor', tipo: 'autoComplete', url: urlServer + "/fornecedores/", atributoVisivel: 'nome' },
    { id: 3, atributo: 'lote', rotulo: 'Lote', tipo: 'text' },
    { id: 4, atributo: 'data_compra', rotulo: 'Data da compra', tipo: 'date' },
    { id: 5, atributo: 'numeroNotaFiscal', rotulo: 'Número nota fiscal', tipo: 'number' },
    { id: 6, atributo: 'valorNotaFiscal', rotulo: 'Valor da nota fiscal', tipo: 'number' },
    { id: 7, atributo: 'validade', rotulo: 'Validade', tipo: 'date' },
    { id: 8, atributo: 'unidades', rotulo: 'Unidades', tipo: 'number' },
    { id: 9, atributo: 'custo_unidade', rotulo: 'Custo p/unidade', tipo: 'number' }
]

export const parametrosOrdencacao = [
    { id: 1, atributo: 'codigo', rotulo: 'Codigo' },
    { id: 2, atributo: 'nome', rotulo: 'Nome' },
    { id: 3, atributo: 'estoque_minimo', rotulo: 'Estoque mínimo' },
    { id: 4, atributo: 'estoque_maximo', rotulo: 'Estoque máximo' },
    { id: 5, atributo: 'estoque_atual', rotulo: 'Estoque atual' }
]