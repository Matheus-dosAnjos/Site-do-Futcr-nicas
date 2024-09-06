const campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona um ouvinte de eventos para a tecla Enter
campoPesquisa.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    pesquisar(); // Chama a função de pesquisa
  }
});

function pesquisar() {
    // Essa função é responsável por buscar dados e exibir os resultados na seção com o ID "resultados-pesquisa"
  
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos

    let campoPesquisa = document.getElementById("campo-pesquisa").value;


    // Se o campoPesquisa for uma string sem nada
    if (campoPesquisa == "" || campoPesquisa ==" ") {
        section.innerHTML = "<p>Pesquisa em branco. Você precisa digitar algo!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados

    let titulo = "";
    let descricao = "";
    let tags ="";
  
    // Itera sobre cada item de dado e cria o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase ()
        descricao = dado.descricao.toLowerCase ()
        tags = dado.tags.toLowerCase ()

     // Se titulo includes campoPesquisa
     if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      
      // Cria um novo HTML para cada resultado
        resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Link</a>
      </div>
      `;
    }
}
  if (!resultados) {
    resultados = "<p>Nada foi encontrado!</p>"

  }
    // Insere o HTML gerado na seção
    section.innerHTML = resultados;
  }