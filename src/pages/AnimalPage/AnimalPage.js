import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import './AnimalPage.css';
import downloadIcon from '../../Assets/download-icon.png'; 

function AnimalPage() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const navigate = useNavigate();

  const handleCheckboxChange = (event, animal) => {
    if (event.target.checked) {
      setSelectedAnimal(animal);
    } else {
      setSelectedAnimal(null);
    }
  };

  const handleEditClick = () => {
    if (selectedAnimal) {
      navigate(`/editar-animal/${selectedAnimal.sisbov}`);
    } else {
      alert('Por favor, selecione um animal para editar.');
    }
  };

  const handleCreateClick = () => {
    navigate('/criar-animal');
  };

  const handleDeleteClick = () => {
    if (selectedAnimal) {
      alert(`Animal com Sisbov ${selectedAnimal.sisbov} excluído com sucesso.`);
      setSelectedAnimal(null);
    } else {
      alert('Por favor, selecione um animal para excluir.');
    }
  };

  const handleDownloadClick = () => {
    const data = animals.map(animal => ({
      Chip: animal.chip,
      Sisbov: animal.sisbov,
      Sexo: animal.sexo,
      Raça: animal.raca,
      Era: animal.era,
      Curral: animal.curral,
      Lote: animal.lote,
      Peso: animal.peso,
      Status: animal.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Animais');
    XLSX.writeFile(workbook, 'animais.xlsx');
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
  ];

  return (
    <div className="container-pagina-animal">
      <h1>Animal</h1>
      <div className="acoes-animal">
        <button className="botao-criar" onClick={handleCreateClick}>
          Criar
        </button>
        <button className="botao-editar" onClick={handleEditClick}>
          Editar
        </button>
        <button className="botao-excluir" onClick={handleDeleteClick}>
          Excluir
        </button>
        <div className="busca-wrapper">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="input-pesquisa"
          />
          <button className="botao-filtrar">🔍</button>
        </div>
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
      <div className="botao-download-wrapper">
        <button className="botao-download" onClick={handleDownloadClick}>
          <img src={downloadIcon} alt="Download" className="download-icon" />
        </button>
      </div>
    </div>
  );
}

export default AnimalPage;
