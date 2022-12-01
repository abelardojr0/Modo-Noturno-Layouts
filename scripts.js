const h1 = document.getElementById('page-title');
const botao = document.getElementById('mode-selector');
const rodape = document.getElementsByTagName('footer') [0];
const corpo = document.getElementsByTagName('body') [0];
const DarkModeClasse = 'dark-mode'
function mudarModo(){
    mudarClasses();
    mudarTexto();

}

function mudarClasses(){
    botao.classList.toggle(DarkModeClasse);
    h1.classList.toggle(DarkModeClasse);
    rodape.classList.toggle(DarkModeClasse);
    corpo.classList.toggle(DarkModeClasse);
}

function mudarTexto(){
    const LigthMode = 'Light Mode';
    const DarkMode = 'Dark Mode';
    if(corpo.classList.contains(DarkModeClasse)){
        botao.innerHTML = LigthMode;
        h1.innerHTML = DarkMode + " ON";
        return;
    }
    botao.innerHTML = DarkMode;
    h1.innerHTML = LigthMode + " ON";
}
botao.addEventListener('click', mudarModo);
