---
layout: default
title:  Elementu pievienošana
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 8
---

# Elementu pievienošana lapā

Elementu izveido ar `document.createElement([birka])`

~~~js

let virsraksts = document.createElement("h1");

~~~
Pēdiņās raksta elementa birkas nosaukumu, piemēram, `h1`, `p`, `div` utt.

Lai tas būtu redzams, elementu jāpievieno body blokam ar `appendChild([elements])`

~~~js

document.body.appendChild(virsraksts);

~~~

## Piemērs

Ja vēlamies ar Javascript palīdzību uztaisīt dizainētu `div` birku, tad izmantosim šādu kodu:

~~~js


let jauns_div = document.createElement("div");
jauns_div.style.backgroundColor = "red"; // uzliekam fona krāsu uz sarkanu
jauns_div.style.width = "100px"; // uzliekam platuma izmēru
jauns_div.style.height = "100px"; // uzliekam augstuma izmēru
jauns_div.style.border = "1px solid black"; // uzliekam apmales biezumu un krāsu
jauns_div.style.margin = "10px"; // uzliekam atstarpi no citiem elementiem
jauns_div.style.padding = "10px"; // uzliekam iekšējo atkāpi
jauns_div.style.textAlign = "center"; // uzliekam teksta centēšanu
jauns_div.style.color = "white"; // uzliekam teksta centēšanu
jauns_div.innerHTML = "Šis ir mana apgabala saturs!"; // uzliekam tekstu
document.body.appendChild(jauns_div); // pievienojam body blokam

~~~
Iznākums:

![Izveidots div elements](/media/piemers_html_jaunsElements.png)

