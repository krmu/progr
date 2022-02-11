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

var virsraksts = document.createElement("h1");

~~~

Lai tas būtu redzams, elementu jāpievieno body blokam ar `appendChild([elements])`

~~~js

document.body.appendChild(virsraksts);

~~~


