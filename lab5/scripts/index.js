window.onload = zegar ;

//LAB 5
//ZAD 1
var osoba = {
    "imie":"Jan",
    "nazwisko":"Kowalski",
    "wiek":25,
    "oceny": {
        "matematyka": 4,
        "biologia": 2,
        "religia": "nie uczęszczał",
        "angielski": {
            "zwykły":5,
            "zawodowy":3
        }
    }
}

const lata = osoba.wiek;
const ocenaBiologia = osoba.oceny.biologia;

function dodawanieLiczb(a, b, fn){
    const wynik = a + b;
    fn(wynik);
}

dodawanieLiczb(lata, ocenaBiologia, function(suma){
    console.log("Zad 1.1 - Wynik dodawania to: " + suma);
});

function getImie(fn) {
    const imieStudenta = osoba.imie;
    fn(imieStudenta)
}

getImie(function(imie) {
    const nazwiskoStudenta = osoba.nazwisko;
    console.log("Zad 1.2 - Student " + imie + " ma na nazwisko " + nazwiskoStudenta);
})

//ZAD 2
const posty = fetch('https://jsonplaceholder.typicode.com/posts');

function getPostId(response) {
    return new Promise((resolve, reject) => {
        if(response !== 1) {
            resolve(response);
        } else {
            reject("zad 2.1 - Błąd");
        }
    });
}

getPostId(posty).then(response => response.json().then(function(data){
    var wynik = data[0].id + data[1].id;
    console.log("Zad 2.1 - Wynik dodawania to: " + wynik);
}))
    .catch(blad => console.log("Zad 2.1 - Błąd", blad))
    .finally(() => console.log("Zad 2.1 - Wykonane"));

const posty2 = fetch('https://jsonplaceholder.typicode.com/posts');


function getPost(response){
    return new Promise((resolve, reject) => {
        if(response !== 1){
            resolve(response);
        } else{
            reject("Zad 2.2 - Błąd");
        }
    })
}

getPost(posty2).then(response => response.json().then(function(data) {
    var komunikat = "Zad 2.2 - Title: " + data[1].title + " Body: " + data[2].body;
    console.log(komunikat);
}))
    .catch(blad => console.log("Zad 2.2 - Bład", blad))
    .finally(() => console.log("Zad 2.2 - Wykonane"));

//ZAD 3
var link = 'https://jsonplaceholder.typicode.com/posts/1';

function dodawanieAsync(id, userId){
    console.log("Zad 3 - Wynik dodawania " + id + " + " + userId + " to:");
    return(id+userId);
}

function postAsync(title, body){
    var kom = { title: title, body: body };
    return(kom);
}

async function asyncAwait(link) {
    let response = await fetch(link);
    if(response.ok) {
        JsonObject = await response.json();
        title = JsonObject.title;
        body = JsonObject.body;
        id = JsonObject.id;
        userId = JsonObject.userId;
        console.log(dodawanieAsync(id, userId));
        console.log(postAsync(title, body));
    }
}

asyncAwait(link);

//ZAD 4
function dodawanieAjax(id, userId){
    console.log("Zad 4 - Wynik dodawania " + id + " + " + userId + " to:");
    return(id+userId);
}

function postAjax(title, body){
    var kom = { title: title, body: body };
    return(kom);
}

let post10 = 'https://jsonplaceholder.typicode.com/posts/10';
let xmlhttpr = new XMLHttpRequest();

xmlhttpr.open('GET', post10);
xmlhttpr.responseType = 'json';
xmlhttpr.send();

xmlhttpr.onload = function() {
    let odp = xmlhttpr.response;
    title = odp.title;
    body = odp.body;
    id = odp.id;
    userId = odp.userId;
    console.log(dodawanieAjax(id, userId));
    console.log(postAjax(title, body));
};
xmlhttpr.onerror = function() {
    console.log("Zad 4 - Wystąpił błąd");
}

//ZAD 5
const post7 = fetch('https://jsonplaceholder.typicode.com/posts/7');

post7.then(function (response){
    response.json().then(function (data){
        console.log("Zad 5 - Wynik dodawania " + data.id + " + " + data.userId + " to: " + (data.id + data.userId));
        var kom = { title: data.title, body: data.body };
        console.log(kom);
    });
})

//ZAD 6
let post12 = 'https://jsonplaceholder.typicode.com/posts/12';
axios.get(post12)
    .then(function (response){
        title = response.data.title;
        body = response.data.body;
        id = response.data.id;
        userId = response.data.userId;
        console.log("Zad 6 - Wynik dodawania " + id + " + " + userId + " to: " + (id + userId));
        var kom = { title: title, body: body };
        console.log(kom);
    })

//LAB 2
var czyCiemny = 0;
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

var zmianaMotywu = document.createElement("button");
zmianaMotywu.innerHTML = "Ciemny motyw";
zmianaMotywu.style.backgroundSize = "cover";
zmianaMotywu.style.background = "black";
zmianaMotywu.style.color = "white";
document.getElementById("nav").appendChild(zmianaMotywu);

zmianaMotywu.onclick = function(){
    czyCiemny = 1;
    atr.style.backgroundColor = "black";
    atr.style.color = "white";
    document.getElementById("git-link").src = "assets/git-dark-mode.png";
    document.body.style.backgroundColor = "#2e2e2e";
    document.getElementById("tech").style.backgroundColor = "black";
    document.getElementById("tech").style.color = "white";
};

//LAB 3
function zmianaBackground(){
    atr.style.backgroundColor = "#69ec69";
}

function powrotBackground(){
    if(czyCiemny == 0)
    atr.style.backgroundColor = "white";
    else atr.style.backgroundColor = "black";
}

function przejscieAMW(){
    window.open("https://www.amw.gdynia.pl/");
}

atr.addEventListener("mouseenter", zmianaBackground);
atr.addEventListener("mouseleave", powrotBackground);
document.getElementById("AMW").addEventListener("click", przejscieAMW);

//LAB 2
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


