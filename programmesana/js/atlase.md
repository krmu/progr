---
layout: default
title:  Elementu atlase
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 7
---

# Elementu atlase lapā

Lai atlasītu kādu elementu dokumentā pēc tā identifikatora izmanto:

Ieteicams identifikātorus lapā turēt unikālus!
{: .alert .alert-warning}


~~~js

var vertiba = document.getElementById("identifikators");

~~~

Kur vārda `identifikators` lieto unikālo identifikatoru. HTML birkā to raksta: `id="identifikators"`

Lai atlasītu kādu elementu dokumentā pēc tā klases izmanto:

Klases elementiem lapā var atkārtoties
{: .alert .alert-warning}


~~~js

var vertiba = document.getElementsByClassName("manaklase");

~~~

Kur vārda `manaklase` lieto elementa  `Class` identifikatoru. HTML birkā to raksta: `class="manaklase"`
