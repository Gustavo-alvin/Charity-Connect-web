const btnMobile = document.getElementById("btn-mobile");

function ToggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', ToggleMenu);


/* navegação com button 
function login() {
    window.location.href = "login.html";
  }*/
