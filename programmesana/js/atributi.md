---
layout: default
title:  HTML atribūtu iestatīšana
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 8
---

# HTML atribūtu iestatīšana

Iedomāsimies, ka atlasītais elements ir kā objekts un atribūti ir tā īpašības

`innerHTML` ir elementa attēlojamais teksts

~~~js
var rindkopa = document.getElementById("rindkopa");
rindkopa.innerHTML = "Es esmu rindkopa!";
~~~

Apskatīsim piemēru, kā klikšķis uz pogas maina tās tekstu

~~~html
<button id="poga" onclick="mainaTekstu()">Spied šeit!</button>
~~~

~~~js
function mainaTekstu() {
    var poga = document.getElementById("poga");
    poga.innerHTML = "Hey!";
}
~~~

Izmēģini darbībā!  
<button style="padding:5px; border:1px solid black;" id="poga" onclick="var poga = document.getElementById('poga'); poga.innerHTML = 'Hey!';">Spied šeit!</button>

Lai paslēptu elementu, tam iestata atribūtu `hidden = true`

Ar `disabled = true` elementu padara neaktīvu, piemēram, neaktīva poga vairs nereaģēs uz klikšķiem

Atribūtus `width` un `height` pielieto attēliem un `div` blokiem