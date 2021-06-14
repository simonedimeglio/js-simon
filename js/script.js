document.addEventListener('DOMContentLoaded', function () {

    // Dichiaro le variabili 
    var randomNumber; // numero gerato randomicamente
    var playerNumber; // numero inserito dal giocatore (via prompt)
    var numeriRandom = []; // array per numeri generati randomicamente
    var numeriGiocatore = []; // array per numeri dichiarati dal giocatore (via prompt)
    
    function randomNumberGenerator(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
  
    // ciclo che inserisce i 5 numeri random nell'array corretto (randomNumber)
    for (var i = 0; i < 5; i++) {
      randomNumber = randomNumberGenerator(1, 100);
      numeriRandom.push(randomNumber);
    }

    console.log('NUMERI GENERATI DAL PC: ' + numeriRandom); // console.log relativo ai numeri casuali in console

    // Mostro al giocatore i 5 numeri da memorizzare
    alert("SIMONE DICE: " + numeriRandom);
  
    // imposto il timeout di 30 secondi e faccio le verifiche
    setTimeout(function() {

      // per 5 volte richiedo via prompt un numero al giocatore  
      for (var x = 0; x < 5; x++) {
        playerNumber = parseInt(prompt("inserisci i numeri che ricordi"));

        // se il numero inserito è uno dei 5 numeri generati inizialmente
        // lo pusho nell'array di riferimento
        if (playerNumber === numeriRandom[x]) {
            numeriGiocatore.push(playerNumber);
        }

      }

      // DICHIARO CHE IL TEMPO È SCADUTO E MOSTRO IL RISULTATO
      alert('TEMPO SCADUTO: hai indovinato '+ numeriGiocatore.length + ' numeri su 5.')
      
    }, 5000)
  
});
  
  
  
  
