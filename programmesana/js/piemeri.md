---
layout: default
title:  Piemēri
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 10
--- 

# Praktiski piemēri

## Paziņojuma lodziņš

Pārlūkos ir iespējams izveidot paziņojuma lodziņu vēl angļu valodā to sauc par `alert` lodziņu.

~~~js

alert("Paziņojuma saturs");

~~~

Iznākums:

![html1](/media/js_alert.jpg)

## Ievades lodziņš

`prompt()` darbojas līdzīgi kā `alert()`, bet ļauj ievadīt arī, piemēram, vārdu.

~~~js

var vards = prompt("Ievadu savu vārdu!");

~~~

Ievadītais vārds saglabājas mainīgajā `vards`, kuru var izmantot, piemēram, izvadot sveicienu lappusē.

![prompt](/media/prompt.jpg)

## Ievades lauciņa nolasišana

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


## HTML elementa vērtības nomainīšana

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

## Iepirkumu saraksts

Uzbūvēsim vienkāršu iepirkšanās sarakstu, ko var papildināt, ievadot pirkumus

Sākumā nepieciešams tukšs saraksts, ievades lauks un poga

~~~html

<input id="pirkums"></input>
<button onclick="pievienot()">Pievienot pirkumu!</button>
<ol id="saraksts">
</ol>

~~~

Nospiežot pogu, pirkums no ievades lauka *pārcelsies* uz sarakstu 

~~~js
function pievienot() {
    var pirkums = document.getElementById("pirkums").value;
    var rinda = document.createElement("li");
    rinda.innerHTML = pirkums;
    var saraksts = document.getElementById("saraksts");
    saraksts.appendChild(rinda);
}
~~~

Rezultāts:  
![pirkumi](/media/pirkumi.jpg)