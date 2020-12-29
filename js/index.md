---
layout: page
title: JavaScript
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
---

# Lietojums

## Mainīgie

Mainīgajiem nav jāpieraksta to veids, bet mainīgo nosaukam priekšā jāraksta vārdu `var`. 

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

Javascript programmēšanas valodā nosacījums tiek veikts ar vārdu `if` un nosacījumu darbības atdala ar figūriekavām.

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
~~~~

Funkcijas parametros `var` tikt padoti arī masīvi.

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