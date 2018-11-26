

// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che
// ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono stati individuati.


function numberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var numeriCasuali = [];

for (var i = 0; i < 5; i++) {

  var numeri = numberRandom(1, 10);
  console.log('numero casuale alert ' + numeriCasuali);

  numeriCasuali.push(numeri);
}


alert('Memorizzare i seguenti numeri, hai 30 secondi di tempo...' + '    ' + numeriCasuali);

console.log(numeriCasuali);

var dbnumeriUtente = [];


setTimeout(timer, 3000);
function timer() {

  for (var i = 0; i < 5; i++) {

    var numeriUtente = parseInt(prompt('Inserire i numeri memorizzati poco fà!'));
    dbnumeriUtente.push(numeriUtente);

  }
  console.log(dbnumeriUtente);
}
