---
layout: default
title:  JQuery
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
---
# jQuery

jQuery ir Javascript papildus bibliotēka, kuru var izmantot, lai saīsinātu savu kodu, tāpat dažas funkcijas ir lietojamas ar īsāku pierakstu un vieglāk iegūstams rezultāts.

Apskatīsim piemērus.


Javascript valodā atlasām elementu.

Javascript bez jQuery:

~~~js

var vertiba = document.getElementById("identifikators");

~~~
Javascript izmantojot jQuery:

~~~js

var vertiba = $("$identifikators");

~~~


Javascript valodā atlasām elementa vērtību lapā jeb ievades lauciņa vērtību.

Javascript bez jQuery:
~~~js

var vertiba = document.getElementById("identifikators").value;

~~~
Javascript izmantojot jQuery:

~~~js

var vertiba = $("#identifikators").val();

~~~
