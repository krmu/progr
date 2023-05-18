---
layout: default
title: Iestatīšana
description: ~
grand_parent: Versiju vadība
parent: Versiju vadība
nav_order: 2
---
## Iestatīšana

Turpmākajos piemēros izmantosim versiju vadības sistēmu Git. Lai sāktu to izmantot, nepieciešams lejupielādēt un uzstādīt savā datorā.

Instalācijas failu vari lejupielādēt [šeit](https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-64-bit.exe)!

Instalācijas vednī nekādas izmaiņas nav jāveic. Sekojam instrukcijām, līdz instalācija ir veiksmīgi pabeigta.

Pirms sākam izmantot Git saviem projektiem, vēlams iestatīt lietotāju. Tam izmantosim speciālas komandas, ko ierakstīsim komandrindā. Komandrindu atveram ar `Win + R`, Run logā ierakstot **cmd**. 

Iestatīsim lietotājvārdu un e-pastu. Tas tiks norādīts, fiksējot versijas savā projektā.

Izpildam komandu, kurā norādam savu izvēlēto lietotājvārdu

~~~git
git config --global user.name "Brašais koderis"
~~~

**--global** parametrs norāda, ka lietotājvārds tiks lietots visiem repozitorijiem, ko veidosim

Tādā pašā veidā iestatīsim arī e-pastu

~~~git
git config --global user.email "brasais_koderis@pasts.lv"
~~~

Ja nepieciešams apskatīties esošo konfigurāciju, to var izdarīt šādi:

~~~git
git config --global user.email "brasais_koderis@pasts.lv"
~~~



