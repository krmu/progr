---
layout: default
title: Nosacījumi un loģiskie operatori
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 3
---

# Loģiskie operatori

Loģiskie operātori ļauj pārbaudīt vai tiek izpildīts nosacījums. Nosacījumu veidošana ir apskatīta zemāk.

| Operators | Apraksts    | Piemērs  |
|:-----|:------------|:------------|
| ==   | Vienāds     |  4 == 4        |
| ===   | Vienāds     |  4 === 4        |
| !=   | Nav vienāds | 4  != 3     |
| !==   | Nav vienāds | 4  !== 3     |
| >    | Lielāks     | 4 > 3|
| >=   | Lielāks vienāds       |  |
| <    | Mazāks       | 4 < 5 |
| <=   | Mazāks vienāds |  |
| &&   | Un (and)    | 4 && 4 |
| &#124;&#124; | vai (or)	 | saldējums vai medus |

Vairāk: https://www.w3schools.com/js/js_operators.asp

Par "===" un " == " skatīt zemāk.

# Nosacījumu veidošana


Javascript programmēšanas valodā nosacījums tiek veikts ar vārdu `if` un nosacījumu darbības atdala ar figūriekavām.
{: .alert .alert-warning}

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
## Piemērs nr.1 - viens nosacījums:

~~~js
let x = 0; // Mainīgais x ir vienāds ar vērtību 0
let y = 5; // Mainīgais y ir vienāds ar vērtību 5

if ( x === 5){

    alert("X ir vienāds ar 5");

}else{

    alert("X nav vienāds ar 5");

}

~~~
## Piemērs nr.2 - divi nosacījumi:

~~~js
let x = 0; // Mainīgais x ir vienāds ar vērtību 0

if (x > 0 && x <= 10){ // Tiek pārbaudītas divas loģiskās izteiksmes uzreiz.
    // Tiek pārbaudīts vai x ir lielāks par 0 un mazāks par 10 (ieskaitot) vienlaicīgi
    alert("X ir lielāks par 0 un mazāks par 10");
}else if (x > 10){
    // Tiek pārbaudīts vai x ir lielāks par 10
    alert("X ir lielāks par 10");
}else{
    // Ja neviens no nosacījumiem nav izpildījies
    alert("X ir mazāks par 0");
}
~~~

## Piemērs nr.3 - salīdzina ar tekstu:

~~~js
let skolens = "Visvaldis"; // Mainīgais skolens ir vienāds ar tekstu "Visvaldis"

if(skolens == "Visvaldis"){
    alert("Skolens ir vienāds ar tekstu Visvaldis");
}else{
    alert("Skolens nav vienāds ar tekstu Visvaldis");
}
~~~
Šeit nav svarīga stingrā vienādība, jo teksts nevar skaitlis. Tāpēc šeit tiek izmantots `==` apzīmējums.

# Svarīgi par " === " un " == "

Javascript programmēšanas valodā tiek lietots vienādības apzīmējums ar 3 vienādības zīmēm `===` un divām.
Atšķirība ir tāda, ka `===` pārbauda arī mainīgo tipu, bet `==` nē.
Piemēram doti divi mainīgie:

~~~js
let x = 5; //  Šis ir skaitlis
let x_tekstuals = "5"; // Šis ir teksts, bet tā vērtība ir skaitlis 5 - noformēts kā teksts!
if(x == x_tekstuals){

    console.log("Šie ir vienādi, ja ignorē mainīgo tipu");
    // Šis nostrādā, jo 5 kā skaitlis ir vienāds ar 5 kā tekstu.
}

if (x === x_tekstuals){
    
    console.log("Šie ir vienādi, ja svarīgs ir mainīgo tips!");
    // Šis nenostrādā, jo mainīgo tipi ir atšķirīgi - viens ir teksts otrs ir skaitlis.
}else{
    console.log("Šie nav vienādi, jo mainīgo tipi ir atšķirīgi!");
    // Šis nostrādā, jo mainīgo tipi ir atšķirīgi un šis ir pretējs nosacījums.
}
~~~