import {React, useState} from 'react'

//CSS
import styles from './Sidebar.module.css'
import iconFoto from '../../assets/icon-foto.png'

//Router 
import { NavLink } from 'react-router-dom'

const parameters = [
  {id: 1, name: 'Home', to: '/', value:'Home', icon:iconFoto},
  {id: 2, name: 'Funcionários', to: '/', value:'FUNCIONARIOS', icon:iconFoto},
  {id: 3, name: 'Categorias', to: '/', value:'CATEGORIAS', icon:iconFoto},
  {id: 4, name: 'Mercadorias', to: '/', value:'MERCADORIAS', icon:iconFoto},
  {id: 5, name: 'Fornecedores', to: '/', value:'FORNECEDORES', icon:iconFoto},
  {id: 6, name: 'Compras', to: '/', value:'COMPRAS', icon:iconFoto},
  {id: 7, name: 'Estoque', to: '/', value:'ESTOQUE', icon:iconFoto},
  {id: 8, name: 'Consultar preço', to: '/', value:'CONSULTAR_PRECO', icon:iconFoto},
  {id: 9, name: 'Vendas', to: '/', value:'VENDAS', icon:iconFoto},
  {id: 10, name: 'Clientes', to: '/', value:'CLIENTES', icon:iconFoto},
  {id: 11, name: 'Relatórios', to: '/', value:'RELATORIOS', icon:iconFoto},
  {id: 12, name: 'Notificações', to: '/', value:'NOTIFICACOES', icon:iconFoto},
]

const Sidebar = () => {

  const {option, setOption} = useState('');
  return (
    <div className={styles['MainContainer']}>
      <nav className={styles['NavContainer']}>
          {
            parameters.map((parameter)=>(
              <NavLink 
                key={parameter.id}
                className={styles.NavLink} 
                to={parameter.to} 
                onClick={()=>setOption(parameter.value)}>
                <img src={parameter.icon}/>
                <p>{parameter.name}</p>
              </NavLink>
            ))
          }
      </nav>
    </div>
  )
}

export default Sidebar