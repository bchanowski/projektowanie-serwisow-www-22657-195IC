window.onload = zegar ;

document.body.style.backgroundImage = "url(assets/podr-tlo.jpg)";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

var strona = document.getElementById("strona-podr");
strona.style.backgroundImage = "url(assets/kartka-tlo.jpg)";
strona.style.backgroundRepeat = "no-repeat";
strona.style.backgroundSize = "cover";

var wyjasnienie = document.getElementById("wyjas");
wyjasnienie.style.backgroundImage = "url(assets/kartka-tlo.jpg)";
wyjasnienie.style.backgroundRepeat = "no-repeat";
wyjasnienie.style.backgroundSize = "cover";

function pokazOdp() {
    document.getElementById("zdj7").src = "assets/zad7-odp.png";
}

function powiekszRamke(){
    wyjasnienie.style.height = "400px";
    wyjasnienie.style.width = "600px";
    wyjasnienie.style.fontSize = "25px";
}

function zmienTlo(){
    document.body.style.backgroundImage = "url(assets/podr-tlo-ciemne.jpg)";
}

wyjasnienie.addEventListener("dblclick", powiekszRamke)
window.addEventListener("scroll", zmienTlo)

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
