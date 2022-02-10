---
layout: default
title: Datu ievads un izvads
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 1
---

## Datu izvads

Lai konsolē izdrukātu kādu tekstu vai mainīgo rezultātu izmanto komandu `print`, bet komentāriem lieto `#` vai `"""`.

~~~python

print("Teksta izdruka lapā")

# Komentārs

"""
komentārs
vairākās
rindās
"""

~~~

## Datu ievads

Lai ievadītu datus, lieto `input()`

~~~python

tavsVards = input("Ievadi vārdu!")

~~~

Ja ievadāmie dati ir skaitlis, tad norāda datu tipu!
{: .alert .alert-warning}

~~~python

cena = float(input("Ievadi cenu!"))

~~~
