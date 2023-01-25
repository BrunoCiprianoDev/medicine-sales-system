//CSS
import './App.css';

//Routes
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

//Pages/funcionarios
import ListaFuncionarios  from './pages/funcionarios/listaFuncionarios/ListaFuncionarios';
import FormularioFuncionarios from './pages/funcionarios/formularioFuncionarios/FormularioFuncionarios';
import DetailFuncionarios from './pages/funcionarios/detalheFuncionarios/DetalheFuncionarios';

//Pages/Descontos
import FormularioDescontos from './pages/descontos/formularioDescontos/FormularioDescontos' 
import ListaDescontos from './pages/descontos/listaDescontos/ListaDescontos';
import DetalheDescontos from './pages/descontos/detalheDescontos/DetalheDescontos';

//Pages/Fornecedores
import ListaFornecedores from './pages/fornecedores/listaFornecedores/ListaFornecedores';
import FormularioFornecedores from './pages/fornecedores/formularioFornecedores/FormularioFornecedores';
import DetalheFornecedores from './pages/fornecedores/detalheFornecedores/DetalheFornecedores';

//Pages/Clientes
import ListaClientes from './pages/clientes/listaClientes/ListaClientes';
import FormularioClientes from './pages/clientes/formularioClientes/FormularioClientes';
import DetalheClientes from './pages/clientes/detalheClientes/DetalheClientes';

//Pages/Mercadorias
import ListaMercadorias from './pages/mercadorias/listaMercadorias/ListaMercadorias';
import DepartamentosMercadorias from './pages/mercadorias/departamentosMercadorias/DepartamentosMercadorias';
import FormularioMercadorias from './pages/mercadorias/formularioMercadorias/FormularioMercadorias';
import DetalheMercadorias from './pages/mercadorias/detalheMercadorias/DetalheMercadorias';

//Consultar preco
import ConsultarPrecos from './pages/consultarprecos/formularioConsultarPrecos/ConsultarPrecos';
import ListaConsultarPrecos from './pages/consultarprecos/listaConsultarPrecos/ListaConsultarPrecos';

//Estoque
import ListEstoque from './pages/estoque/listaEstoque/ListaEstoque';
import DetalheEstoque from './pages/estoque/detalheEstoque/DetalheEstoque';
import LoteEdit from './pages/estoque/loteEdit/LoteEdit';

//Perdas
import DetalhePerdas from './pages/perdas/detalhePerdas/DetalhePerdas';
import FormularioPerdas from './pages/perdas/formularioPerdas/FormularioPerdas';
import ListaPerdas from './pages/perdas/listaPerdas/ListaPerdas';

//Venda
import FormularioVendas from './pages/vendas/formularioVendas/FormularioVendas';
import ListaVendas from './pages/vendas/listaVendas/ListaVendas';
import DetalheVendas from './pages/vendas/detalheVendas/DetalheVendas'

//Devolucoes
import FormularioDevolucoes from './pages/devolucoes/formularioDevolucoes/FormularioDevolucoes';
import ListaDevolucoes from './pages/devolucoes/listaDevolucoes/ListaDevolucoes';
import DetalheDevolucoes from './pages/devolucoes/detalheDevolucoes/DetalheDevolucoes';

//Dashboard
import Dashboard from './pages/dashBoard/Dashboard';

//Relatórios
import Relatorios from './pages/relatorios/Relatorios';
import FormRelatorioEstoque from './pages/relatorios/formsRelatorios/FormRelatorioEstoque';
import FormRelatorioClientes from './pages/relatorios/formsRelatorios/FormRelatorioClientes';
import FormRelatorioDevolucoes from './pages/relatorios/formsRelatorios/FormRelatorioDevolucoes';
import FormRelatorioMercadorias from './pages/relatorios/formsRelatorios/FormRelatorioMercadorias';
import FormRelatorioFornecedor from './pages/relatorios/formsRelatorios/FormRelatorioFornecedor';
import FormRelatorioFuncionarios from './pages/relatorios/formsRelatorios/FormRelatorioFuncionarios';

