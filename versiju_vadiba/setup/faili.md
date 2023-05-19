---
layout: default
title: Pievienojam failus
description: ~
grand_parent: Versiju vadība
parent: Versiju vadība
nav_order: 4
---
## Failu pievienošana

Kad esam izveidojuši repozitoriju, varam izveidot mapē dažus failus.

Tie būs `index.html`, `style.css` un `script.js`.

Failus var izveidot grafiskajā vidē, ar labo klikšķi izpildot **New -> Text Document** un norādot attiecīgo nosaukumu ar paplašinājumu.

Kad faili ir izveidoti, izpildām komandu

~~~git
git status
~~~

, kas ļauj jebkurā brīdī apskatīties repozitorija stāvokli un statusu visiem failiem, kas atrodami tajā

Visi 3 pievienotie faili Git sistēmai ir sveši, tie uzrādās sarkanā krāsā kā nepazīstami jeb *untracked files*

![neizsekotie_faili](/media/git/untracked_files.png)

Lai repozitorijs varētu sekot līdzi izmaiņām šajos failos, tos jāpievieno kā izsekojamos failus ar komandu

~~~git
git add .
~~~

Ja nepieciešams, var izpildīt komandu arī atsevišķiem failiem, bet to izmanto retāk

~~~git
git add <faila_nosaukums>
~~~

Tagad atkārtoti izpildot komandu `git status`, redzēsim, ka faili attēloti zaļā krāsā un Git ir sācis sekot izmaiņām failos

![paziistami_faili](/media/git/to_commit.png)

Redzam arī paziņojumu *No commits yet*, kas nozīmē, ka neesam fiksējuši vēl nevienu versiju savā projektā, bet par to nākamajā sadaļā...

