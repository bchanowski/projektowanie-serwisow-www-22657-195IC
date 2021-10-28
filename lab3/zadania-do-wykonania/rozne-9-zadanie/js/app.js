window.onload = start ;

const tekst = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
const znakRozdzialu = '|';

function start(){
    posortuj(tekst,znakRozdzialu)
}

function posortuj(tekst,przedzial){
    var tablica =[];
    tablica = tekst.split(przedzial);
    tablica.sort();
    tekst = tablica.join(przedzial);
    alert(tekst);
}
