import { urlServer } from "../../../serverConfig";

export const parametrosPerdas = [
    { id: 1, atributo: 'data', rotulo: 'Data', tipo: 'date' },
    { id: 2, atributo: 'mercadoriaId', atributoVisivel: 'nome', url: `${urlServer}/mercadorias/`, rotulo: 'Mercadoria', tipo: 'autoComplete' },
    { id: 3, atributo: 'loteId', atributoVisivel: 'lote', url: `${urlServer}/lotes/`, rotulo: 'Lote', tipo: 'autoComplete' },
    { id: 4, atributo: 'unidades', rotulo: 'Unidades', tipo: 'number' },
    { id: 5, atributo: 'funcionarioId', atributoVisivel: 'nome', url: `${urlServer}/funcionarios/`, rotulo: 'Funcionario', tipo: 'autoComplete' }
]