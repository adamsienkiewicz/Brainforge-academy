var haslo = "Bez pracy nie ma kołaczy"
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";

function wypisz_haslo()
{
    document.getElementById('plansza').innerHTML = haslo;
}

window.onload = wypisz_haslo