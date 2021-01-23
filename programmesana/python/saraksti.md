---
layout: default
title: Saraksti/vārdnīcas
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 6
---

# Saraksti / vārdnīcas

Šajā gadījumā tiek ierakstīts failā teksts - pievienojot faila beigās. 

Python programmēšanas valodā ir iespēja definēt sarakstus un vārdnīcas.

Saraksta definēšana:

`Mainīgais = ['pirmā teksta vērtība', 'otrā teksta vērtība',skaitlis1, utt. ]

Vārdnīcas mainīgais = {'atslega':'vertiba','atslega2':'vertiba2'}`

Kur atslēga ir unikāla visā vārdnīcā.
{: .alert .alert-warning}

Sarakstu un vārdnīcu garumus nosaka ar šādām komandām:

`print(len(Vārdnīcas mainīgais))`

Piemēram:
~~~python
prieksmeti = ['Latviešu valoda', 'Krievu valoda', 'Informātika']

atzimes = [10,9,5,4,5,3]

prieksmetusaisinajumi = {'lv':'Latviešu valoda', 'inf':'Informātika'}
~~~
Lai iegūtu konrētu vērtību no saraksta:

Python saraksta vērtības sāk skaitīt no 0
~~~python
atzimes = [10,9,5,4,5,3]
print(atzimes[1])
~~~
Konsolē tiek izdrukāts: 9, jo sākot skaitīt no 0 iegūstam, ka 9 ir pirmais elements.

~~~python
prieksmetusaisinajumi = {'lv':'Latviešu valoda', 'inf':'Informātika'}
print(prieksmetusaisinajumi['lv'])
~~~

Konsolē tiek izdrukāts: Latviešu valoda , jo vārdnīcas atslēga `lv` satur vērtību Latviešu valoda.

Vārdnīcas nolasīšana ciklā.

~~~python
prieksmetusaisinajumi = {'lv':'Latviešu valoda', 'inf':'Informātika'}
for x in prieksmetusaisinajumi:
    print(x)
~~~

X šajā gadījumā nodos konsolē vārdnīcas atslēgas.
