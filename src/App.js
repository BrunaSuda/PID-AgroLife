import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AnimalPage from './pages/AnimalPage/AnimalPage';
import EditAnimal from './pages/AnimalPage/EditAnimal';
import CreateAnimal from './pages/AnimalPage/CreateAnimal'; // Importe a página de criação

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

        {/* Outras rotas podem ser adicionadas aqui conforme necessidade */}
      </Routes>
    </Router>
  );
}

export default App;
