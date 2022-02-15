---
layout: default
title: Cikli
description: ~
grand_parent: Programmēšana
parent: C++
nav_order: 5
---
# Cikli

C++ progr. valodā eksistē divu veidu cikli - noteiktie `for` un nenoteiktie `while`.

Nenoteiktais cikls.
~~~c++
int i = 0;
while (i < 5) { //cikla deklarācija
  cout << i << "\n"; //izvads
  i++; //palielinātājs
}
~~~
Cikls darbosies kamēr mainīgais `i` nebūs sasniedzis vērtību 5.

Noteiktā cikla piemērs.

~~~c++
for (int i = 0; i < 5; i++) {
  cout << i << "\n";
}
~~~
Ciklam ir īsāks pieraksts un doti iekavās mainīgie: `(cikla sākums, cikla darbības ilgums, cikla solis)`. Cikla solis šajā piemērā ir 1.

Cikliem pielieto operatorus `break` un `continue`.

### Break

`break` pārtrauc ciklu pie konkrēta nosacījuma.

~~~cpp
while (i < 5) {
  cout << i << "\n";
  i++;
  if (i == 3) { break; }
}
~~~

Šajā gadījumā cikls apstāsies, mainīgajam i sasniedzot vērtību 3.

### Continue

~~~cpp
int i = 0;
while (i < 5) {
  i++;
  if (i == 3) { continue; }
  cout << i << "\n";
}
~~~

Izpildoties `continue`, cikls pāriet nākamajā iterācijā. Tas nozīmē, ka skaitlis 3 neizdrukāsies ekrānā.

Šajā gadījumā sazarojums nedrīkst būt pirms palielinātāja i++, jo tādā gadījumā būtu bezgalīgs cikls!
{: .alert .alert-warning}