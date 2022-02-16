---
layout: default
title: Saraksti
grand_parent: Programmēšana
parent: HTML
nav_order: 7
---

## Saraksti ar numerāciju

Numurētu sarakstu veido ar birku `<ol>`, kas nozīmē *ordered list*. Katru saraksta vienību jeb rindu veido ar birku `<li>`.

~~~html
<ol>
    <li>Pirmdiena</li>
    <li>Otrdiena</li>
    <li>Trešdiena</li>
    <li>Ceturtdiena</li>
    <li>Piektdiena</li>
    <li>Sestdiena</li>
    <li>Svētdiena</li>
</ol>
~~~

Iznākums:  
![numurets-saraksts](/media/numurets-saraksts.jpg)

Iestatot sarakstam atribūtu `type="I"`, iegūstam romiešu ciparus, bet atribūts `type="A"` veidos alfabētisku numerāciju.

~~~html
<h3>Kurš ir gada pirmais mēnesis?</h3>
<ol type="A">
    <li>Septembris</li>
    <li>Augusts</li>
    <li>Janvāris</li>
</ol>
~~~

Rezultāts:  
![saraksts](/media/saraksts.jpg)

## Saraksti bez numerācijas

Nenumurētu sarakstu veido ar birku `<ul>`, bet saraksta vienības tāpat ar `<li>`.

~~~html
<h3>Ēdienkarte:</h3>
<ul>
    <li>Aukstā zupa</li>
    <li>Karbondāde</li>
    <li>Biezpienmaize</li>
    <li>Kefīrs</li>
</ul>
~~~

Rezultāts:  
![edienkarte](/media/edienkarte.jpg)

Sarakstus iespējams veidot vairākos līmeņos, `<li>` vietā liekot `<ol>` vai `<ul>`.
{: .alert .alert-warning}