---
layout: default
title: Vārdnīcas
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 8
---

# Vārdnīcas

`manaVardnica = {'atslega':'vertiba','atslega2':'vertiba2'}`

Vārdnīca ir atslēgu un vērtību pāri, kur atslēga ir unikāla visā vārdnīcā.
{: .alert .alert-warning}

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

Konsolē izdrukāsies vārdnīcas atslēgas.

Lai izdrukātos vērtības, jāraksta `print(prieksmetusaisinajumi[x])`

Lai labāk saprastu, kā strādā vārdnīcas, apskati [burtu skaitīšanas algoritmu.](piemeri.md#aboli)