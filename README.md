Consegna

L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

COME SVOLGO QUESTO ESERCIZIO:

- su index.html: creo header che contiene logo e scritta più un bottone, poi creo nel main un contenitore e creo un footer che contiene una scritta
- su style.css: applico vari stili agli elementi che creo
- su main.js:
  - abbino al bottone di index.html un evento
  - creo una funzione che genera celle nel contenitore di index.html
  - creo una funzione la quale per ogni cella che clicco, succede che quella cella si colora di azzurro e stampa un messaggio in console.log