---
layout: default
title: Veidojam repozitoriju
description: ~
grand_parent: Versiju vadība
parent: Versiju vadība
nav_order: 3
---
## Iepazīstam komandrindu

Lai izveidotu repozitoriju (dažreiz to dēvē par **repo**), to inicializē jau esošā mapē, tāpēc uz darbvirsmas izveidosim jaunu mapi ar nosaukumu `mans_projekts`.

Kad mape ir izveidota, komandrindā ir jānokļūst uz šo mapi.

Apskatīsim dažas komandas, kas ļauj veikt pamata darbības komandrindā.

~~~git
cd <mapes nosaukums>
~~~
ļauj atvērt mapi

~~~git
cd ..
~~~
atgriežas līmeni atpakaļ iepriekšējā mapē (back)

~~~git
mkdir <mapes nosaukums>
~~~
veido jaunu mapi ar doto nosaukumu

~~~git
dir
~~~
ļauj apskatīt mapes saturu

Ar šo pietiks, lai mēs varētu sākt izmantot Git.

Atverot komandrindu, parasti mēs nonākam lietotāja mapē `C:\Users\<tavs lietotājvārds>`

Ja vēlamies nokļūt darbvirsmā, izpildām komandu `cd desktop`

Un atvērsim jauno projekta mapi ar komandu `cd mans_projekts`. Ja mapi esi nosaucis citādi, tad norādi izvēlēto nosaukumu.

## Veidojam repozitoriju

Ja komandrindā redzam ceļu `C:\Users\<tavs lietotājvārds>\Desktop\mans_projekts`, tad varam izveidot jeb inicializēt repozitoriju šajā mapē.

Tam lietojam doto komandu:
~~~git
git init
~~~

Saņemsim paziņojumu, ka repozitorijs ir veiksmīgi izveidots.

Nākamais solis ir pievienot failus repozitorijā, ko apskatīsim nākamajā sadaļā.
