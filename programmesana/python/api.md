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

## Kā tas strādā?

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

## GET pieprasījumi

Atverot kādu tīmekļa vietni, piemēram, https://www.google.com/, serveris saņem GET pieprasījumu un atbild ar vajadzīgajiem failiem, lai ekrānā attēlotos pieprasītā vietne. Šajā gadījumā GET var dēvēt par tūkšu pieprasījumu, jo tas no klienta puses neietver nekādus datus.

## URL parametri
Veicot GET pieprasījumu uz resursu, adresei var pievienot vienu vai vairākus parametrus.

`https://www.lienestortes.lv/tortes?veids=sokolades`

Adresē, kas redzama piemērā, ir parametrs ar nosaukumu `veids` un tā vērtība `sokolades`

Vietu, kur sākas parametri, apzīmē ar `?`

Ja izmanto vairākus parametrus, tos savieno ar `&` simbolu

`https://www.lienestortes.lv/tortes?veids=sokolades&garsa=citronu`

Nekādā gadījumā nedrīkst adresē ietvert personas datus un paroles!
{: .alert .alert-warning} 

## POST pieprasījumi

Ja nepieciešams nosūtīt serverim kādus datus, izmanto POST pieprasījumu. Piemērs varētu būt autorizācijas forma e-klase.lv portālā. Tajā ievada personas kodu un paroli, ko saņem serveris, lai pārbaudītu, vai lietotājs eksistē.

~~~html
<form action="/autorizacija" method="POST">
    <input type="text" name="lietotajvards">
    <input type="password" name="parole">
    <input type="submit" value="Ieiet">
</form>
~~~

`action` atribūtā norāda tā saukto galapunktu, lai serveris saprot, kas jādara.

Serveris atbild ar jaunu lapu, ja dati pareizi vai kļūdas ziņojumu, ja dati kļūdaini.