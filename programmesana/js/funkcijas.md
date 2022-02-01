---
layout: default
title: Funkcijas
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 9
---
# Funkciju veidi pēc to darbības veidiem

Javascript programmēšanas valodā ir iespējams definēt funcijas, lai universālu kodu izmantotu atkārtoti.

Funkcijas var veikt divu veidu darbības.
1. Veikt darbību un neko neatgriezt atpakaļ, piemēram, nomaina lapai fonu.
2. Veikt darbību un atgriezt kādu vērtībum,piemēram, aprēķināt skaitli, tad izmanto vārdu `return`.

# Funkciju lietojums

Funkcijas sāk rakstīt ar vādu `function`, tad seko funkcijas nosaukums un iekavās tās parametri.

Svarīgi! Nosaucot funkcijas, nedrīkst lietot: garumzīmes, mīkstinājuma zīmes, atstarpes. Funkcijas ir reģistrjūtīgas(lielie un mazie burti ir svarīgi).
{: .alert .alert-danger}

~~~js
function nosaukums( MAINĪGAIS, MAINĪGAIS, MAINĪGAIS utt.){

  // DARBĪBA

}
~~~ 

Ja funkcijas darbības rezultātā ir jāatgriež vērtība, tad lieto `return`.

~~~js
function ( MAINĪGAIS, MAINĪGAIS, MAINĪGAIS utt.){

    return vērtība;

}
~~~ 

Apskatīsim funkcijas piemēru. Funkcijai `saskaiti` tiek padoti līdzi divi parametri kā funkcijas argumenti, kuri jāsaskaita un jāatgriež atpakaļ to summa. Funckijas argumenti nosaukti kā `a` un `b`.

```js

function saskaiti(a,b){
  return a + b;
}

saskaiti(1,2); // Tiek izsaukta funkcija

```

Ar rindas `saskaiti(1,2);` palīdzību, tiek izsaukta funkcija `saskaiti` un tās argumentos līdzi iedoti skaitļi `1` un `2`. Tā kā rezultāts netiek ielādēts vai izdrukāts lapā, tad rezultāts nav vizuāli redzams. 

Lai iegūtu redzamu rezultātu, piesaistīsim funkcijas rezultātam mainīgo.

```js

function saskaiti(a,b){
  return a + b;
}

var rezultaats = saskaiti(1,2); // Tiek izsaukta funkcija

console.log(rezultaats);

```

Mainīgajā `rezultaats` tiek ielādēts funkcijas `saskaiti(1,2)` izpildes iznākums. 

Otrs piemērs ir veikt darbību funkcijā un uzreiz izvadīt tās rezultātu. Funkcijai `izvadi_konsolee` ir pievienots parametrs `vards`. 
Funkcijas iekšienē uzreiz tiek veikta darbība.
Mainīgais, kurš ir fukcijas parametrs, tiek sasaistīts ar statisku tekstu (`ir iedotais funkcijas parametrs.`) un izvadīts konsolē.
Šādā gadījumā nav vajadzīgs mainīgais, kuram piesaista funkcijas iznākumu.

```js

function izvadi_konsolee(vards){
  console.log(vards+" ir iedotais funkcijas parametrs.");
}

izvadi_konsolee("Tests"); // Izvade: Tests ir iedotais funkcijas parametrs.

izvadi_konsolee(1234); // Izvade: 1234 ir iedotais funkcijas parametrs.


```