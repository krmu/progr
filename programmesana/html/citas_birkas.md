---
layout: default
title: Citas noderīgas birkas
grand_parent: Programmēšana
parent: HTML
nav_order: 11
---

## Rindas pārtraukums

Lai pārnestu elementu jaunā rindā, lieto birku `<br>`.

~~~html
<a href="https://www.inbox.lv/">Inbox</a><br>
<a href="https://www.delfi.lv/">Delfi</a>
~~~

Noklusēti hipersaites attēlojas vienā rindā, tāpēc pārnesot jaunā rindā, jālieto `<br>`!

## Div bloki

Birku `<div>` lieto lapas izkārtojumam. Tas ir bloks, kurā ievieto citus elementus, piemēram, rindkopas vai attēlus.

~~~html
<div id="kvadrats">
    <p>Es esmu kvadrāts!</p>
</div>

<div id="aplis">
    <p>Es esmu aplis!</p>
</div>
~~~

Noklusēti div bloki nav redzami, tāpēc pievienosim tiem stilu!

~~~html
<head>
    <style>
        div {
            width: 100px;
            height: 100px;
        }

        #kvadrats {
            background-color: lightgreen;
        }

        #aplis {
            background-color: orange;
            border-radius: 50%;
            line-height: 100px;
        }
    </style>
</head>
~~~

Iznākums:  
![div-bloki](/media/div-bloki.jpg)

Ar `border-radius: 50%;` iegūstam apaļu formu, bet `line-height: 100px;` novieto tekstu apļa centrā!
{: .alert .alert-warning}

Par CSS vairāk izlasīsi sadaļā [stila piešķiršana](./stilapieskirsana.md)!

## Atveramais saraksts

Ar birkām `<details>` un `<summary>` var panākt interesantu atveramo izvēlni.

~~~html
<details>
    <summary>Mana grāmatu izlase:</summary>
    <ul>
        <li>Zvejnieka dēls</li>
        <li>Straumēni</li>
        <li>Purva bridējs</li>
    </ul>
</details>
~~~

Rezultāts:  
![details-birka](/media/details.gif)

Nospiežot uz bultiņas, saraksts atveras. Nospiežot vēlreiz, aizveras.

Lai saraksts noklusēti attēlotos atvērts, `details` birkai pieraksta atribūtu `open`!
{: .alert .alert-warning}

## Izcelts teksts

Lai izceltu rindkopas fragmentu, lieto birku `<mark>`.

~~~html

<p>Šis nav svarīgs rindkopas teksts, bet <mark>šis ir ļoti svarīgs teksts.</mark></p>

~~~

Iznākums:  
<p>Šis nav svarīgs rindkopas teksts, bet <mark>šis ir ļoti svarīgs teksts.</mark></p>

Teksts starp `<mark>` birkām attēlosies dzeltens. Iestatot stila atribūtu `background-color: [krāsa];` var iestatīt jebkādu citu iekrāsojumu!





