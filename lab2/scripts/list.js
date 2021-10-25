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
