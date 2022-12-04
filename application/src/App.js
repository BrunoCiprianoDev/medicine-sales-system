import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

//Pages
import {ListFuncionarios}  from './pages/funcionarios/listFuncionarios/ListFuncionarios';
import FormFuncionarios from './pages/funcionarios/formFuncionarios/FormFuncionarios';
import UpdateFuncionarios from './pages/funcionarios/updateFuncionarios/UpdateFuncionarios';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <div className='Header'><Header/></div>
       <div className='Sidebar'><Sidebar/></div>
        <div className='Contend'>
          <Routes>
            <Route path="/funcionarios/" element={<ListFuncionarios filter={false}/>}/>
            <Route path="/funcionarios/search/" element={<ListFuncionarios filter={true}/>}/>
            <Route path="/funcionarios/form" element={<FormFuncionarios edit={false}/>}/>
            <Route path="/funcionarios/:id" element={<FormFuncionarios edit={true}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
