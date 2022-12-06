import React from 'react';
import styles from './Cadastro.module.css'

class App extends React.Component {

    render() {
        return (
            <div className={styles.MainContainer}>
                <form action="" className={styles.FormCadastro}>
                    <label htmlFor="">E-mail
                        <input type="email" />
                    </label>
                    <label htmlFor="">Senha
                        <input type="password" />
                    </label>
                    <label htmlFor="">Confirmar senha
                        <input type="password" />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )
    }

}

export default App;

