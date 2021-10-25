window.onload = zegar ;

document.body.style.backgroundColor = "#1c1c1c";

var zmianaTla = document.createElement("button");
zmianaTla.innerText = "Zmień tło";
zmianaTla.style.marginLeft = "220px";

var zwiekszCzcionke = document.createElement("button");
zwiekszCzcionke.innerText = "Zwiększ czcionkę";
zwiekszCzcionke.style.marginLeft = "30px";

var zmniejszCzcionke = document.createElement("button");
zmniejszCzcionke.innerText = "Zmniejsz czcionkę";
zmniejszCzcionke.style.marginLeft = "30px";

var okraglaRamka = document.createElement("button");
okraglaRamka.innerText = "Okrągła ramka";
okraglaRamka.style.marginLeft = "30px";

var kolorCzcionki = document.createElement("button");
kolorCzcionki.innerText = "Kolor czcionki";
kolorCzcionki.style.marginLeft = "30px";

var typCzcionki = document.createElement("button");
typCzcionki.innerText = "Typ czcionki";
typCzcionki.style.marginLeft = "30px";

document.getElementById("glowna").appendChild(zmianaTla);
document.getElementById("glowna").appendChild(zwiekszCzcionke);
document.getElementById("glowna").appendChild(zmniejszCzcionke);
document.getElementById("glowna").appendChild(okraglaRamka);
document.getElementById("glowna").appendChild(kolorCzcionki);
document.getElementById("glowna").appendChild(typCzcionki);


zmianaTla.onclick = function(){
    document.getElementById("form").style.backgroundColor = "#CECECE";
};

zwiekszCzcionke.onclick = function(){
    document.getElementById("pola").style.fontSize = "20px";
};

zmniejszCzcionke.onclick = function(){
    document.getElementById("pola").style.fontSize = "18px";
};

okraglaRamka.onclick = function(){
    document.getElementById("form").style.borderRadius = "35px";
};

kolorCzcionki.onclick = function(){
    document.getElementById("form").style.color = "green";
};

typCzcionki.onclick = function(){
    document.getElementById("pola").style.fontFamily = "Calibri";
};

function komunikat() {
    alert("Dziękujemy za przesłanie formularza!");
}

function zegar(){
    var data = new Date();

    var miesiac = data.getMonth() + 1;
    var dzien = data.getDate();
    var godzina = data.getHours();
    var minuta = data.getMinutes();
    var sekunda = data.getSeconds();

    if(miesiac < 10) miesiac = "0" + miesiac;
    if(dzien < 10) dzien = "0" + dzien;
    if(godzina < 10) godzina = "0" + godzina;
    if(minuta < 10) minuta = "0" + minuta;
    if(sekunda < 10) sekunda = "0" + sekunda;

    var komunikat = dzien + "/" + miesiac + " " + godzina + ":" + minuta + ":" + sekunda;
    document.getElementById("data-czas-lokal").innerHTML = komunikat;
    setTimeout("zegar()",1000);
}
