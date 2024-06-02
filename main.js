const form = document.getElementById('form-contato');
const telContato = document.getElementById('tel-contato');
const messageSalvo = `<span class="salvo">Salvos</span>`;
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

    addContato();
    ordenarContatos();
    attLista();
    atualizarContatosSalvos();
});

function addContato(){
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
    const organizar = nome.map((nome, indice) => ({ nome, telefone: telefone[indice] }));
    organizar.sort((a, b) => a.nome.localeCompare(b.nome));

    nome = organizar.map(contato => contato.nome);
    telefone = organizar.map(contato => contato.telefone);
}

function attLista(){
    const corpoLista = document.querySelector('tbody');
    corpoLista.innerHTML = '';

    for (let i = 0; i < nome.length; i++) {
        let linha = '<tr>';
        linha += `<td>${nome[i]}</td>`;
        linha += `<td>${telefone[i]}</td>`;
        linha += `<td>✅</td>`;
        linha += '</tr>';
        corpoLista.innerHTML += linha;
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