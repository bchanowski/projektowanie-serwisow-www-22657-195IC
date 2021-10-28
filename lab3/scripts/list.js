window.onload = zegar ;

var listzmiany = document.getElementById("list");
listzmiany.style.height = "700px"
listzmiany.style.backgroundImage = "url(assets/amw_logo.png)";
listzmiany.style.backgroundRepeat = "no-repeat";
listzmiany.style.backgroundPosition = "center";
listzmiany.style.backgroundSize = "400px";

var przyciskZwiekszCzcionke = document.createElement("button");
przyciskZwiekszCzcionke.innerText = "Zwiększ czcionke";
przyciskZwiekszCzcionke.style.background = "green";
document.getElementById("list-g").appendChild(przyciskZwiekszCzcionke);

przyciskZwiekszCzcionke.onclick = function(){
	document.getElementById("list-formal").style.fontSize = "35px";
};

function zmianaDanych(){
    var x = event.keyCode;
    if(x==13){
        var imieNazwisko = window.prompt("Podaj swoję imię i nazwisko!");
        var adres1 = window.prompt("Podaj ulicę!");
        var adres2 = window.prompt("Podaj kod pocztowy i miasto!")
        var email = window.prompt("Podaj adres e-mail")
        dane = document.getElementById("dane");
        dane.innerHTML = imieNazwisko + "<br>" + adres1 + "<br>" + adres2 + "<br>" + email;
    }
}

function komunikatKopia(){
    alert("Skopiowano dane!");
}

window.addEventListener("keypress", zmianaDanych);
document.getElementById("dane").addEventListener("copy", komunikatKopia);

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
