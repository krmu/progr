---
layout: default
title:  HTML hierarhijas koks
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: HTML
---

# HTML hierarhijas koks

HTML dokumentam piemīt hierarhiska struktūra, ko veido saiknes starp elementiem

![DOM_tree](/media/dom_tree.JPG)

Piemērā redzam, ka visaugstāk stāvošais ir `html` bloks, kas satur `head` un `body` blokus. `body` blokā ir ievietots `div` elements, kas satur sarakstu ar 3 vienībām. Šajā gadījumā `ul` elementam augstāk stāvošs *(parent)* ir `div` elements, bet zemāk stāvoši *(child)* ir `li` elementi. `img` elementam ir tikai augstāk stāvošais *(parent)* elements `a`.

Atceries, ka tabulā pirms rindām vienmēr automātiski tiek pievienots `tbody` bloks!
{: .alert .alert-warning}