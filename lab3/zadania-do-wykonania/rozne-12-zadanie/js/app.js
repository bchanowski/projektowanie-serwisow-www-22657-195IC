window.onload = start ;

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Karolak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Beata Lecka",
    "Katarzyna Małecka"
];

function start(){
    countWomanInTable(users);
}

function checkFemale(str){
    var dl;
    var pom = "";
    dl=str.length - 1;
    pom=str[dl];
    if(pom=="a")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function countWomanInTable(arr){
    var imie = "";
    var ileK = 0;
    var dl = arr.length;
    for(let i = 0 ; i<dl ; i++)
    {
        const words = arr[i].split(' ');
        imie=words[0];
        if(checkFemale(imie)==true){
            ileK++;
        }
    }
    alert("W tej liście jest: " + ileK + " kobiet.");
}

