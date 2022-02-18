---
layout: default
title: Bibliotēkas
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 8
---
# Bibliotēkas

Python valodā pastāv divu veidu bibliotēkas:
* iebūvētās, kuras var brīvi piesaistīt projektam
* ārējās, kuras nepieciešams instalēt ar PIP

PIP ir Python bibliotēku pārvaldnieks
{: .alert .alert-warning}

### Ārējās bibliotēkas instalēšana

Python programmēšanas valoda atļauj izmantot ārējās bibliotēkas. Lai instalētu bibliotēku:

~~~python

pip install [bibliotēka]

~~~
Piemēram instalēsim Easy UI bibliotēku

~~~python

pip install easyui

~~~

---

### Bibliotēkas piesaistīšana programmas projektam

Lai izmantotu funkcijas no konkrētās bibliotēkas, vienmēr nepieciešams piesaistīt to programmas projektam. To dara šādi:

~~~python
import random #piesaista b-tēku random

skaitlis = random.randrange(0, 10) #pielieto f-ju randrange no b-tēkas random
~~~

Lai kods būtu pārskatāms, vēlams pēc bibliotēku piesaistes atstāt tukšu rindu!
{: .alert .alert-warning}

Lai bibliotēku kodā varētu ērtāk pierakstīt, tai var nodefinēt "iesauku" ar atslēgvārdu `as`

~~~python
import random as rnd
~~~

Piesaistot konkrētu funkciju no bibliotēkas, raksta `from [bibliotēka] import [funkcija]` un bibliotēku turpmāk nenorāda

~~~python
from random import randrange

skaitlis = randrange(0, 10)
~~~

Šādi programmas projekts būs kompaktāks un aizņems mazāk vietas!
{: .alert .alert-warning}

------------------------------------------------

### Dažas populārākās bibliotēkas

* random - nejaušības elementi
* datetime - datums un laiks
* time - koda aizture sleep()
* matplotlib *(instalējama)* - matemātiskie grafiki
* math - kvadrātsakne sqrt() un PI konstante
* requests *(instalējama)* - API izsaukumi
* sqlite3 - darbam ar datu bāzēm