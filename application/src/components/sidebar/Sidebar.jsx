import { React, useContext } from 'react'
import { OptionContext } from '../../context/OptionContext'
import styles from './Sidebar.module.css'

import { NavLink } from 'react-router-dom'
import { parametrosSideBar } from './pr_sidebar'

const Sidebar = () => {

  const { setOption } = useContext(OptionContext);

  return (
    <div className={styles['MainContainer']}>
      <nav className={styles['NavContainer']}>
        {
          parametrosSideBar.map((parameter) => (
            <NavLink
              key={parameter.id}
              className={styles.NavLink}
              to={parameter.to}
              onClick={() => setOption(parameter.value)}>
              <img src={parameter.icon} alt={parameter.name} />
              <p>{parameter.name}</p>
            </NavLink>
          ))
        }
      </nav>
    </div>
  )
}

export default Sidebar