


// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro
// o rosa a seconda del sesso inserito


var nome = prompt('Ciao! Come Ti chiami?');
var sesso = prompt('Sei un Uomo o sei una Donna? ');

console.log(nome);
console.log(sesso);

// porto a lettere minuscule tutte le lettere

sesso = sesso.toLowerCase();
console.log(sesso);

var identità = document.getElementById('nomeSaluto');

if (sesso == 'uomo') {

  // Se sesso è maschile allora text blue

  nomeSaluto.style.color = '#00C9FF';
  identità.innerHTML = 'Hi !!!  ' + nome;

}
 else if (sesso == 'donna') {

   // Se sesso è femminile allora text blue


  nomeSaluto.style.color = 'pink';
  identità.innerHTML = 'Hi !!!  ' + nome;

}
else {
  alert('non hai inserito un sesso correttamente')
}
