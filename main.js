const form = document.getElementById('form-contato');
const telContato = document.getElementById('tel-contato');
const messageSalvo = `<span class="salvo">Salvos</span>`;
let linhas = '';
let nome = [];
let telefone = [];

telContato.addEventListener('input', function(){
    let numero = telContato.value.replace(/\D/g, '');

    let ddd = numero.slice(0, 2);
    let parte1 = numero.slice(2, 7);
    let parte2 = numero.slice(7, 11);

    telContato.value = `(${ddd}) ${parte1} - ${parte2}`;
});

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarContato();
    ordenarContatos(); // Adicionando a chamada da funÃ§Ã£o para ordenar os contatos
    atualizarLista();
    atualizarContatosSalvos();
});

function adicionarContato(){
    const nomeContato = document.getElementById('nome-contato');
    
    if (nome.includes(nomeContato.value)){
        alert(`Nome: ${nomeContato.value} jÃ¡ existe na lista`);
    } else if (telefone.includes(telContato.value)){
        alert(`NÃºmero: ${telContato.value} jÃ¡ existe na lista`);
    } else {
        nome.push(nomeContato.value);
        telefone.push(telContato.value);

        nomeContato.value = '';
        telContato.value = '';
    }
}

function ordenarContatos(){
    // FunÃ§Ã£o adicionada: Ordena os arrays nome e telefone com base na ordem alfabÃ©tica de nome
    const combinados = nome.map((nome, indice) => ({ nome, telefone: telefone[indice] }));
    combinados.sort((a, b) => a.nome.localeCompare(b.nome));

    nome = combinados.map(contato => contato.nome);
    telefone = combinados.map(contato => contato.telefone);
}

function atualizarLista(){
    const corpoLista = document.querySelector('tbody');
    corpoLista.innerHTML = ''; // Alterado: Limpa o conteÃºdo anterior

    for (let i = 0; i < nome.length; i++) {
        let linha = '<tr>';
        linha += `<td>${nome[i]}</td>`;
        linha += `<td>${telefone[i]}</td>`;
        linha += `<td>✅</td>`;
        linha += '</tr>';
        corpoLista.innerHTML += linha; // Alterado: Adiciona a linha atualizada Ã  lista
    }
}

function contatosSalvos(){
    return nome.length;
}

function atualizarContatosSalvos(){
    const contatosAtuais = contatosSalvos();

    document.getElementById('contatos-salvos').innerHTML = contatosAtuais;
    document.getElementById('salvoOsContato').innerHTML = messageSalvo;
}