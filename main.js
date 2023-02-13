const form = document.getElementById('form-atividade');

let linhas = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  adicionarLinha();
  atualizaTabela();
});

function adicionarLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');

  atividades.push(inputNomeAtividade.value);
  notas.push(parseFloat(inputNotaAtividade.value));

  const imgEmoji =
    +inputNotaAtividade.value >= 7
      ? '<img src="./img/aprovado.png" alt="Emoji festejando">'
      : '<img src="./img/reprovado.png" alt="Emoji triste">';

  let linha = `
  <tr>
      <td>${inputNomeAtividade.value}</td>
      <td>${inputNotaAtividade.value}</td>
      <td>${imgEmoji}</td>
  </tr>`;

  linhas += linha;

  inputNomeAtividade.value = '';
  inputNotaAtividade.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}
