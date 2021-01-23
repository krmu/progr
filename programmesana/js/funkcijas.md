---
layout: default
title: Funkcijas
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 9
---
# Funkciju definēšana

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

Funkcijas mainīgajos var tikt padoti arī masīvi.
{: .alert .alert-warning}
