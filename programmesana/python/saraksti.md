---
layout: default
title: Saraksti
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 7
---

# Saraksti

### Saraksta definēšana

Saraksts savā būtībā ir kā mainīgais, kas satur vairākas vērtības jeb elementus.

Vērtības, ko sevī glabā saraksts, ir strikti numurētas un šis kārtas numurs ir **indekss**.

`mansSaraksts = ['pirmā teksta vērtība', 'otrā teksta vērtība', skaitlis1, utt. ]`

Sarakstu garumus nosaka sekojoši:

`print(len(mansSaraksts))`

Piemēram:
~~~python
prieksmeti = ['Latviešu valoda', 'Krievu valoda', 'Informātika']

atzimes = [10, 9, 5, 4, 5, 3]

maniCipari = [6, 3, "viens", 7, 0]
~~~

Vienā sarakstā var būt arī vairāku tipu vērtības.
{: .alert .alert-warning}

Ja sarakstu mēģina izdrukāt ar `print(saraksts)`, tas izdrukājas savā dabiskajā formā.

### Darbības ar elementiem

Lai iegūtu konrētu vērtību no saraksta, ir jāzina tās indekss. Piemērā redzam, kā veidojas indeksi sarakstā.

![python-list](/media/python-list.png)
Avots: programiz.com

Varam novērot, ka piekļūstot elementiem var lietot arī negatīvus indeksus. Skaitot no kreisās puses uz labo, indeksi ir pozitīvi, bet skaitot no labās puses uz kreiso indeksi ir negatīvi. Īpaši ērti tas ir gadījumos, ja jāpiekļūst elementam, kas atrodas tuvu saraksta beigām.

~~~python
atzimes = [10, 9, 5, 4, 5, 3]
print(atzimes[1])
~~~
Konsolē tiek izdrukāts: 9, jo sākot skaitīt no 0 iegūstam, ka 9 ir pirmais elements.

Elementiem var piekļūt arī izmantojot intervālus.

~~~python
atzimes = [10, 9, 5, 4, 5, 3]
print(atzimes[1:3])
~~~

Šajā piemērā izdrukā elementus ar indeksiem 1 un 2, jo intervāla beigas neieskaita.

Funkcijas darbam ar sarakstiem:

|Funkcija|Nozīme|  
|---|---|              
|pop(indekss)|dzēš elementu, skaitlis iekavās norāda elementa indeksu; ja indeksu nenorāda, tad dzēš pēdējo elementu|
|append(vērtība)|saraksta beigās pievieno jaunu elementu|
|insert(indekss, vērtība)|ievieto jaunu elementu izvēlētajā pozīcijā|
|sort()|kārto elementus pieaugošā secībā|
|reverse()|apgriež sarakstu pretēji|
|index(vērtība)|meklē pirmo elementu, kurš satur norādīto vērtību|

~~~python
krasas = ['zaļa', 'zila', 'balta', 'sarkana']
krasas.pop(0)

#['zila', 'balta', 'sarkana']

krasas.append('melna')

#['zila', 'balta', 'sarkana', 'melna']

krasas.reverse()

#['melna', 'sarkana', 'balta', 'zila']
~~~

Kārtojot tekstuālas vērtības, saraksta sākumā novietosies vērtības ar lielajiem sākuma burtiem.
{: .alert .alert-warning}

### Vērtību meklēšana <a id="meklesana"></a>

Ērti izmantot sazarojumu, lai pārbaudītu, vai vērtība eksistē sarakstā

~~~python
draudzenes = ['Dace', 'Marta', 'Anna', 'Ilze']
if 'Dace' in draudzenes:
    print('Dace ir šeit!')
else:
    print('Daces šeit nav!')
~~~

### Ciklu pielietošana

Lai pārskatītu visus saraksta elementus, lieto ciklu.

~~~python
ogas = ['mellene', 'zemene', 'avene', 'ķirsis']
for oga in ogas:
    print(oga)
~~~




