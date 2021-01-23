---
layout: default
title:  Funkcijas
description: ~
grand_parent: Programmēšana
parent: PHP
nav_order: 6
---
# Funkcijas

Lai definētu funkcijas PHP valodā, jāizmanto vārds `function`. 

Piemērs:

~~~php

function saskaiti($a,$b){
    return $a + $b;
}
~~~

Šajā funkcijā tiek doti līdzi divi mainīgie `$a` un `$b`. Funkcija tos saskaita un ar komandu `return` atgriež lietotājam. Lai iegūtu reālu rezultātu:

~~~php

function saskaiti($a,$b){
    return $a + $b;
}

echo saskaiti(3,3);

~~~

Atbilde 6.