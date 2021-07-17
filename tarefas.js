class Tarefas {
    constructor(nome, categoria, realizada) {
        this.nome = nome;
        this.categoria = categoria;
        this.realizada = realizada;
    }

    insereNaPagina(containerEl) {
        let marcado = '';
        if (this.realizada){
            marcado = 'marcado'
        }
        const template = ` <li class="item-tarefa ${marcado} categoria-${this.categoria}"> ${this.nome}</li> `
        containerEl.innerHTML += template

      }
}

const tarefas = [
    new Tarefas('Comprar leite', 'compras', false),
    new Tarefas('Escutar chimbinha', 'lazer', true)
];

const containerEl = document.querySelector('#lista-tarefas');
tarefas.forEach(e => { e.insereNaPagina(containerEl)});

function addTarefa(){
    let nomeEl = document.querySelector("#nova-tarefa-nome");
    let catEl = document.querySelector("#nova-tarefa-categoria");
    tarefas.push(new Tarefas(nomeEl.value, catEl.value, false));
    tarefas[tarefas.length -1].insereNaPagina(containerEl);
}

let btnAddEl = document.querySelector("#incluir-nova-tarefa");
btnAddEl.addEventListener("click",addTarefa);