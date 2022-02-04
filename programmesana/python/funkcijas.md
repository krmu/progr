---
layout: default
title: Funkcijas
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 10
---

## Funkciju definēšana

Funkcija ir neatkarīgs koda bloks, kas veico konkrētu uzdevumu.

Python programmēšanas valodā funkcijas definē ar vārdu def.

~~~python
def FUNKCIJAS_NOSAUKUMS():
    print("Funkcijas darbība")
~~~

Piemērs.
~~~python
def hello():
    print("Sveika pasaule")
hello()
~~~

## Funkciju parametri

Parasti funkcija saņem datus, tos apstrādā un atdod atpakaļ rezultātu.

**dati >> funkcija >> rezultāts**

~~~python
def paraVaiNepara(skaitlis): #F-jas definīcija
    if skaitlis%2 == 0:
        paraSk = True
    else:
        paraSk = False
    return paraSk

print(paraVaiNepara(5)) #F-jas izsaukums
~~~

Dotajā piemērā ir funkcija, kas jebkādam padotam skaitlim nosaka, vai tas ir pāra skaitlis un atgriež `True` vai `False`. Tā kā padotais skaitlis ir 5, tad rezultāts ir `False`.

Lai labāk saprastu, kā darbojas funkcijas, apskati [ābolu lasīšanas algoritmu.](piemeri.md#aboli)