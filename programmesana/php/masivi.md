---
layout: default
title:  Masīvi
description: ~
grand_parent: Programmēšana
parent: PHP
nav_order: 4
---
# Masīvi

Vienkāršos masīvus definē:

~~~php

$masivs = array("elements1","elements2","elements2");

~~~
Masīvu atslēgu sāk skaitīt no `0` un tas nozīmē, ka piekļūstot vārdam `elements1` būs jāizmanto `$masivs[0]`. Lai izvadītu informāciju no servera puses pie klienta jāizmanto komanda `echo`.

Piemērs. Tiek izdrukāts pirmais elements.

~~~php

$masivs = array("elements1","elements2","elements2");

echo $masivs[0];

~~~
~~~tip
Lai redzētu katram elementa atslēgu masīvā var izmantot arī komandu `var_dump()` tā izvadīs visu masīvu ar to elementu atslēgām.
~~~
~~~php 

var_dump($masivs);

~~~

Multidimensionālos masīvus definē to atslēgu, kas nav kārtas skaitlis masīvā.

~~~php

$a = array("pirmais" => 1,"otrais" => 2);

~~~

Izgūstot datus no māsīva varam izmantot atkal komandu, kura izsauc konkrētu masīva elemetu pēc tā atslēgas. Mēs ņemsim elementu "otrais".

~~~php

echo $a['otrais'];

~~~

Tāpat varam definēt masīvu iekš masīva atslēgas, proti, noglabāt vēl vienu masīvu zem konkrētas atslēgas.

~~~php

$a = array("pirmais" => 1,"otrais" => array("elementatslega"=> 1234));

~~~
Šeit esam definējuši vēl vienu masīvu zem atslēgas `otrais`. Kā iegūt šo elementu?

~~~php

echo $a['otrais']['elementatslega'];

~~~