---
layout: default
title: JavaScript
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
---
![pythonlogo](/media/jslogo.png){: .logoval}
# Lietojums
## Sākums

Lai sāktu mājaslapā rakstīt Javascript kodu jālieto `<script type="application/javascript"></script>` birkas. 

Var izmantot arī vienkāršo variantu `<script></script>`

Piemērs:

~~~html

<script type="application/javascript">

</script>

~~~

Lai iekļautu savā lapā ārējo Javascript kodu:

`<script src="mansskripts.js"></script>`



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

var vertiba = document.getElementsByClassName("manaklase");

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

var teksta_masivs = ["Krūmi", "Koks", "Stabs"];

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
~~~note

Funkcijas mainīgajos var tikt padoti arī masīvi.

~~~

## Cikli

Javascript programmēšanas valodā ir divu veidu cikli `for` un `while`.

`For` ciklu lieto gadījumos, kad ir vajadzīgs cikla skaitītājs un ciklam ir noteikts galapunkts un/vai sākumpunkts.

Pielietojums:

~~~js
for( SĀKUMA VĒRTĪBA; PILDĪT KAMĒR; SOLIS){

    Darbība;

}
~~~~
Piemērs:
~~~js

for( var sk = 0; sk< 10; sk++ ){

    console.log(sk); // Konsolē tiks izvadīts skaitlis intervālā no 0 līdz 9

}
~~~
`While` ciklu lieto gadījumos, kad nav vajadzīgs cikla solis un cikls tiek pildīts līdz konkrētai darbībai.

Pielietojums:
~~~js
    while( NOSACĪJUMS ){

    Darbība;

    }
~~~
Piemērs:

~~~js 

var pildi = true;

while(pildi == true){

    console.log("Šī darbība notiek kamēr vien mainīgais PILDI ir vienāds ar TRUE");

}

~~~
## JSON

JSON jeb JavaScript Object Notation ir datu turēšanas veids jeb veids kā var tikt strukturēti dati masīvā. JSON formāts ļauj drošā veidā pārsūtīt datus no klienta uz serveri konkrētā formātā.

Piemērs:

~~~js 

{
	"skoleni":[
		{"vards":"Jānis", "uzvards":"Koks", vecums: 12},
		{"vards":"Anna", "uzvards":"Stabiņa"}
	]
}
~~~

Šādā veidā var strukturēt datus JSON objektā. 

Kā izmantot šādus datus?
~~~js
var obj = JSON.parse('{ "vards":"Valērijs Visvaris", "vecums":30, "pilseta":"Rīga"}');
// Lai iegūtu datus no šī objekta izmanto mainīgā nosaukumu un atslēgu:

alert(obj.vards + ", " + obj.pilseta);

// Paziņojumā tiks paziņots vārds un pilsēta.

~~~

Ja mums ir vairāki elementi objektā:

~~~js
var obj = JSON.parse('[ { "vards":"Valērijs Visvaris", "vecums":30, "pilseta":"Rīga"},{ "vards":"Anna Bauma", "vecums":12, "pilseta":"Rīga"} ]');
for (var i=0; i < obj.length; i++) {
    console.log(obj[i].vards);
}
~~~

Konsolē tiks izdrukāti visi elementi objektā ar atslēgu `vards`.
~~~warning

Ja ir vairāki kā viens elements objektā objekts sākas ar [ un  beidzas ar ]
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

## Praktiski piemēri

### Paziņojuma lodziņš

Pārlūkos ir iespējams izveidot paziņojuma lodziņu vēl angļu valodā to sauc par `alert` lodziņu.

~~~js

alert("Paziņojuma saturs");

~~~

Iznākums:

![html1](/media/js_alert.jpg)

### Ievades lauciņa nolasišana

Ar Javascript progr. valodu ir iespējams arī nolasīt ievades lauciņu vērtības. Mēs definēsim teksta ievades lauciņu un paziņojumā izvadīsim tā saturu.

~~~html

<label>Ievade: </label><input type="text" id="ievades_lauks">

<button onclick="nolasi();"></button>

~~~

Tika definēti 3 elementi lapā. `label` - elements, kurš kalpo kā skaidrojums ievades lauciņam.
`<input type="text" id="ievades_lauks">` - tekstuāls ievades lauks, kura `type` atribūtā ir pateikts, ka ievades lauks ir tekstuāls.
`id="ievades_lauks"` unikāls identifikātors visā lapā.

`<button onclick="nolasi();">Nolasi mani!</button>` - poga, kura nospiežot palaiž funkciju `nolasi()`

Izskats lapā:

![html1](/media/js_alert2.jpg)

Tad tiek definēts Javascript kods:


~~~js
function nolasi(){
    var ievades_lauks_atlasi = document.getElementById("ievades_lauks"); // Atlasām elementu no mūsu HTML lapas.
    var vertiba = ievades_lauks_atlasi.value; // Paņemam no mūsu elementa tikai un vienīgi tā vērtību
    alert("Ievades lauka vērtība ir: " + vertiba); // Paziņojam lapā ievades lauka vērtību.
}
~~~
![html1](/media/js_alert3.jpg)


### HTML elementa vērtības nomainīšana

Ar Javascript ir iespējams arī nomainīt elementa saturu lapu nepārlādējot.

Iedomāsimies, ka mums ir pirmā līmeņa virsraksts, kurā ir vārds "Diena", bet mēs vēlamies ar pogas palīdzību nomainīt tā saturu uz "Nakts".

HTML Kods:

~~~html

<h1 id="mainit_so">Diena</h1>

<button onclick="maini_mani();">Nomainīt saturu</button>

~~~

~~~js
function maini_mani(){
    var ievades_lauks_atlasi = document.getElementById("mainit_so"); // Atlasām elementu no mūsu HTML lapas.
    ievades_lauks_atlasi.innerHTML =  "Nakts"; // Iestatām tā HTML saturu uz vārdu "Nakts"
}
~~~