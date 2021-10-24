window.onload = zegar ;

document.getElementById("form").style.backgroundColor = "#CECECE";
document.getElementById("form").style.borderRadius = "35px";
document.body.style.backgroundColor = "#1c1c1c";

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
