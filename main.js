const form = document.getElementById('form-contato');
const telContato = document.getElementById('tel-contato');
const messageSalvo = `<span class="salvo">Salvos</span>`;
let linhas = '';
const nome = [];
const telefone = [];

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
    attLista();
    attContatoSalvo();

})
function addContato(){
    const nomeContato = document.getElementById('nome-contato');
    
    if (nome.includes(nomeContato.value)){
        alert (`Nome: ${nomeContato.value} já existe na lista`);
    }else if (telefone.includes(telContato.value)){
        alert(`Número: ${telContato.value} já existe na lista`);
    }else {

        nome.push(nomeContato.value);
        telefone.push(telContato.value);

        let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${telContato.value}</td>`;
    linha += `<td>✅</td>`;
    linha += '</tr>';

    linhas += linha;

    nomeContato.value = '';
    telContato.value = '';
    }
}
function attLista(){
    const corpoLista = document.querySelector('tbody');
    corpoLista.innerHTML = linhas;
}
function contatoSalvos(){
    let salvos = 0;

    for(let i = 0; i < nome.length; i++){
        salvos+= nome[i];

        return salvos = nome.length;
    }
}

function attContatoSalvo(){
    const attContatos = contatoSalvos();

    document.getElementById('contatos-salvos').innerHTML = attContatos;
    document.getElementById('salvoOsContato').innerHTML = messageSalvo;
}
