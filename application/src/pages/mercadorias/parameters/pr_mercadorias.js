
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
    {id: 4, attribute:'classificacao', label:'Classificação:', type: 'select', 
      options:[
        {id:1, value: 'LIVRE'},
        {id:2, value: 'GENERICO'},
        {id:3, value: 'SIMILAR'},
        {id:4, value: 'REFERENCIA'},
      ]
    },
    {id: 5, attribute:'marca', label:'Marca', type: 'text' },
    {id: 6, attribute:'princ_ativo', label:'Principio ativo', type: 'text' },
    {id: 7, attribute:'grupo', label:'Grupo farmacológico', type: 'select', 
    options:[
      {id:1, value: 'LIVRE'},
      {id:2, value: 'ANALGÉSICO E AINTIPIRÉTICO'},
      {id:3, value: 'ANESTÉSICO'},
      {id:4, value: 'ANTIALÉRGICO'},
      {id:5, value: 'ANTIDOTO EXÓGENO'},
      {id:6, value: 'ANTI-INFLAMATÓRIO'},
      {id:7, value: 'ANTIMICROBIANOS'},
      {id:8, value: 'AMEBICIDA E GIARDICIDA'},
      {id:9, value: 'ANTIVERTIGINOSO'},
      {id:10, value: 'VITAMINAS'},
      {id:11, value: 'CORREÇÃO DE ELETROLITOS'},
      {id:12, value: 'SUPLEMENTO MINERAL'},
      {id:13, value: 'SOLUÇÃO INTRAVENOSA'},
      {id:14, value: 'CARGIOLOGIA'},
      {id:15, value: 'SISTEMA DIGESTIVO'},
      {id:16, value: 'SISTEMA ENDÓCRINO'},
      {id:17, value: 'HORMÔNIO'},
      {id:18, value: 'TRATAMETNO OSTEOPOROSE'},
      {id:19, value: 'SISTEMA RESPIRATORIO'},
      {id:20, value: 'SISTEMA SANGUINEO'},
      {id:21, value: 'SISTEMA NERVOSO'},
      {id:22, value: 'SISTEMA OCULAR'},
      {id:23, value: 'DERMATOLOGICO'},
      {id:24, value: 'SISTEMA UROGENITAL'},
      {id:25, value: 'HOMEOPÁTICO'},
    ]},
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
    {id: 15, attribute:'desconto', label:'Percentual de desconto', type: 'number' },
    {id: 16, attribute:'comissao', label:'Percentual de comissão', type: 'number' },
    {id: 17, attribute:'pmc', label:'PMC', type: 'number' },
    {id: 18, attribute:'descricao', label:'Descricao', type: 'textarea' }
  ]