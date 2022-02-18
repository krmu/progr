---
layout: default
title: Darbības ar tekstu
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 2
---

## Teksta garums

Lai noteiktu teksta virknes garumu, lieto `len([mainīgais])`.

~~~python
teksts = "Laterna"
print(len(teksts))
~~~

Izdrukā saņemsim `7`, jo vārdā ir 7 burti

## Teksta apvienošana

Pieņemsim, ka mums ir dots vārds, uzvārds un klase. Apvienosim tos kopā...

~~~python
vards = "Alise"
uzvards = "Muciņa"
klase = "9c"
skolniece = vards+uzvards+klase
~~~

Izvadā ieraudzīsim **AliseMuciņa9c**

Lai pievienotu atstarpes starp mainīgajiem, rīkojas šādi:  
`skolniece = vards+" "+uzvards+" "+klase`

## Simbolu atdalīšana

Teksta mainīgajiem var pielietot parametru `[sākums:beigas]`, lai atdalītu noteiktu skaitu simbolu.

Simbolus tekstā sāk skaitīt no 0!
{: .alert .alert-warning} 

Intervāla beigas neieskaita!
{: .alert .alert-warning} 

Apskatīsim piemēru ar telefona numuru...

~~~python
telefons = "+37128506233"
valstsKods = telefons[0:4]
print(valstsKods)
~~~

Šo īpašību varam pielietot, lai cikliski izvadītu katru simbolu jaunā rindā.

~~~python
teksts = "Alisei garšo konfektes."
for simbols in teksts:
    print(simbols)
~~~

Arī atstarpe ir simbols!
{: .alert .alert-warning} 

## Lielie un mazie burti

`isupper()` lieto, lai pārbaudītu, vai teksts satur tikai lielos burtus.

`islower()` lieto, lai pārbaudītu, vai teksts satur tikai mazos burtus.

~~~python
teksts = "Kārlis lasa grāmatu."
print(teksts.islower())
~~~

Tā kā teksts satur lielo sākuma burtu, tad izdrukā būs redzams `False`.

`isdigit()` lieto, lai pārbaudītu, vai rakstzīme ir cipars.

## Sarakstu pielietošana

Ar atsevišķiem burtiem vieglāk darboties, ja tekstu pārnes sarakstā...

~~~python
teksts = "Sprīdītis"
teksts_s = []
for simbols in teksts:
    teksts_s.append(simbols)
print(teksts_s)
~~~

Rezultāts: ['S', 'p', 'r', 'ī', 'd', 'ī', 't', 'i', 's']

Par sarakstiem vairāk izlasīsi [šeit](./saraksti.md)!



