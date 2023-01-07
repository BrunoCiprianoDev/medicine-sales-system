import { urlServer } from "../../../serverConfig"

export const parameters = [
    {id: 1, attribute:'mercadoriaId', label:'Mercadoria', type: 'autoComplete', url:urlServer+"/mercadorias/", attributeVisible:'nome' },
    {id: 2, attribute:'fornecedoreId', label:'Fornecedor', type: 'autoComplete', url:urlServer+"/fornecedores/", attributeVisible:'nome' },
    {id: 3, attribute:'lote', label:'Lote', type: 'text'},
    {id: 4, attribute:'validade', label:'Validade', type: 'date' },
    {id: 5, attribute:'unidades', label:'Unidades', type: 'number' },
    {id: 6, attribute:'custo_unidade', label:'Custo p/unidade', type: 'number' },
]