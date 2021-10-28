const form = document.querySelector("form");
const ile = document.querySelector('#nr');

form.addEventListener("submit",function printNumbers(nr){
    var ciagLiczb = "";
    const val1 = ile.value;

    for (var i = 1; i <= val1; i++) {
        ciagLiczb += i;
    }
    alert(ciagLiczb);
});


