import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

//Pages
import { Funcionarios } from './pages/funcionarios/Funcionarios';



function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <div className='Header'><Header/></div>
       <div className='Sidebar'><Sidebar/></div>
        <div className='Contend'>
          <Routes>
            <Route path="/funcionarios" element={<Funcionarios/>}/>
          </Routes>
        </div>
        <div className='Footer'><Footer/></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
