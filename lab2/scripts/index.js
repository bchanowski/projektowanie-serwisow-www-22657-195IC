window.onload = zegar ;


var atr = document.getElementById("autor");
atr.style.borderStyle = "solid";
atr.style.marginTop = "10px";
document.body.style.backgroundColor = "#ffe2b7";
atr.style.backgroundColor = "white";
document.getElementById("tech").style.backgroundColor = "burlywood";
gitLink();

function gitLink(){
    var img = document.createElement('img');
    var a = document.createElement("a");
    var link = document.createTextNode("Github");
    a.appendChild(link);
    a.title = "Github";
    a.href = "https://github.com/bchanowski";
    a.style.display = "block";
    a.style.textAlign = "center";
    img.setAttribute("id","git-link");
    img.src = "assets/git.png";
    img.style.height = '50px';
    img.style.width = '50px';
    img.style.display = "block";
    img.style.margin = "0 auto";
    atr.appendChild(a);
    atr.appendChild(img);

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


