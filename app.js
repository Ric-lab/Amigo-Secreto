//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNome = [];

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada foi Enter
        adicionarAmigo(); // Chama a função de adicionar amigo
    }
});


document.getElementById('amigo').addEventListener('input', function(event) {
    let nome = event.target.value;
    event.target.value = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
});V

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    console.log(listaNome);

    if (nome) { // Verifica se o nome não está vazio
        // Verifica se o nome já existe na lista
        if (listaNome.includes(nome)) {
            alert("Esse nome já está na lista! Por favor, adicione um nome diferente.");
            return; // Não adiciona o nome à lista se ele já estiver presente
        }

        listaNome.push(nome); // Adiciona o nome ao array
        atualizarLista(); // Atualiza a lista exibida
    } else {
        alert("Por favor, digite um nome válido!");  
    }

    limparcampo()  
}


function limparcampo(){
    nome= document.querySelector('input');
    nome.value = '';
}


function atualizarLista() {
    let ul = document.getElementById('listaAmigos'); // Captura o elemento <ul>
    ul.innerHTML = ''; // Limpa a lista antes de atualizá-la

    // Itera pelo array e cria os itens da lista
    listaNome.forEach((nome) => {
        let li = document.createElement('li'); // Cria um elemento <li>
        li.textContent = nome; // Define o texto do <li> como o nome
        ul.appendChild(li); // Adiciona o <li> à <ul>
    });
}


function sortearAmigo() {
    if (listaNome.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear!");
        return;
    }

    // Gera um índice aleatório baseado no tamanho do array
    let indiceSorteado = Math.floor(Math.random() * listaNome.length);
    let amigoSorteado = listaNome[indiceSorteado]; // Pega o nome sorteado

    // Exibe o resultado do sorteio no elemento <p>
    let resultado = document.getElementById('resultado');
    resultado.textContent = `🎉 Amigo Secreto Sorteado: ${amigoSorteado}`;
}


function reiniciar() {
    location.reload(); // Recarrega a página
}
