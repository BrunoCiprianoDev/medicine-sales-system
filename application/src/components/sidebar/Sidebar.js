import {React, useContext} from 'react'
import {OptionContext} from '../../context/OptionContext'
//CSS
import styles from './Sidebar.module.css'
import iconeHome from '../../assets/icon-home.png'
import iconeFuncionario from '../../assets/icon-funcionario.png'
import iconeVendas from '../../assets/icon-vendas.png'
import iconeMercadorias from '../../assets/icon-mercadorias.png'
import iconeFornecedores from '../../assets/icon-fornecedores.png'
import iconeEstoque from '../../assets/icon-estoque.png'
import iconePreco from '../../assets/icon-preco.png'
import iconeCompras from '../../assets/icon-compras.png'
import iconeClientes from '../../assets/icon-clientes.png'
import iconeRelatorios from '../../assets/icon-relatorio.png'
import iconeNotificacoes from '../../assets/icon-notificacao.png'
import iconeCategoria from '../../assets/icon-categoria.png'
//Router 
import { NavLink} from 'react-router-dom'


const parameters = [
  {id: 1, name: 'Home', to: '/', value:'Home', icon:iconeHome},
  {id: 2, name: 'Funcionários', to:"/funcionarios", value:'FUNCIONARIOS', icon:iconeFuncionario},
  {id: 3, name: 'Categorias', to: '/', value:'CATEGORIAS', icon:iconeCategoria},
  {id: 4, name: 'Mercadorias', to: '/', value:'MERCADORIAS', icon:iconeMercadorias},
  {id: 5, name: 'Fornecedores', to: '/', value:'FORNECEDORES', icon:iconeFornecedores},
  {id: 6, name: 'Compras', to: '/', value:'COMPRAS', icon:iconeCompras},
  {id: 7, name: 'Estoque', to: '/', value:'ESTOQUE', icon:iconeEstoque},
  {id: 8, name: 'Consultar preço', to: '/', value:'CONSULTAR_PRECO', icon:iconePreco},
  {id: 9, name: 'Vendas', to: '/', value:'VENDAS', icon:iconeVendas},
  {id: 10, name: 'Clientes', to: '/', value:'CLIENTES', icon:iconeClientes},
  {id: 11, name: 'Relatórios', to: '/', value:'RELATORIOS', icon:iconeRelatorios},
  {id: 12, name: 'Notificações', to: '/', value:'NOTIFICACOES', icon:iconeNotificacoes},
]

const Sidebar = () => {

  const {option, setOption} = useContext(OptionContext);
 
  return (
    <div className={styles['MainContainer']}>
      <nav className={styles['NavContainer']}>
          {
            parameters.map((parameter)=>(
              <NavLink 
                key={parameter.id}
                className={option === parameter.value ? styles.NavLinkActive : styles.NavLink} 
                to={parameter.to} 
                onClick={()=>setOption(parameter.value)}>
                <img src={parameter.icon} alt=''/>
                <p>{parameter.name}</p>
             </NavLink>
            ))
          }
      </nav>
    </div>
  )
}

export default Sidebar