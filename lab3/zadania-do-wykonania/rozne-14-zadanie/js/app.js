window.onload = start ;

function start(){
    const tekst = prompt("Podaj tekst!: ");
    palindrome(tekst);
}

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    console.log(reverseStr === lowRegStr);
}
