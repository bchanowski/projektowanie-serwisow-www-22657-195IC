window.onload = start ;

const min = 1;
const max = 1000;

function start(){
    liczbaU = parseInt(prompt("Podaj liczbę!"));
    var ileIter = 0;
    var randomLiczba = Math.floor(Math.random() * (max - min)) + min;

    if(liczbaU > max || liczbaU < min){
        console.log("podana wartość jest błędna.")
    } else{
        while(randomLiczba != liczbaU){
           randomLiczba = Math.floor(Math.random() * (max - min)) + min;
           ileIter++;
        }
        console.log("Liczba wylosowała się po " + ileIter + " iteracjach.");
    }
}
