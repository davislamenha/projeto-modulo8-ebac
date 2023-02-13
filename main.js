const form = document.getElementById('form-atividade');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');
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

  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML += linha;
  inputNomeAtividade.value = '';
  inputNotaAtividade.value = '';
});
