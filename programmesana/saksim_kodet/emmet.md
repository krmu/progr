---
title: Emmet komandas
description: ~
layout: default
grand_parent: Programmēšana
parent: Sāksim kodēt!
nav_order: 3
---

### Sāisinātais HTML pieraksts

Jau apguvi, ka ir svarīgi strikti ievērot HTML sintaksi, bet to pierakstīt nav viegli...

Tāpēc VS Code ir iebūvēts rīks, kas ģenerē HTML kodu no īsām komandām.

Piemēram, komanda `html>head>title+link:css^body>script:src` noģenerēs pamata HTML struktūru:

~~~html
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src=""></script>
</body>
</html>
~~~

To pašu var izdarīt, tukšā HTML dokumentā ievadot `!` un nospiežot `Enter`!

Simbolu atšifrējums:

|Simbols|Atšifrējums|
|---|---|
|>|pāriet zemākā līmenī|
|+|pievieno blakus elementu esošajā līmenī|
|^|pāriet augstākā līmenī|
|#|pievieno id|
|.|pievieno klasi|
|$|veido numerāciju|

`p.sarkana` izveidos rindkopu ar klasi **sarkana**   
`img#logo` izveidos attēlu ar id **logo**

Apskatīsim, kā noģenerēt tabulu...

`table>(tr>td*3)*3`

Iegūstam tabulu ar 3 rindām un 3 šūnām katrā rindā.

~~~html
<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
~~~

Ērti veidot sarakstu, piešķirot `id` katrai rindai.

`ul>li#rinda$*5`

~~~html
<ul>
    <li id="rinda1"></li>
    <li id="rinda2"></li>
    <li id="rinda3"></li>
    <li id="rinda4"></li>
    <li id="rinda5"></li>
</ul>
~~~


