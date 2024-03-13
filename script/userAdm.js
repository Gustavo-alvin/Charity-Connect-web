const usuario1= {
    nome: 'Cauã ',
    email: 'IloveKaneyeWest@gmail.com',
    senha: 'TaylorSwift'
};

const usuario2= {
    nome: 'Alves',
    email: 'contato.alvingustavo@gmail.com',
    senha: 'WindBreaker'
};

const usuario3= {
    nome: 'Gomes',
    email: 'IloveKaneyeWest@gmail.com',
    senha: 'TaylorSwift'
};

const usuario4= {
    nome: 'Leandro',
    email: 'IloveKaneyeWest@gmail.com',
    senha: 'TaylorSwift'
};

const usuario5= {
    nome: 'Nathalia',
    email: 'IloveKaneyeWest@gmail.com',
    senha: 'TaylorSwift'
};

const usuario6= {
    nome: 'Ruana',
    email: 'IloveKaneyeWest@gmail.com',
    senha: 'TaylorSwift'
};

const usuario7= {
    nome: 'Wellington',
    email: 'IloveKaneyeWest@gmail.com',
    senha: 'TaylorSwift'
};

const users = [usuario1,usuario2,usuario3,usuario4,usuario5,usuario6,usuario7]














function mudarUser() {
    let ong = document.getElementById("title-ong");
    let ong1 = document.getElementById("title-ong1");
    let ong2 = document.getElementById("title-ong2");
    let ong3 = document.getElementById("title-ong3");
    let ong4 = document.getElementById("title-ong4");
    let ong5 = document.getElementById("title-ong5");
    let ong6 = document.getElementById("title-ong6");
    let nome = document.getElementById("nome");
    let email= document.getElementById("email");
    let senha = document.getElementById("senha");

    ong.remove();
    ong1.remove();
    ong2.remove();
    ong3.remove();
    ong4.remove();
    ong5.remove();
    ong6.remove();
    nome.innerHTML = "Jay jo";
    email.innerHTML = "WindBreaker@gmail.com";
    senha.innerHTML = "IloveBikes";


}

function mudarOngs() {

    ong.innerHTML.add();
    ong1.add();
    ong2.add();
    ong3.add();
    ong4.add();
    ong5.add();
    ong6.add();
}