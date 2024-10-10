import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import './EditIdentificacao.css';

function EditIdentificacao() {
  const { id } = useParams(); // Pega o parâmetro da identificação a partir da URL (neste caso, a data com hífens)
  const navigate = useNavigate(); // Utilize o hook useNavigate para redirecionar

  // Função para redirecionar o usuário para a página de listagem de identificações
  const handleCancelClick = () => {
    navigate('/identificacao'); // Redireciona para a página de listagem de identificações
  };

  const formattedDate = id.replace(/-/g, '/'); // Converte de volta para o formato com barras se necessário

  return (
    <div className="container-editar-identificacao">
      <h1>Editar identificação - {formattedDate}</h1>
      {/* Formulário de edição */}
      <form className="form-editar-identificacao">
        <div className="dados-identificacao">
          <div>
            <label>Data:</label>
            <input type="text" defaultValue={formattedDate} readOnly />
          </div>
          <div>
            <label>Quantidade de Animais:</label>
            <input type="number" defaultValue="161" />
          </div>
          <div>
            <label>Peso Médio:</label>
            <input type="number" defaultValue="307" />
          </div>
          <div>
            <label>Peso Total:</label>
            <input type="number" defaultValue="49427" />
          </div>
        </div>

        <div className="dados-alterar">
          <h3>Insira os valores para alterar:</h3>
          <div className="dados-identificacao">
            <div>
              <label>Quantidade de Animais:</label>
              <input type="number" placeholder="Insira a nova quantidade" />
            </div>
            <div>
              <label>Peso Médio:</label>
              <input type="number" placeholder="Insira o novo peso médio" />
            </div>
            <div>
              <label>Peso Total:</label>
              <input type="number" placeholder="Insira o novo peso total" />
            </div>
          </div>
        </div>

        <div className="acoes-edicao">
          <button type="button" className="botao-cancelar" onClick={handleCancelClick}>
            Cancelar
          </button>
          <button type="submit" className="botao-salvar">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default EditIdentificacao;
