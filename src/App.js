import './App.css';
import Home from './components/Home'
import Formulario from './components/Formulario'
import Cadastros from './components/Cadastros'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="formulario/" element={<Formulario />} />
          <Route path="cadastros/" element={<Cadastros />} />
        </Routes>
      </BrowserRouter>



     
    </div>

  );
}

export default App;
