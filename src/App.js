import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AnimalPage from './pages/AnimalPage/AnimalPage';
import EditAnimal from './pages/AnimalPage/EditAnimal';
import CreateAnimal from './pages/AnimalPage/CreateAnimal';
import IdentificacaoPage from './pages/ManejoPage/IdentificacaoPage/IdentificacaoPage';
import EditIdentificacao from './pages/ManejoPage/IdentificacaoPage/EditIdentificacao';
import CreateIdentificacao from './pages/ManejoPage/IdentificacaoPage/CreateIdentificacao'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rota para a página de listagem de animais */}
        <Route path="/animal" element={<AnimalPage />} />
        
        {/* Rota para a página de edição de um animal específico */}
        <Route path="/editar-animal/:id" element={<EditAnimal />} />
        
        {/* Rota para a página de criação de um novo animal */}
        <Route path="/criar-animal" element={<CreateAnimal />} />
        
        {/* Rota para a página de identificação */}
        <Route path="/identificacao" element={<IdentificacaoPage />} />
        
        {/* Rota para a página de edição de uma identificação específica */}
        <Route path="/editar-identificacao/:id" element={<EditIdentificacao />} />
        
        {/* Rota para a página de criação de uma nova identificação */}
        <Route path="/criar-identificacao" element={<CreateIdentificacao />} />
      </Routes>
    </Router>
  );
}

export default App;
