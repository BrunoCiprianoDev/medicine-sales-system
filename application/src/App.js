import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


//Components
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <div className='Header'><Header/></div>
       <div className='Sidebar'><Sidebar/></div>
        <div className='Contend'>
          <Routes>
            <Route></Route>
          </Routes>
        </div>
        <div className='Footer'><Footer/></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
