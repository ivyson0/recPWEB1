function montarTabela(dados, colunas, destinoId) {
  const destino = document.getElementById(destinoId);
  const cabecalho = `<tr>${colunas.map(c => `<th>${c}</th>`).join("")}</tr>`;
  const linhas = dados.map(obj => 
    `<tr>${colunas.map(c => `<td>${obj[c]}</td>`).join("")}</tr>`
  ).join("");
  destino.innerHTML = `<table>${cabecalho}${linhas}</table>`;
}
