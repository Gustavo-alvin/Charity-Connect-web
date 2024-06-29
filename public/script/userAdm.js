// userAdm.js

// Função para mostrar a seção de Gerenciamento de Usuários e esconder Fale Conosco
function mostrarGerenciamento() {
    var gerenciamentoDiv = document.getElementById('gerenciamento');
    var faleConoscoDiv = document.getElementById('fale-conosco');
    var container = document.querySelector('.container');
    var containerFaleConosco = document.querySelector('.container-fale-conosco');

    gerenciamentoDiv.style.display = 'block';
    faleConoscoDiv.style.display = 'none';

    container.classList.remove('container-fale-conosco');
}

// Função para mostrar a seção de Fale Conosco e esconder Gerenciamento de Usuários
function mostrarFaleConosco() {
    var gerenciamentoDiv = document.getElementById('gerenciamento');
    var faleConoscoDiv = document.getElementById('fale-conosco');
    var container = document.querySelector('.container');
    var containerFaleConosco = document.querySelector('.container-fale-conosco');

    gerenciamentoDiv.style.display = 'none';
    faleConoscoDiv.style.display = 'flex';

    container.classList.add('container-fale-conosco');
    
}

// Configura os eventos de clique nos botões ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    var btnGerenciamento = document.getElementById('btn-user-ong');
    var btnFaleConosco = document.getElementById('btn-user');

    btnGerenciamento.addEventListener('click', function() {
        mostrarGerenciamento();
    });

    btnFaleConosco.addEventListener('click', function() {
        mostrarFaleConosco();
    });
});
