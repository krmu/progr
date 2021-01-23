---
layout: default
title:  Nosacījumu veidošana
description: ~
grand_parent: Programmēšana
parent: PHP
nav_order: 3
---
# Nosacījumu veidošana

Lai veidotu nosacījumu, izmanto komandu `if`. Nosacījuma beigās lieto `{` un `}`. Nosacījumu liek parastajās iekavās.
{: .alert .alert-simple}
Apskatīsim piemēru.

~~~php

$a = 1;
$b = 2;

if($a > $b){
    echo $a . " ir lielāks nekā ". $b;
}

~~~