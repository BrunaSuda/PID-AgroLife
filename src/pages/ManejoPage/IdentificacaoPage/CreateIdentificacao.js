import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate
import './CreateIdentificacao.css';

function CreateIdentificacao() {
  const navigate = useNavigate(); // Use o hook useNavigate para redirecionamento

  // Função para lidar com o clique no botão "Cancelar"
  const handleCancelClick = () => {
    navigate('/identificacao'); // Redireciona para a página de listagem de identificações
  };

  return (
    <div className="container-criar-identificacao">
      <h1>Criar nova identificação</h1>
      {/* Formulário de criação */}
      <form className="form-criar-identificacao">
        <div className="dados-identificacao">
          <div>
            <label>Data:</label>
            <input type="date" placeholder="Insira a data" />
          </div>
          <div>
            <label>Quantidade de Animais:</label>
            <input type="number" placeholder="Insira a quantidade de animais" />
          </div>
          <div>
            <label>Peso Médio:</label>
            <input type="number" placeholder="Insira o peso médio" />
          </div>
          <div>
            <label>Peso Total:</label>
            <input type="number" placeholder="Insira o peso total" />
          </div>
        </div>

        <div className="acoes-criacao">
          <button type="button" className="botao-cancelar" onClick={handleCancelClick}>
            Cancelar
          </button>
          <button type="submit" className="botao-criar">Criar</button>
        </div>
      </form>
    </div>
  );
}

export default CreateIdentificacao;
