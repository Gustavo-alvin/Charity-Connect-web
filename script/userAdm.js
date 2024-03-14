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
    let repre = document.getElementById("title-representante");
    let ong1 = document.getElementById("title-ong1");
    let ong2 = document.getElementById("title-ong2");
    let ong3 = document.getElementById("title-ong3");
    let ong4 = document.getElementById("title-ong4");
    let ong5 = document.getElementById("title-ong5");
    let ong6 = document.getElementById("title-ong6");
    let nome = document.getElementById("nome");
    let email= document.getElementById("email");
    let senha = document.getElementById("senha");
    let nome2 = document.getElementById("nome2");
    let email2= document.getElementById("email2");
    let senha2 = document.getElementById("senha2");
    let nome3 = document.getElementById("nome3");
    let email3= document.getElementById("email3");
    let senha3 = document.getElementById("senha3");
    let user5 = document.getElementById("user5");
    let user6 = document.getElementById("user6");
    let user7 = document.getElementById("user7");

    ong.remove();
    user5.remove();
    user6.remove();
    user7.remove();
    ong1.remove();
    ong2.remove();
    ong3.remove();
    ong4.remove();
    ong5.remove();
    ong6.remove();

    repre.innerHTML = "Nomes";
    nome.innerHTML = "Jay jo";
    email.innerHTML = "WindBreaker@gmail.com";
    senha.innerHTML = "IloveBikes";

    nome2.innerHTML = "Dom Kang";
    email2.innerHTML = "SpeedForce@gmail.com";
    senha2.innerHTML = "MafiaDosCachimbinhas";

    nome3.innerHTML = "Shelly Scott";
    email3.innerHTML = "HummingBirdCrew@gmail.com";
    senha3.innerHTML = "IloveJayJO";


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