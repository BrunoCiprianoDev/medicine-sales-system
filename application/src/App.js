import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

//Pages/funcionarios
import {ListFuncionarios}  from './pages/funcionarios/listFuncionarios/ListFuncionarios';
import FormFuncionarios from './pages/funcionarios/formFuncionarios/FormFuncionarios';
import DetailFuncionarios from './pages/funcionarios/detailFuncionarios/DetailFuncionarios';

//Pages/Descontos
import FormDescontos from './pages/descontos/formDescontos/FormDescontos' 
import ListDescontos from './pages/descontos/listDescontos/ListDescontos';
import DetailDescontos from './pages/descontos/detailDescontos/DetailDescontos';

//Pages/Fornecedores
import ListFornecedores from './pages/fornecedores/listFornecedores/ListFornecedores';
import FormFornecedores from './pages/fornecedores/formFornecedores/FormFornecedores';
import DetailFornecedores from './pages/fornecedores/detailFornecedores/DetailFornecedores';

//Pages/Clientes
import ListClientes from './pages/clientes/listClientes/ListClientes';
import FormClientes from './pages/clientes/formClientes/FormClientes';
import DetailClientes from './pages/clientes/detailClientes/DetailClientes';

//Pages/Mercadorias
import ListProdutos from './pages/mercadorias/listMercadorias/ListMercadorias';
import DepartamentosMercadorias from './pages/mercadorias/departamentosMercadorias/DepartamentosMercadorias';
import FormMercadorias from './pages/mercadorias/formMercadorias/FormMercadorias';
import DetailMercadorias from './pages/mercadorias/detailMercadorias/DetailMercadorias';

//Consultar preco
import ConsultarPrecos from './pages/consultarprecos/formConsultarPrecos/ConsultarPrecos';
import ListConsultarPrecos from './pages/consultarprecos/listConsultarPrecos/ListConsultarPrecos';

//Estoque
import FormEstoque from './pages/estoque/formEstoque/FormEstoque';
import ListEstoque from './pages/estoque/listEstoque/ListEstoque';
import DetailEstoque from './pages/estoque/detailEstoque/DetailEstoque';

//Venda
import FormVendas from './pages/vendas/formVendas/FormVendas';
import ListVendas from './pages/vendas/listVendas/ListVendas';
import DetailVendas from './pages/vendas/detailVendas/DetailVendas'

//Devolucoes
import FormDevolucoes from './pages/devolucoes/formDevolucoes/FormDevolucoes';
import ListDevolucoes from './pages/devolucoes/listDevolucoes/ListDevolucoes';
import DetailDevolucoes from './pages/devolucoes/detailDevolucoes/DetailDevolucoes';

//Dashboard


import LoteEdit from './pages/estoque/loteEdit/LoteEdit';

//Notificacoes
import Notificacoes from './pages/notificacoes/Notificacoes';

