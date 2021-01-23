---
layout: default
title:  Cikli
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 5
---


# Cikli

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