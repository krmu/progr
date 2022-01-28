---
layout: default
title:  Selektori
grand_parent: Programmēšana
parent: CSS
nav_order: 2
---

# Selektori

Apskatīsim, kā iespējams mainīt burtu izmēru visām rindkopām HTML dokumentā.

~~~css
p {
     font-size: 18pt;
}
~~~

Šajā gadījumā `p` ir selektors, `font-size` ir īpašība, bet `18pt` ir vērtība.

Vienā selektorā iespējams iestatīt īpašības vairākiem elementiem, piemēram, visu līmeņu virsrakstiem.

~~~css
h1, h2, h3, h4, h5, h6 {
    font-family: "Arial";
}
~~~

Ne vienmēr mēs vēlamies formatēt visas rindkopas vai visus virsrakstus lapā, tāpēc lieto [klases un identifikatorus]({% link programmesana/css/klases_un_id.md %}).





