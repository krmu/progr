---
layout: default
title:  While cikli
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 5
---

# While cikli

Javascript programmēšanas valodā ir divu veidu cikli `for` un `while`.

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