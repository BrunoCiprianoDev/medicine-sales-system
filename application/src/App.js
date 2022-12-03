import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

//Pages
import { Funcionarios } from './pages/funcionarios/readFuncionarios/Funcionarios';
import FormFuncionarios from './pages/funcionarios/createFuncionarios/FormFuncionarios';
import UpdateFuncionarios from './pages/funcionarios/updateFuncionarios/UpdateFuncionarios';



function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <div className='Header'><Header/></div>
       <div className='Sidebar'><Sidebar/></div>
        <div className='Contend'>
          <Routes>
            <Route path="/funcionarios" element={<Funcionarios/>}/>
            <Route path="/funcionarios/search" element={<Funcionarios/>}/>
            <Route path="/funcionarios/form" element={<FormFuncionarios/>}/>
            <Route path="/funcionarios/:id" element={<UpdateFuncionarios/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
