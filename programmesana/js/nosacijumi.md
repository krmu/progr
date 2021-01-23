---
layout: default
title: Nosacījumi
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 3
---

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

if ( x == 5){

    alert("X ir vienāds ar 5");

}else{

    alert("X nav vienāds ar 5");

}
~~~