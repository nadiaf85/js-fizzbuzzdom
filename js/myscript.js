let scatola = document.getElementById ('container'); //richiamo l'id

for (let i=0 ; i <=100 ; i++){ //creo ciclo for


    if ((i % 3==0) && (i % 5==0)){ //controllo se è multiplo di 3 e 5 e stampo fizzbuzz
        scatola.innerHTML += '<div class= box fizzbuzz>' + i + 'fizzbuzz </div>';
    }
    else if (i % 3==0) {//controllo se è multiplo di 3 e stampo fizz
        scatola.innerHTML += '<div class= box fizz>' + i + 'fizz </div>';
    } 
    else if (i % 5==0){ //controllo se è multiplo di 5 e stampo buzz
        scatola.innerHTML += '<div class= box buzz>' + i + 'buzz </div>';
    }
    else{
        document.getElementById ('container');
        scatola.innerHTML += '<div class= box>' + i + '</div>';
    }
}
