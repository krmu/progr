---
layout: default
title: Funkcijas
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 6
---

## Funkciju definēšana

Funkcija ir neatkarīgs koda bloks, kas veic konkrētu uzdevumu.

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

## Mainīgo redzamība

Mainīgie, kas deklarēti ārpus funkcijām, ir **globāli** mainīgie, bet tie, kas deklarēti funkcijas iekšienē, ir **lokāli** mainīgie.

~~~python
x = 5 #globāls mainīgais
def izvadaSkaitli():
    x = 10 #lokāls mainīgais
    print(x)

izvadaSkaitli()
print(x)
~~~

Dotajā koda piemērā ir divi dažādi mainīgie `x`. Vispirms izdrukā f-jas mainīgā vērtību `10`, pēc tam globālā mainīgā vērtību `5`.

Globālu mainīgo no funkcijas var nolasīt, bet nevar mainīt tā vērtību.
{: .alert .alert-warning}

Ja vēlamies mainīt mainīgā vērtību no f-jas, tad jālieto atslēgvārds `global`.

~~~python
x = 5 
def izvadaSkaitli():
    global x
    x = 10
    print(x)

izvadaSkaitli()
print(x)
~~~

Šajā gadījumā visā programmā ir viens mainīgais `x`, kam funkcijā tiek mainīta vērtība. Programma izdrukās skaitļus `10` un `10`.