function fncPesquisar(){
    /*
    Esta função busca uma seção HTML com o ID "resultados-pesquisa" e 
    preenche-a com uma lista de jogadores da LCK. 

    Para cada jogador no array 'jogadorLCK', é criado um elemento HTML
    com as informações do jogador e adicionado à seção.
    */
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga a seção no console (para depuração)
    let campoPesquisa = document.getElementById("campo-pesquisa").value; // String para armazenar o texto digitado pelo usuário
    let resul = ""; // String para armazenar o HTML gerado
    let nome = "";
    let times = "";
    let tags = "";

    // Se o campo de pesquisa estiver vazio
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Por favor, digite algo para pesquisar.</p>";
        return;
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    for(let info of jogadorLCK){
        nome = info.nome.toLowerCase();
        times = info.times.toLowerCase();
        tags = info.tags.toLowerCase();

        if (nome.includes(campoPesquisa) || times.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            /*
            Para cada jogador, cria um template HTML com as informações:
            * nome
            * descrição
            * títulos
            * times
            * links para Leaguepedia
            */
            resul += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${info.nome}</a>
                </h2>
                <p class="descricao-meta">${info.desc}</p>
                <p class= "descricao-meta">${info.titulos}</p>
                <p class= "descricao-meta">${info.times}</p>
                <a href="${info.leaguepedia}" target="_blank">Leaguepedia</a>
            </div>
            `;
        };
    };

    if (!resul){
        resul = "<p>Nenhum jogador(a) encontrado(a).</p>";
    }
// Atualiza o conteúdo da seção com o HTML gerado
section.innerHTML = resul;
};