---
layout: default
title:  Klases un identifikatori
grand_parent: Programmēšana
parent: CSS
nav_order: 3
---

## Klases

Elementus HTML dokumentā var ērti grupēt, izmantojot klases. Klasi elementam iestata šādi:

~~~html
<p class="zilaRindkopa">Es mācos kodēt...</p>
~~~

Un atbilstošais CSS selektors, lai rindkopa attēlotos zilā krāsā.

~~~css
.zilaRindkopa { 
    color: blue;
}
~~~

Visas rindkopas, kurām iestatīta klase `zilaRindkopa`, attēlosies zilā krāsā.

Klases īpašības iespējams definēt arī atsevišķiem elementiem, piemēram, dažādas sarkanās nokrāsas virsrakstiem.

~~~html
<h1 class="sarkans">Sarkans virsraksts</h1>
<h2 class="sarkans">Sarkans virsraksts</h2>
<h3 class="sarkans">Sarkans virsraksts</h3>
~~~

~~~css
h1.sarkans {
  color:rgb(255, 0, 0);
}

h2.sarkans {
  color:rgb(220, 0 ,0);
}

h3.sarkans {
  color:rgb(200, 0 ,0);
}
~~~

## Identifikatori

Identifikatorus lieto, lai stilizētu unikālu elementu lappusē.

Pieņemsim, ka lappusē ievietots logo, kuram jāiestata izmēri.

~~~html
<img id="logo" src="mans_logo.jpg">
~~~
~~~css
#logo {
    width: 80px;
}
~~~

Ieteicams identifikātorus lapā turēt unikālus!
{: .alert .alert-warning}



