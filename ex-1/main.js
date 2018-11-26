

// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che
// ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono stati individuati.

//----------- FUNZIONE numero random---------
function numberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//----------- Creo i 5 numeri casuali da mostrare al giocatore --------- ***

var numeriCasuali = [];

for (var i = 0; i < 5; i++) {

  var numeri = numberRandom(1, 10);
  console.log('numero casuale alert ' + numeriCasuali);

  numeriCasuali.push(numeri);
}

//----------- Mostro tramite un allert le istruzioni al giocatore e i numeri da memorizzare ---------

alert('Memorizza i seguenti numeri,ricorda che hai 30 secondi di tempo... dopo l\'ok' + '    ' + numeriCasuali);


console.log(numeriCasuali);

var dbnumeriUtente = [];

//----------- creo la funzione che dopo 30 secondi fà inserire al giocatore i numeri memorizzati in precedenza   ---------

setTimeout(richiestaNumeri, 3000);
function richiestaNumeri() {

  for (var i = 0; i < 5; i++) {

    var numeriUtente = parseInt(prompt('Inserire i numeri memorizzati poco fà!'));

    // Se dentro i numeri casuali ci sono numeri inseriti dall'utente li inserisco nel dbnumeriUtente

    if (numeriCasuali.includes(numeriUtente)) {
      dbnumeriUtente.push(numeriUtente);

    }

  }
  console.log(dbnumeriUtente);

  // Se l'utente ha indovinato almeno 1 numero ha vinto

  if (dbnumeriUtente.length > 0) {

    alert('Bravo ti sei ricordato questi numeri'+ '    ' + dbnumeriUtente)

  } else {

    alert('Non ti sei ricordato nessun numero')
  }
}
