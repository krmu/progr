---
layout: default
title: API
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 8
---
# API - programmsaskarne

API jeb "application programming interface" un latviešu valodā programmsaskarne ir veids kā izmantot ārējos datu avotus, lai uzlabotu savu programmu.
Tādā veidā iespējams iegūt datus no ārejiem resursiem neizmantojot tiešo datubāzes pieslēgumu.

Apskatīsim attēlu.

![html1](/media/api.jpg)
Attēls: lvivity.com

Attēlā ir vizuāli parādīts, ka notiek pieprasījums no klienta puses (pārlūka, datora, telefona utt.) uz serveri. Serveris apstrādā pieprasījumu un atgriež atpakaļ datus.

Tas kādā formātā tiek atgriezti dati, to nosaka pats programmētājs. Biežākie formāti ir `JSON` un `XML`.

Lai definētu un izmantotu API izsaukumus Python progr. valodā, var izmantot ārējo bibliotēku `requests`.

Paraugs vienkāršam izsaukumam.

~~~python

import requests # Ievietojam ārējo bibliotēku - requests

r = requests.get(url=SAITE UZ API GALAPUNKTU) # Veidojam pieprasījumu, url ir mainīgais, kurā ievietojam saiti uz ārējo resursu.
t = r.json() # Pārveidojam saņemtos datus uz JSON objektu.

print(t) # Izdrukājam saņemto objektu.

~~~
