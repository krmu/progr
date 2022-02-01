---
layout: default
title: Lietošana
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 1
---
## Sākums

Lai sāktu mājaslapā rakstīt Javascript kodu jālieto `<script type="application/javascript"></script>` birkas. 

Var izmantot arī vienkāršo variantu `<script></script>`

Piemērs:

~~~html

<script type="application/javascript">

</>

~~~

Vai - otrs variants.

~~~html

<script>
    
// Javascript kods

</script>

~~~

Lai iekļautu savā lapā ārējo Javascript kodu:

`<script src="mansskripts.js"></script>`

Ārējie Javascript faili var tikt uzturēti uz cita servera. Ja skripts uz ārējā servera tiek noņemts, tad arī vietnē netiks ielādēts šis fails.

# Komentāri kodā

~~~js

alert("Paziņouma lodziņš");

// Vienas rindas komentārs
/*
 Vairāku rindu komentārs
 
*/
~~~

# Brīdinājumi konsolē

Programmētājs, lai atkļūdotu savu kodu, var veidot dažādus paziņojumus consolē. Konsole parādās, ja lietotājs pārlūkā nospiež labo peles klikšķi un tad izvēlas `Console`.

Ir trīs veida paziņojumi.


Informatīvais - informē par kādu koda darbības posmu.
{: .alert .alert-warning}
Kļūda - parasti kļūdu veida paziņojumi, tiek izmantots arī sintakses kļūdu gadījumos.
{: .alert .alert-danger}
Parasts paziņojums - parasts teksts konsolē.
{: .alert .alert-default}


Visi trīs paziņojumi attēloti bildē.

![example image](/media/js_konsoles_pazinojumi.png)
 
Kods:
~~~js

console.log("Parasts teikums konsolē");
console.warn("Brīdinājums konsolē");
console.error("Kļūda konsolē");

~~~
`<script>` tagu vēlams ievietot body bloka beigās! 
{: .alert .alert-warning}
