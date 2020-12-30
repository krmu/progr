---
layout: default
title: JavaScript
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
---

# Lietojums
## Elementu atlase lapā

Lai atlasītu kādu elementu dokumentā pēc tā identifikatora izmanto:

~~~warning

Ieteicams identifikātorus lapā turēt unikālus!

~~~

~~~js

var vertiba = document.getElementById("identifikators");

~~~

Kur vārda `identifikators` lieto unikālo identifikatoru. HTML birkā to raksta: `id="identifikators"`

Lai atlasītu kādu elementu dokumentā pēc tā klases izmanto:

~~~warning

Klases elementiem lapā var atkārtoties

~~~

~~~js

var vertiba = ocument.getElementsByClassName("manaklase");

~~~

Kur vārda `manaklase` lieto elementa  `Class` identifikatoru. HTML birkā to raksta: `class="manaklase"`


## Mainīgie
~~~warning

Mainīgajiem nav jāpieraksta to veids, bet mainīgo nosaukam priekšā jāraksta vārdu `var`. 

~~~
~~~js

var Skaitls = 1;

var Tekstuāls mainīgais = "Šis ir teksta mainīgais";

var Masīvs = [1,2,3,4,5];

var Masīvs =  ["Krūmi", "Koks", "Stabs"];

~~~~

Piemērs:

~~~js
var x = 1;

var vards = "Mans vārds ir Pēteris";

var atzimes = [1,2,3,4,5];

var tekstamasivs = ["Krūmi", "Koks", "Stabs"];

~~~~
## Nosacījumu veidošana

~~~tip

Javascript programmēšanas valodā nosacījums tiek veikts ar vārdu `if` un nosacījumu darbības atdala ar figūriekavām.
~~~
~~~js
if( nosacījums ){

    Darbība

}else{

    Pretēja darbība

}
~~~
Gadījumos, ja ir vairāku nosacījumu pārbaude:

~~~js
if( nosacījums ){

    Darbība

}else if( nosacījums ){

    Darbība

}else{

    Pretēja darbība

}
~~~
Piemēram:
~~~js
var x = 0;

var y = 5;

if ( x == 5){

    alert("X ir vienāds ar 5");

}else{

    alert("X nav vienāds ar 5");

}
~~~
## Funkciju definēšana

Javascript programmēšanas valodā ir iespējams definēt funcijas, lai universālu kodu izmantotu atkārtoti.
~~~js
function ( MAINĪGAIS, MAINĪGAIS, MAINĪGAIS utt.){

  return;

}
~~~ 
Funcijas iekavās tiek padoti mainīgie, kurus funcija savā darbā var izmantot.

Piemēram:

~~~js
function saskaiti(a,b){

    return a+b;

}

saskaiti (1, 3); // atbilde 4


function teikums(vards,skola){

    return "Mani sauc"+vards+". Es mācos: "+ skola+". ";

}

teikums("Jānis", "Babītes vidusskolā"); // Mani sauc Jānis. Es mācos: Babītes vidusskolā
~~~
~~~tip

Funkcijas parametros var tikt padoti arī masīvi.

~~~

## Cikli

Javascript programmēšanas valodā ir divu veidu cikli for un while.

For ciklu lieto gadījumos, kad ir vajadzīgs cikla skaitītājs un ciklam ir noteikts galapunkts.

Pielietojums:
~~~js
for( SĀKUMA VĒRTĪBA; PILDĪT KAMĒR; SOLIS){

    Darbība;

}
~~~~
While ciklu lieto gadījumos, kad nav vajadzīgs cikla solis un cikls tiek pildīts līdz konkrētai darbībai.

Pielietojums:
~~~js
    while( NOSACĪJUMS ){

    Darbība;

    }
~~~
Piemērs:

~~~js 
for( var sk = 0; sk< 10; sk++ ){

    console.log(sk); // Konsolē tiks izvadīts skaitlis intervālā no 0 līdz 9

}

var pildi = true;

while(pildi == true){

    console.log("Šī darbība notiek kamēr vien mainīgais PILDI ir vienāds ar TRUE");

}

~~~

## jQuery

jQuery ir Javascript papildus bibliotēka, kuru var izmantot, lai saīsinātu savu kodu, tāpat dažas funkcijas ir lietojamas ar īsāku pierakstu un vieglāk iegūstams rezultāts.

Apskatīsim piemērus.


Javascript valodā atlasām elementu.

Javascript bez jQuery:

~~~js

var vertiba = document.getElementById("identifikators");

~~~
Javascript izmantojot jQuery:

~~~js

var vertiba = $("$identifikators");

~~~


Javascript valodā atlasām elementa vērtību lapā jeb ievades lauciņa vērtību.

Javascript bez jQuery:
~~~js

var vertiba = document.getElementById("identifikators").value;

~~~
Javascript izmantojot jQuery:

~~~js

var vertiba = $("#identifikators").val();

~~~


## AJAX 

AJAX jeb Asynchronous JavaScript and XML ir veids kā mājaslapā iegūt informāciju lapu nepārlādējot tādējādi ietaupot servera resursus. AJAX ļauj nomainīt saturu mājaslapas elementā lapu nepārlādējot. Piemēram, nomaina tabulas saturu klientam nospiežot pogu vai meklētājs, kurā lietotājs ieraksta vārda daļu un serveris atgriež atpakaļ visus ierakstus, kuri atbilst šim vaicājumam.

~~~danger

AJAX nav programmēšanas valoda.

~~~

AJAX pieprasījumus var veidot izmantojot `jQuery` bibliotēku vai bez tās.

Pirmais piemērs bez.

~~~js
var xhttp = new XMLHttpRequest(); // Tiek definēta metode, kura tiks izmantota
  xhttp.onreadystatechange = function() { // Kad metode ir gatava jeb ielādēta tiek izpildīda funkcija
    if (this.readyState == 4 && this.status == 200) { // Ja funckija ir veiksmīga un statusa kods ir 200, kas nozīme OK
      document.getElementById("demo").innerHTML = this.responseText; // Dokumenta elementā `demo` tiek ielādeta atbilde no faila 
    }
  };
  xhttp.open("GET", "ajax_info.txt", true); // Izpilda `GET` pieprasījumu uz failu ajax_info.txt
  xhttp.send();
~~~

Otrais piemērs, izmantojot `jQuery` bibliotēku.

~~~warning

Pirms izmantot šo piemēru, lapā jābūt ielādētai Jquery bibliotēkai. [jQuery](https://jquery.com/)

~~~

Ielāde lapas galvenē.
~~~html

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
~~~

Pats pieprasījums

~~~js

$.ajax('https://manaadrese.nav/getdata',   // Pieprasījuma adrese
    {
        success: function (data, status, xhr) {//  Atbilde, ja pieprasījums ir veiksmīgs
            $('p').append(data); // Atrodam lapā paragrāfu un pievienojam iegūtos datus
    }
});

~~~