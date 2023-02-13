const form = document.getElementById('form-atividade');
const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  adicionarLinha();
  atualizaTabela();
  atualizaMediaFinal();
});

function adicionarLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');

  if (!atividades.includes(inputNomeAtividade.value)) {
    atividades.push(inputNomeAtividade.value);
    notas.push(+inputNotaAtividade.value);

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
  } else {
    alert('A atividade já foi inserida!');
  }
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById('media-final-valor').innerHTML =
    parseFloat(mediaFinal);
  document.getElementById('media-final-resultado').innerHTML =
    mediaFinal >= 7
      ? '<span class="resultado aprovado">Aprovado</span>'
      : '<span class="resultado reprovado">Reprovado</span>';
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}
