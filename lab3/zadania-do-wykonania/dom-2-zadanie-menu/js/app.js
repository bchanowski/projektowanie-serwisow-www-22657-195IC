const strGlowna = document.querySelector('#str-g');
const galeria = document.querySelector('#galeria');
const nowosci = document.querySelector('#nowosci');
const naszePrace = document.querySelector('#prace');
const naszZespol = document.querySelector('#zespol');
const kontakt = document.querySelector('#kontakt');

strGlowna.addEventListener("click", function zmianaActive1(e){
    galeria.classList.remove("nav-el-active");
    nowosci.classList.remove("nav-el-active");
    naszePrace.classList.remove("nav-el-active");
    naszZespol.classList.remove("nav-el-active");
    kontakt.classList.remove("nav-el-active");
    strGlowna.classList.add("nav-el-active");
});

galeria.addEventListener("click", function zmianaActive2(e){
    strGlowna.classList.remove("nav-el-active");
    nowosci.classList.remove("nav-el-active");
    naszePrace.classList.remove("nav-el-active");
    naszZespol.classList.remove("nav-el-active");
    kontakt.classList.remove("nav-el-active");
    galeria.classList.add("nav-el-active");
});

nowosci.addEventListener("click", function zmianaActive3(e){
    galeria.classList.remove("nav-el-active");
    strGlowna.classList.remove("nav-el-active");
    naszePrace.classList.remove("nav-el-active");
    naszZespol.classList.remove("nav-el-active");
    kontakt.classList.remove("nav-el-active");
    nowosci.classList.add("nav-el-active");
});

naszePrace.addEventListener("click", function zmianaActive4(e){
    galeria.classList.remove("nav-el-active");
    nowosci.classList.remove("nav-el-active");
    strGlowna.classList.remove("nav-el-active");
    naszZespol.classList.remove("nav-el-active");
    kontakt.classList.remove("nav-el-active");
    naszePrace.classList.add("nav-el-active");
});

naszZespol.addEventListener("click", function zmianaActive5(e){
    galeria.classList.remove("nav-el-active");
    nowosci.classList.remove("nav-el-active");
    naszePrace.classList.remove("nav-el-active");
    strGlowna.classList.remove("nav-el-active");
    kontakt.classList.remove("nav-el-active");
    naszZespol.classList.add("nav-el-active");
});

kontakt.addEventListener("click", function zmianaActive6(e){
    galeria.classList.remove("nav-el-active");
    nowosci.classList.remove("nav-el-active");
    naszePrace.classList.remove("nav-el-active");
    naszZespol.classList.remove("nav-el-active");
    strGlowna.classList.remove("nav-el-active");
    kontakt.classList.add("nav-el-active");
});
