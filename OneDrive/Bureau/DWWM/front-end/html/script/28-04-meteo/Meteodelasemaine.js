// 1. Récupération des éléments
const btnTheme = document.getElementById('btn-theme');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const jour1 = document.getElementById('jour1');
const jour2 = document.getElementById('jour2');
const jour3 = document.getElementById('jour3');
const jour4 = document.getElementById('jour4');
const jour5 = document.getElementById('jour5');
const jour6 = document.getElementById('jour6');

// 2. Ajout des classes météo
jour1.classList.add("soleil");

jour2.classList.add('nuageux');
jour3.classList.add('nuageux');
jour6.classList.add('nuageux');

jour4.classList.add('pluie');
jour5.classList.add('pluie');

// 3. Gestion du bouton theme
btnTheme.addEventListener('click', function() {
    body.classList.toggle('nuit');

    if(body.classList.contains('nuit')){
        btnTheme.textContent = '🌙 Mode Jour';
        themeIcon.textContent ='🌙';
    } else{
        btnTheme.textContent = '☀️ Mode Nuit';
        themeIcon.textContent = '☀️';
    }
});


document.addEventListener("keydown", (event) => {
  if (event.key === "n" || event.key === "N") {
    document.getElementById("btn-theme").click();
  }
});