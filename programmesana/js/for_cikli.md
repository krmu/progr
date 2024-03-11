---
layout: default
title:  For cikli
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 6
---

# For cikli

Javascript programmēšanas valodā ir divu veidu cikli `for` un `while`.

`For` ciklu lieto gadījumos, kad ir vajadzīgs cikla skaitītājs un ciklam ir noteikts galapunkts un/vai sākumpunkts.

Pielietojums:

~~~js
for( SĀKUMA VĒRTĪBA; PILDĪT KAMĒR; SOLIS){

    Darbība;

}
~~~~
Piemērs:
~~~js
for( let sk = 0; sk< 10; sk++ ){

    console.log(sk); // Konsolē tiks izvadīts skaitlis intervālā no 0 līdz 9

}
~~~

JavaScript valodā pastāv vēl divi īpaši `for` cikla veidi, tie ir `for in` un `for of`.

Lai labāk saprastu, kā tie strādā, apskatīsim piemēru...

~~~js
let draugi = ["Emīls", "Juris", "Reinis", "Dace"];
for (indekss in draugi) {
    console.log(draugi[indekss]);
}
~~~

Piemērā nodefinēts masīvs, kurā, izmantojot `for in` ciklu ar skaitītāju `indekss`, caurskata visas vērtības un izdrukā tās konsolē.

Izdarīsim to pašu ar `for of` ciklu...

~~~js
let draugi = ["Emīls", "Juris", "Reinis", "Dace"];
for (draugs of draugi) {
    console.log(draugs);
}
~~~

Šeit cikla skaitītājs satur nevis indeksu, bet jau pašu masīva elementu. 

Šo paņēmienu ērti pielietot, caurskatot atlasītus HTML elementus, piemēram, tabulas rindas.

~~~js
let rindas = document.getElementById("tabula").rows;
for (row of rows) {
    //...darbība katrai rindai...
}
~~~

