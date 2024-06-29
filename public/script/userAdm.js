// userAdm.js

// Função para mostrar a seção de Gerenciamento de Usuários e esconder Fale Conosco
function mostrarGerenciamento() {
    var gerenciamentoDiv = document.getElementById('gerenciamento');
    var faleConoscoDiv = document.getElementById('fale-conosco');

    gerenciamentoDiv.style.display = 'block';
    faleConoscoDiv.style.display = 'none';
}

// Função para mostrar a seção de Fale Conosco e esconder Gerenciamento de Usuários
function mostrarFaleConosco() {
    var gerenciamentoDiv = document.getElementById('gerenciamento');
    var faleConoscoDiv = document.getElementById('fale-conosco');

    gerenciamentoDiv.style.display = 'none';
    faleConoscoDiv.style.display = 'block';
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