//Relatórios
import Relatorios from './pages/relatorios/Relatorios';
import FormRelatorioEstoque from './pages/relatorios/formsRelatorios/FormRelatorioEstoque';
import FormRelatorioClientes from './pages/relatorios/formsRelatorios/FormRelatorioClientes';
import FormRelatorioDevolucoes from './pages/relatorios/formsRelatorios/FormRelatorioDevolucoes';
import FormRelatorioMercadorias from './pages/relatorios/formsRelatorios/FormRelatorioMercadorias';
import FormRelatorioFornecedor from './pages/relatorios/formsRelatorios/FormRelatorioFornecedor';
import FormRelatorioFuncionarios from './pages/relatorios/formsRelatorios/FormRelatorioFuncionarios';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <div className='Header'><Header/></div>
       <div className='Sidebar'><Sidebar/></div>
        <div className='Contend'>
          <Routes>

            <Route path='/funcionarios/' element={<ListFuncionarios filter={false}/>}/>
            <Route path='/funcionarios/search/' element={<ListFuncionarios filter={true}/>}/>
            <Route path='/funcionarios/form' element={<FormFuncionarios edit={false}/>}/>
            <Route path='/funcionarios/:id' element={<DetailFuncionarios />}/>
            <Route path='/funcionarios/edit/:id' element={<FormFuncionarios edit={true}/>}/>

            <Route path='/fornecedores/' element={<ListFornecedores filter={false}/>}/>
            <Route path='/fornecedores/search/' element={<ListFornecedores filter={true}/>}/>
            <Route path='/fornecedores/form' element={<FormFornecedores edit={false}/>}/>
            <Route path='/fornecedores/:id' element={<DetailFornecedores/>}/>
            <Route path='/fornecedores/edit/:id' element={<FormFornecedores edit={true}/>}/>

            <Route path='/estoque/form/' element={<FormEstoque/>}/>
            <Route path='/estoque/:id' element={<DetailEstoque/>}/>
            <Route path='/estoque/search' element={<ListEstoque/>}/>
            <Route path='/estoque/lote/:id' element={<LoteEdit/>}/>
          
            <Route path='/clientes/' element={<ListClientes filter={false}/>}/>
            <Route path='/clientes/search/' element={<ListClientes filter={true}/>}/>
            <Route path='/clientes/form' element={<FormClientes edit={false}/>}/>
            <Route path='/clientes/:id' element={<DetailClientes/>}/>
            <Route path='/clientes/edit/:id' element={<FormClientes edit={true}/>}/>

            <Route path='/mercadorias/' element={<DepartamentosMercadorias/>}/>
            <Route path='/listMercadorias/search/' element={<ListProdutos/>}/>
            <Route path='mercadorias/detail/:id' element={<DetailMercadorias/>}/>
            <Route path='/mercadorias/edit/:id' element={<FormMercadorias edit={true}/>}/>
            <Route path='/mercadorias/form/' element={<FormMercadorias edit={false}/>}/>

            <Route path='/vendas/form' element={<FormVendas />}/>
            <Route path='/vendas/search' element={<ListVendas/>}/>
            <Route path='/vendas/detail/:id' element={<DetailVendas/>}/>

            <Route path='/devolucoes/' element={<ListDevolucoes filter={false}/>}/>
            <Route path='/devolucoes/search' element={<ListDevolucoes filter={true}/>}/>
            <Route path='/devolucoes/form/:id' element={<FormDevolucoes edit={false}/>}/>
            <Route path='/devolucoes/edit/:id' element={<FormDevolucoes edit={true}/>}/>
            <Route path='/devolucoes/detail/:id' element={<DetailDevolucoes />}/>
            
            <Route path='/consultas/' element={<ConsultarPrecos/>}/>
            <Route path='/consulta/search/' element={<ListConsultarPrecos/>}/>

            <Route path='/descontos/' element={<ListDescontos/>}/>
            <Route path='descontos/search' element={<ListDescontos filter={true}/>}/>
            <Route path='/descontos/form/' element={<FormDescontos edit={false}/>}/>
            <Route path='/descontos/edit/:id' element={<FormDescontos edit={true}/>}/>
            <Route path='/descontos/detail/:id' element={<DetailDescontos/>}/>

            <Route path='/notificacoes/' element={<Notificacoes/>}/>

            <Route path='/relatorios/' element={<Relatorios/>}/>
            <Route path='/relatorio/estoque' element={<FormRelatorioEstoque/>}/>
            <Route path='/relatorio/devolucoes' element={<FormRelatorioDevolucoes/>}/>
            <Route path='/relatorio/clientes' element={<FormRelatorioClientes/>}/>
            <Route path='/relatorio/mercadorias' element={<FormRelatorioMercadorias/>}/>
            <Route path='/relatorio/fornecedores' element={<FormRelatorioFornecedor/>}/>
            <Route path='/relatorio/funcionarios' element={<FormRelatorioFuncionarios/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
