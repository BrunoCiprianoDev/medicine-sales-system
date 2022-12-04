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
import ListCategorias from './pages/categorias/listCategorias/ListCategorias';
import FormCategorias from './pages/categorias/formCategorias/FormCategorias';
import DetailCategorias from './pages/categorias/detailCategorias/DetailCategorias';

//Pages/Fornecedores
import ListFornecedores from './pages/fornecedores/listFornecedores/ListFornecedores';
import FormFornecedores from './pages/fornecedores/formFornecedores/FormFornecedores';
import DetailFornecedores from './pages/fornecedores/detailFornecedores/DetailFornecedores';

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

            <Route path='/fornecedores/' element={<ListFornecedores filter={false}/>}/>
            <Route path='/fornecedores/search/' element={<ListFornecedores filter={true}/>}/>
            <Route path='/fornecedores/form' element={<FormFornecedores edit={false}/>}/>
            <Route path='/fornecedores/:id' element={<DetailFornecedores/>}/>
            <Route path='/fornecedores/edit/:id' element={<FormFornecedores edit={true}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
