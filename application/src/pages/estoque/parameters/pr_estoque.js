import { urlServer } from "../../../serverConfig"

export const parameters = [
    {id: 1, attribute:'mercadoriaId', label:'Mercadoria', type: 'autoComplete', url:urlServer+"/mercadorias/", attributeVisible:'nome' },
    {id: 2, attribute:'fornecedoreId', label:'Fornecedor', type: 'autoComplete', url:urlServer+"/fornecedores/", attributeVisible:'nome' },
    {id: 3, attribute:'numeroNotaFiscal', label:'Número nota fiscal', type: 'number' },
    {id: 4, attribute:'valorNotaFiscal', label:'Valor da nota fiscal', type: 'number' },
    {id: 5, attribute:'lote', label:'Lote', type: 'text'},
    {id: 6, attribute:'validade', label:'Validade', type: 'date' },
    {id: 7, attribute:'unidades', label:'Unidades', type: 'number' },
    {id: 8, attribute:'custo_unidade', label:'Custo p/unidade', type: 'number' },
    {id: 9, attribute:'local', label:'Local', type: 'textarea' },
]