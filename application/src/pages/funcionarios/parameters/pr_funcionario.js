export const parameters = [
    {id: 1, attribute:'nome', label:'Nome', type: 'text'},
    {id: 2, attribute:'cpf', label:'CPF', type: 'text' },
    {id: 3, attribute:'dt_nascimento', label:'Data nascimento', type: 'date' },
    {id: 4, attribute:'cep', label:'CEP', type: 'text'},
    {id: 5, attribute:'cidade', label:'Cidade', type: 'text'},
    {id: 6, attribute:'bairro', label:'Bairro', type: 'text'},
    {id: 7, attribute:'logradouro', label:'Logradouro', type: 'text'},
    {id: 8, attribute:'numero', label:'Número', type: 'text' },
    {id: 10, attribute:'complemento', label:'Complemento', type: 'text'},
    {id: 11, attribute:'telefone_um', label:'Telefone um', type: 'text'},
    {id: 12, attribute:'telefone_dois', label:'Telefone dois', type: 'text'},
    {id: 13, attribute:'email', label:'E-mail', type: 'text'},
    {id: 14, attribute:'dt_admissao', label:'Data admissão', type: 'date'},
    {id: 15, attribute:'funcao', label:'Função', type: 'select', 
      options: [
        {id: 1, value: 'GERENTE'},
        {id: 2, value: 'VENDEDOR'}
      ]
    },
    {id: 16, attribute: 'senha', label: 'Senha', type: 'password'}
  ]