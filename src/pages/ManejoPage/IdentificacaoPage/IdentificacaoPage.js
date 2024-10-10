import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx'; // Importa a biblioteca xlsx
import './IdentificacaoPage.css'; // O novo arquivo de CSS
import downloadIcon from '../../../Assets/download-icon.png';  // Ajuste o caminho corretamente

function IdentificacaoPage() {
  const [selectedRecord, setSelectedRecord] = useState(null); // Estado para armazenar o item selecionado
  const navigate = useNavigate();

  // Função para capturar a seleção de um checkbox
  const handleCheckboxChange = (event, record) => {
    if (event.target.checked) {
      setSelectedRecord(record); // Armazena o item selecionado
    } else {
      setSelectedRecord(null); // Desmarca o item selecionado
    }
  };

  // Função para redirecionar para a página de edição
  const handleEditClick = () => {
    if (selectedRecord) {
      const formattedDate = selectedRecord.data.replace(/\//g, '-'); // Substitui barras por hífens
      navigate(`/editar-identificacao/${formattedDate}`); // Redireciona para a página de edição
    } else {
      alert('Por favor, selecione um registro para editar.'); // Alerta caso nenhum registro esteja selecionado
    }
  };

  // Função para criar um novo registro
  const handleCreateClick = () => {
    navigate('/criar-identificacao'); // Redireciona para a página de criação de identificação
  };

  // Função para excluir um registro
  const handleDeleteClick = () => {
    if (selectedRecord) {
      // Aqui você pode adicionar a lógica para excluir o registro selecionado
      alert(`Registro do dia ${selectedRecord.data} excluído com sucesso.`);
      setSelectedRecord(null); // Desmarca o registro após exclusão
    } else {
      alert('Por favor, selecione um registro para excluir.');
    }
  };

  // Função para fazer o download dos dados da tabela como Excel
  const handleDownloadClick = () => {
    const data = records.map(record => ({
      Data: record.data,
      'Qtd. Animais': record.qtdAnimais,
      'Peso Médio': record.pesoMedio,
      'Peso Total': record.pesoTotal,
    }));

    // Cria uma nova planilha
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Cria uma nova pasta de trabalho
    const workbook = XLSX.utils.book_new();

    // Adiciona a planilha à pasta de trabalho
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Identificação');

    // Gera o arquivo Excel e faz o download
    XLSX.writeFile(workbook, 'identificacao.xlsx');
  };

  const records = [
    { data: '01/05/2024', qtdAnimais: 161, pesoMedio: 307, pesoTotal: 49427 },
    { data: '02/05/2024', qtdAnimais: 245, pesoMedio: 279, pesoTotal: 68355 },
    { data: '03/05/2024', qtdAnimais: 188, pesoMedio: 276, pesoTotal: 51888 },
    { data: '04/05/2024', qtdAnimais: 242, pesoMedio: 303, pesoTotal: 73326 },
    // Adicione mais registros conforme necessário
  ];

  return (
    <div className="container-pagina-identificacao">
      <h1>Identificação</h1>
      <div className="acoes-identificacao">
        <button className="botao-criar" onClick={handleCreateClick}>
          Criar
        </button>
        <button className="botao-editar" onClick={handleEditClick}>
          Editar
        </button>
        <button className="botao-excluir" onClick={handleDeleteClick}>
          Excluir
        </button>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="input-pesquisa"
        />
        <button className="botao-filtrar">🔍</button>
      </div>
      <table className="tabela-identificacao">
        <thead>
          <tr>
            <th></th>
            <th>Data</th>
            <th>Qtd. Animais</th>
            <th>Peso Médio</th>
            <th>Peso Total</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.data}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, record)}
                />
              </td>
              <td>{record.data}</td>
              <td>{record.qtdAnimais}</td>
              <td>{record.pesoMedio}</td>
              <td>{record.pesoTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Ícone de download posicionado ao final da tabela */}
      <div className="botao-download-wrapper">
        <button className="botao-download" onClick={handleDownloadClick}>
          <img src={downloadIcon} alt="Download" className="download-icon" />
        </button>
      </div>
    </div>
  );
}

export default IdentificacaoPage;
