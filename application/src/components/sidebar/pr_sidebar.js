
import iconeHome from '../../assets/icon-home.png'
import iconeFuncionario from '../../assets/icon-funcionario.png'
import iconeVendas from '../../assets/icon-vendas.png'
import iconeMercadorias from '../../assets/icon-mercadorias.png'
import iconeFornecedores from '../../assets/icon-fornecedores.png'
import iconeEstoque from '../../assets/icon-estoque.png'
import iconePreco from '../../assets/icon-preco.png'
import iconeDevolucao from '../../assets/icon-devolucao.png'
import iconeClientes from '../../assets/icon-clientes.png'
import iconeRelatorios from '../../assets/icon-relatorio.png'
import iconeNotificacoes from '../../assets/icon-notificacao.png'
import iconeDesconto from '../../assets/icon-desconto.png'

export const parametrosSideBar = [
    {id: 1, name: 'Painel principal', to: '/', value:'DASHBOARD', icon:iconeHome},
    {id: 2, name: 'Funcionários', to:"/funcionarios/search/?q=", value:'FUNCIONARIOS', icon:iconeFuncionario},
    {id: 3, name: 'Descontos', to: '/descontos/search/?q=', value:'DESCONTOS', icon:iconeDesconto},
    {id: 4, name: 'Mercadorias', to: '/mercadorias/departamentos/', value:'MERCADORIAS', icon:iconeMercadorias},
    {id: 5, name: 'Fornecedores', to: '/fornecedores/search/?q=', value:'FORNECEDORES', icon:iconeFornecedores},
    {id: 6, name: 'Estoque', to: '/estoque/search/?q=', value:'ESTOQUE', icon:iconeEstoque},
    {id: 7, name: 'Consultar preço', to: '/consultas/', value:'CONSULTAR_PRECO', icon:iconePreco},
    {id: 8, name: 'Vendas', to: '/vendas/search/?q=', value:'VENDAS', icon:iconeVendas},
    {id: 9, name: 'Devoluções', to: '/devolucoes/search/?q=', value:'DEVOLUCOES', icon:iconeDevolucao},
    {id: 10, name: 'Clientes', to: '/clientes/search/?q=', value:'CLIENTES', icon:iconeClientes},
    {id: 11, name: 'Relatórios', to: '/relatorios/', value:'RELATORIOS', icon:iconeRelatorios},
    {id: 12, name: 'Notificações', to: '/notificacoes/search/?=', value:'NOTIFICACOES', icon:iconeNotificacoes},
  ]
  