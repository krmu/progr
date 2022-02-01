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
| ===   | Vienāds     |  4 === 4        |
| !==   | Nav vienāds | 4  !== 3     |
| >    | Lielāks     | 4 > 3|
| >=   | Lielāks vienāds       |  |
| <    | Mazāks       | 4 < 5 |
| <=   | Mazāks vienāds |  |
| &&   | Un (and)    | 4 && 4 |
| &#124;&#124; | vai (or)	 | saldējums vai medus |

Vairāk: https://www.w3schools.com/js/js_operators.asp

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
Piemēram:

~~~js
var x = 0;
var y = 5;

if ( x === 5){

    alert("X ir vienāds ar 5");

}else{

    alert("X nav vienāds ar 5");

}

if (x > 5){
    console.log("Mainīgais X ir lielāks par 5.");
}
~~~