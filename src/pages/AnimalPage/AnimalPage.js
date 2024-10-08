import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimalPage.css';

function AnimalPage() {
  const [selectedAnimal, setSelectedAnimal] = useState(null); // Estado para armazenar o animal selecionado
  const navigate = useNavigate();

  // Função para capturar a seleção de um checkbox
  const handleCheckboxChange = (event, animal) => {
    if (event.target.checked) {
      setSelectedAnimal(animal); // Armazena o animal selecionado
    } else {
      setSelectedAnimal(null); // Desmarca o animal selecionado
    }
  };

  // Função para redirecionar para a página de edição
  const handleEditClick = () => {
    if (selectedAnimal) {
      navigate(`/editar-animal/${selectedAnimal.sisbov}`); // Redireciona para a página de edição
    } else {
      alert('Por favor, selecione um animal para editar.'); // Alerta caso nenhum animal esteja selecionado
    }
  };

  const animals = [
    {
      chip: '982000366448014',
      sisbov: '105520419419885',
      sexo: 'Macho',
      raca: 'Nelore',
      era: '13 - 24 Meses',
      curral: 'A-01',
      lote: '11001',
      peso: 450,
      status: 'D',
    },
    // Adicione mais animais conforme necessário
  ];

  return (
    <div className="container-pagina-animal">
      <h1>Animal</h1>
      <div className="acoes-animal">
        <button className="botao-editar" onClick={handleEditClick}>
          Editar
        </button>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="input-pesquisa"
        />
        <button className="botao-filtrar">🔍</button>
        <button className="botao-filtrar">⚙️</button>
      </div>
      <table className="tabela-animal">
        <thead>
          <tr>
            <th></th>
            <th>Chip</th>
            <th>Sisbov</th>
            <th>Sexo</th>
            <th>Raça</th>
            <th>Era</th>
            <th>Curral</th>
            <th>Lote</th>
            <th>Peso</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.sisbov}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, animal)}
                />
              </td>
              <td>{animal.chip}</td>
              <td>{animal.sisbov}</td>
              <td>{animal.sexo}</td>
              <td>{animal.raca}</td>
              <td>{animal.era}</td>
              <td>{animal.curral}</td>
              <td>{animal.lote}</td>
              <td>{animal.peso}</td>
              <td>{animal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalPage;
