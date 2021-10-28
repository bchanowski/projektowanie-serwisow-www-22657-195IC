window.onload = start ;

function start(){
    const imie = prompt("Podaj imię: ");
    const miesiac = prompt("Podaj miesiąc: ");
    coRobi(imie,miesiac);
}

function coRobi(imie,miesiac){
    if((typeof(imie)=="string")==true && (typeof(miesiac)=="string")==true)
    {
        var pom = miesiac.toLowerCase();
        switch(pom){
            case "grudzien":
            case "styczen":
            case "luty":
                alert(imie+" jezdzi na sankach");
                break;
            case "marzec":
            case "kwiecien":
            case "maj":
                alert(imie+" chodzi po kaluzach");
                break;
            case "czerwiec":
            case "lipiec":
            case "sierpien":
                alert(imie+" sie opala");
                break;
            case "wrzesien":
            case "pazdziernik":
            case "listopad":
                alert(imie+" zbiera liscie");
                break;
            default:
                alert(imie+" uczy się JS");
                break;
        }
    }
    else{
        alert("Podałeś złe zmienne ");
    }
}
