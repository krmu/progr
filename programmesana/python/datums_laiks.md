---
layout: default
title: Datums un laiks
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 10
---

# Datums un laiks

Lai kodā varētu pielietot datumu un laiku, piesaista bibliotēku `datetime`

~~~python
import datetime
~~~

Apskatīsim, kā varam izdrukāt pašreizējo datumu un laiku...

~~~python
datumsUnLaiks = datetime.datetime.now()
print(datumsUnLaiks)
~~~

Ja nepieciešams tikai datums, lietojam funkciju `today()` no klases `date`

~~~python
datums = datetime.date.today()
print(datums)
~~~

Laiku iegūstam šādi...

~~~python
laiks = datetime.datetime.now().time()
print(laiks)
~~~

No iegūtā laika varam atdalīt stundas, minūtes, sekundes un pat mikrosekundes

~~~python
laiks = datetime.datetime.now().time()
stundas = laiks.hour
minutes = laiks.minute
sekundes = laiks.second
mikrosekundes = laiks.microsecond
~~~

Atceries, ka datums un laiks nav ne skaitlis, ne teksts! Tas ir īpašs datetime objekts!
{: .alert .alert-danger}

Lai laiku un datumu pārveidotu uz tekstu, pielieto `strftime()` funkciju, norādot attēlojamo formātu!

~~~python
laiks = datetime.datetime.now()

laiks_ka_teksts = laiks.strftime("%H:%M:%S")
print(laiks_ka_teksts_)

#izvads => 20:37:04
~~~

### Formātkodu atšifrējumi

|Formātkods |Atšifrējums      |
|-----------|-----------------|
|%H         |Stundas          |
|%M         |Minūtes          |
|%S         |Sekundes         |
|%f         |Mikrosekundes    |
|%Y         |Pilnais gads     |
|%y         |Saīsinātais gads |
|%m         |Mēnesis          |
|%d         |Diena            |