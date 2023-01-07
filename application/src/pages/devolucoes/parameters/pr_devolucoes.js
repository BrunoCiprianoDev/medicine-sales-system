import { urlServer } from "../../../serverConfig"

export const parameters = [
    {id: 1, attribute:'data', label:'Data da devolucao', type: 'date' },
    {id: 2, attribute:'vendaId', label:'Venda', type: 'autoComplete', url:urlServer+"/vendas/", attributeVisible:'data' },
    {id: 3, attribute:'mercadoriaId', label:'Mercadoria devolvida', type: 'autoComplete', url:urlServer+"/mercadorias/", attributeVisible:'nome' },  
    {id: 4, attribute:'unidades', label:'Unidades de devolvidas', type: 'number' },
    {id: 5, attribute:'valorDevolvido', label:'Valor devolvido', type: 'number' },
]