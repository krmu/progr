---
layout: default
title:  Sīkdatnes
description: Sīkdatņu pielietošana
grand_parent: Programmēšana
parent: JavaScript
nav_order: 10
---

# Sīkdatnes

Sīkdatnes (cookies) ļauj datorā saglabāt mazas datu vienības par mājas lapas apmeklētāju.

Var teikt, ka sīkdatne ir mazs fails pārlūkprogrammas kešatmiņā, kas satur parametrus un to vērtības.

Apskatīsim piemēru...

~~~js
document.cookie = "lietotajs=Andris";
~~~

Piemērā redzams, kā sīkdatnē iestata lapas apmeklētāja vārdu.

Noklusēti sīkdatnes tiek dzēstas, aizverot pārlūkprogrammu, bet iespējams definēt arī sīkdatnes derīguma termiņu.

~~~js
document.cookie = "lietotajs=Andris; expires=Wed, 10 Nov 2021 12:00:00 UTC; path=/;";
~~~

Parametrs *path* norāda noklusēto ceļu uz mājas lapas direktoriju.

Lai dzēstu sīkdatni, tai iestata atpakaļejošu datumu.