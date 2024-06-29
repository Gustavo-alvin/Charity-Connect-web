

function mostrarGerenciamento() {
    var gerenciamentoDiv = document.getElementById('gerenciamento');
    var faleConoscoDiv = document.getElementById('fale-conosco');
    var container = document.querySelector('.container');
    var containerFaleConosco = document.querySelector('.container-fale-conosco');

    gerenciamentoDiv.style.display = 'block';
    faleConoscoDiv.style.display = 'none';

    container.classList.remove('container-fale-conosco');
}

function mostrarFaleConosco() {
    var gerenciamentoDiv = document.getElementById('gerenciamento');
    var faleConoscoDiv = document.getElementById('fale-conosco');
    var container = document.querySelector('.container');
    var containerFaleConosco = document.querySelector('.container-fale-conosco');

    gerenciamentoDiv.style.display = 'none';
    faleConoscoDiv.style.display = 'flex';

    container.classList.add('container-fale-conosco');
    
}

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
