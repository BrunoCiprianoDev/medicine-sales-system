import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

//Pages/funcionarios
import {ListFuncionarios}  from './pages/funcionarios/listFuncionarios/ListFuncionarios';
import FormFuncionarios from './pages/funcionarios/formFuncionarios/FormFuncionarios';
import DetailFuncionarios from './pages/funcionarios/detailFuncionarios/DetailFuncionarios';

//Pages/Categorias
import ListCategorias from './pages/categorias/listCategorias/ListCategorias'
import FormCategorias from './pages/categorias/formCategorias/FormCategorias'
import DetailCategorias from './pages/categorias/detailCategorias/DetailCategorias'

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
            <Route path="/funcionarios/:id" element={<DetailFuncionarios />}/>
            <Route path='/funcionarios/edit/:id' element={<FormFuncionarios edit={true}/>}/>
            
            <Route path='/categorias/' element={<ListCategorias filter={false}/>}/>
            <Route path='/categorias/search/' element={<ListCategorias filter={true}/>}/>
            <Route path='/categorias/form' element={<FormCategorias edit={false}/>}/>
            <Route path='/categorias/:id' element={<DetailCategorias/>}/>
            <Route path='/categorias/edit/:id' element={<FormCategorias edit={true}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
