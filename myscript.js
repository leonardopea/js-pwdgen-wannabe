let nome = prompt( 'Qual è il tuo nome?');     //creo variabile per il nome//
console.log(nome);



let cognome = prompt( 'Qual è il tuo cognome?');     //creo variabile per il cognome//
console.log(cognome);



let colore = prompt( 'Qual è il tuo colore preferito?');     //creo variabile per il colore//
console.log(colore);



//creo variabile che somma le tre già create//


let variabile_somma = nome + cognome + colore;
console.log(variabile_somma);



// visualizzo la password//

document.getElementById('password').innerHTML = `${variabile_somma}21`;