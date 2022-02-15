---
layout: default
title: Cikli
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 5
---

# Ciklu veidošana

## Nenoteiktie while cikli

Python progr. valodā eksistē divu veidu cikli - noteiktie(`for`) un nenoteiktie(`while`).

Piemērs nenoteiktajam.

~~~python
i = 1
while i < 6:
  print(i)
  i += 1
~~~

Šajā cikla veidā ir pirms paša cikla ir dots kontroles mainīgais `i`, kurš ļauj sākumā tiek uzstādīts ar vērtību 1. Cikls sākas ar vārdiem `while` un tad ir cikla darbības ilgums jeb šajā gadījumā cikls darbojas kamēr mainīgais
`i` ir mazāks nekā 6. 

`i += 1` šī rinda ir svarīgākā šajā ciklā, jo tiek pateikts, ka cikla vērtība `i` tiek palielināta par vienu vienību. 

## Noteiktie for cikli

Piemērs noteiktajam.

~~~python
for x in range(6):
  print(x)
~~~

Tiek iestatīts cikla mainīgais `x`, kurš sevī satur cikla skaitītāju. `in range(6)` - cikla ilgums. Programmai tiek teikts, ka darbojas līdz sasniedz vērtību 6.


Cikla gala vērtība būs par vienu mazāka nekā tiek norādīts. Ja cikla gala vērtība tiek norādīta kā  range(6), tad pēdējā cikla vienība būs 5.
{: .alert .alert-warning}


`range(1, 10, 2)` - komanda mums ļauj arī nodefinēt cikla soli un sākuma vērtību. Pirmā vērtība `1` pasaka, ka cikls sākas ar vērtību 1, tad `10` norāda uz cikla beigām un `2` ir cikla solis, cikls iet uz priekšu pa 2 vienībām.
~~~tip
range(sākums,beigas,solis)
~~~
Minimums šai komandai ir beigu viena vērtība, kura parādīs, kad ir cikla beigas.

Pielietojot negatīvu soli ciklu iespējams darbināt arī atpakaļgaitā.

~~~python
for x in range(10, 0, -1):
  print(x)
~~~

Šajā gadījumā izdrukāsies skaitļi:

~~~tip
10 9 8 7 6 5 4 3 2 1
~~~

## Ciklu veidošana - saraksti

Ir iespējams arī iegūt saraksta vērtības izmantojot noteikto ciklu.

~~~python
stundas = ["Pirmā stunda", "Otrā stunda", "Trešā stunda"]
for x in stundas:
  print(x)
~~~

Šajā gadījumā mainīgais `x` saturēs tā brīža saraksta vērtību. Piemēram, pirmo reizi tas saturēs vārdus `Pirmā stunda` otrajā `Otrā stunda` un trešājā `Trešā stunda`.

Nedaudz grūtāk ir ar vārdnīcām.

~~~python
vardnica = {'x': 1, 'y': 2, 'z': 3} 
for atslega, vertiba in vardnica.items():
    print(atslega, ' tās vērtība ', vertiba)
~~~

Pirmajā rindā ir definēta vārdnīca.

Otrā rinda ir noteiktais cikls. `atslega` sevī satur vārdnīcas atslēgu konkrētājā cikla solī,piemēram, `x`,`y`,`z`.`in vardnica.items()` - cikls tiek lasīts caur vardnīcas elementiem.
`print(atslega, ' tās vērtība ', vertiba)` - `atslega` sevī satur vārdnīcas atslēgu un `vertiba` vērtību.

