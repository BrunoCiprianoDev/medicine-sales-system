import { urlServer } from "../../../serverConfig"

export const parameters = [
    {id: 1, attribute:'mercadoriaId', label:'Mercadoria', type: 'autoComplete', url:urlServer+"/mercadorias/", attributeVisible:'nome' },
    {id: 2, attribute:'fornecedoreId', label:'Fornecedor', type: 'autoComplete', url:urlServer+"/fornecedores/", attributeVisible:'nome' },
    {id: 3, attribute:'lote', label:'Lote', type: 'text'},
    {id: 4, attribute: 'data_compra', label:'Data da compra', type: 'date' },
    {id: 5, attribute:'numeroNotaFiscal', label:'Número nota fiscal', type: 'number' },
    {id: 6, attribute:'valorNotaFiscal', label:'Valor da nota fiscal', type: 'number' },
    {id: 7, attribute:'validade', label:'Validade', type: 'date' },
    {id: 8, attribute:'unidades', label:'Unidades', type: 'number' },
    {id: 9, attribute:'custo_unidade', label:'Custo p/unidade', type: 'number' },
    {id: 10, attribute:'local', label:'Local', type: 'textarea' },
]