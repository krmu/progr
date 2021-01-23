---
layout: default
title: Cikli
description: ~
grand_parent: Programmēšana
parent: C++
nav_order: 5
---
# Cikli

C++ progr. valodā eksistē divu veidu cikli - noteiktie(`for`) un nenoteiktie(`while`).

Nenoteiktais cikls.
~~~c++
int i = 0;
while (i < 5) {
  cout << i << "\n";
  i++;
}
~~~
Cikls darbosies kamēr mainīgais `i` nebūs sasniedzi vērtību 5.

Noteiktā cikla piemērs.

~~~c++
for (int i = 0; i < 5; i++) {
  cout << i << "\n";
}
~~~
Ciklam ir īsāks pieraksts un doti iekavās mainīgie: `(cikla sākums, cikla darbības ilgums, cikla solis)`. Cikla solis šajā piemērām ir 1.