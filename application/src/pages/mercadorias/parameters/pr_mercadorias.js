import { urlServer } from "../../../serverConfig";

export const parameters = [
    {id: 1, attribute:'nome', label:'Nome', type: 'text'},
    {id: 2, attribute:'codigo', label:'Código', type: 'text' },
    {id: 3, attribute:'departamento', label:'Departamento', type: 'select', 
      options:[
        {id:1, value: 'MEDICAMENTO'},
        {id:2, value: 'SUPLEMENTOS'},
        {id:3, value: 'DERMATOLOGICO'},
        {id:4, value: 'HIGIENE'},
        {id:5, value: 'GERIATRIA'},
        {id:6, value: 'INFANTIL'},
        {id:7, value: 'BELEZA'},
        {id:8, value: 'OUTROS'}
      ]
    },
    {id: 4, attribute:'classificacao', label:'Classificação', type: 'select', 
      options:[
        {id:1, value: 'LIVRE'},
        {id:2, value: 'GENERICO'},
        {id:3, value: 'SIMILAR'},
        {id:4, value: 'REFERENCIA'},
      ]
    },
    {id: 5, attribute:'marca', label:'Marca', type: 'text' },
    {id: 6, attribute:'princ_ativo', label:'Principio ativo', type: 'text' },
    {id: 7, attribute:'grupoFarmacologico', label: 'Grupos Framacologicos', type: 'selectBox', url:urlServer+'/gruposFarmacologicos/'},
    {id: 8, attribute:'tarja', label:'Tarja:', type: 'select', 
      options:[
        {id:4, value: 'SEM TARJA'},
        {id:1, value: 'AMARELA'},
        {id:2, value: 'VERMELHA'},
        {id:3, value: 'PRETA'},        
    ]
    },
    {id: 9, attribute:'peresivel', label:'Peresivel', type: 'select', 
      options:[
        {id:1, value: 'SIM'},
        {id:2, value: 'NÃO'},     
     ]
    },
    {id: 10, attribute:'temp_armazenamento', label:'Temperatura de armazenamento', type: 'select', 
      options:[
        {id:1, value: '15° a 30°'},
        {id:2, value: '0° a 15°'},
        {id:3, value: '-15° a 0°'},      
    ]
    },
    {id: 11, attribute:'registro_ms', label:'Registro MS', type: 'text' },
    {id: 12, attribute:'estoque_minimo', label:'Estoque minimo', type: 'number' },
    {id: 13, attribute:'estoque_maximo', label:'Estoque máximo', type: 'number' },
    {id: 14, attribute:'valor_venda', label:'Valor de venda', type: 'number' },
    {id: 15, attribute:'grupoDesconto', label: 'Grupo de desconto', type: 'selectBox', url: `${urlServer}/grupoDescontos/`},
    {id: 16, attribute:'comissao', label:'Percentual de comissão', type: 'number' },
    {id: 17, attribute:'pmc', label:'PMC', type: 'number' },
    {id: 18, attribute:'descricao', label:'Descricao', type: 'textarea' }
  ]