//Compras
import ListaCompras from './pages/compras/listaCompras/ListaCompras';
import DetalheCompras from './pages/compras/detalheCompras/DetalheCompras';
import FormularioCompras from './pages/compras/formularioCompras/FormularioCompras';

//Página 404
import Pagina404 from './pages/pagina404/Pagina404';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter  basename="/">
        <div className='Header'><Header/></div>
       <div className='Sidebar'><Sidebar/></div>
        <div className='Contend'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>

            <Route path='/funcionarios/search/' element={<ListaFuncionarios />}/>
            <Route path='/funcionarios/form/:id' element={<FormularioFuncionarios/>}/>
            <Route path='/funcionarios/:id' element={<DetailFuncionarios />}/>

            <Route path='/fornecedores/search/' element={<ListaFornecedores/>}/>
            <Route path='/fornecedores/form/:id' element={<FormularioFornecedores/>}/>
            <Route path='/fornecedores/:id' element={<DetalheFornecedores/>}/>

            <Route path='/compras/search/' element={<ListaCompras/>}/>
            <Route path='/compras/form/' element={<FormularioCompras/>}/>
            <Route path='/compras/detail/:id' element={<DetalheCompras/>}/>

            <Route path='/estoque/:id' element={<DetalheEstoque/>}/>
            <Route path='/estoque/search' element={<ListEstoque/>}/>
            <Route path='/estoque/lote/:id' element={<LoteEdit/>}/>
            
            <Route path='/perdas/:id' element={<DetalhePerdas/>}/>
            <Route path='/perdas/form/:id' element={<FormularioPerdas/>}/>
            <Route path='/perdas/search/' element={<ListaPerdas/>}/>

            <Route path='/clientes/search/' element={<ListaClientes/>}/>
            <Route path='/clientes/form/:id' element={<FormularioClientes/>}/>
            <Route path='/clientes/:id' element={<DetalheClientes/>}/>

            <Route path='/mercadorias/departamentos/' element={<DepartamentosMercadorias/>}/>
            <Route path='/mercadorias/search/' element={<ListaMercadorias/>}/>
            <Route path='/mercadorias/detail/:id' element={<DetalheMercadorias/>}/>
            <Route path='/mercadorias/form/:id' element={<FormularioMercadorias/>}/>

            <Route path='/vendas/form/:id' element={<FormularioVendas />}/>
            <Route path='/vendas/search' element={<ListaVendas/>}/>
            <Route path='/vendas/detail/:id' element={<DetalheVendas/>}/>

            <Route path='/devolucoes/search' element={<ListaDevolucoes />}/>
            <Route path='/devolucoes/form/:id' element={<FormularioDevolucoes/>}/>
            <Route path='/devolucoes/detail/:id' element={<DetalheDevolucoes />}/>
            
            <Route path='/consultas/' element={<ConsultarPrecos/>}/>
            <Route path='/consulta/search/' element={<ListaConsultarPrecos/>}/>

            <Route path='/descontos/search' element={<ListaDescontos/>}/>
            <Route path='/descontos/form/:id' element={<FormularioDescontos/>}/>
            <Route path='/descontos/detail/:id' element={<DetalheDescontos/>}/>

            <Route path='/relatorios/' element={<Relatorios/>}/>
            <Route path='/relatorio/estoque' element={<FormRelatorioEstoque/>}/>
            <Route path='/relatorio/devolucoes' element={<FormRelatorioDevolucoes/>}/>
            <Route path='/relatorio/clientes' element={<FormRelatorioClientes/>}/>
            <Route path='/relatorio/mercadorias' element={<FormRelatorioMercadorias/>}/>
            <Route path='/relatorio/fornecedores' element={<FormRelatorioFornecedor/>}/>
            <Route path='/relatorio/funcionarios' element={<FormRelatorioFuncionarios/>}/>
          
            <Route path='*' element={<Pagina404/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
