---
title: Mājas lapu programmēšana
description: Kā sagatavot darba vidi un izveidot pirmo projektu.
layout: default
grand_parent: Programmēšana
parent: Sāksim kodēt!
nav_order: 1
---

### Mājas lapu programmēšana

Ja tev vēl datorā nav uzstādīts VS Code, [dodies šeit](./vscode.md) un uzzini, kā to izdarīt!

Ja esi gatavs, varam sākt!

Izveidosim pirmo mājas lapas projektu!

Tev jāizveido sev ērtā vietā tukša mape, ko nosauksim par `manaPirmaLapa`.

Atver VS Code, izvēlies opciju `Open Folder` un atver savu izveidoto mapi!

Šajā mapē izveidosim trīs failus!
* index.html
* style.css
* script.js

Pagaidām iegaumē un centies lietot šādus nosaukumus!
{: .alert .alert-warning}

Vajadzētu izskatīties šādi!  
![web-files](/media/web-files.jpg)

HTML failā veidosim lapas struktūru, CSS failā tās stilistisku, bet ar JavaScript piešķirsim tai dinamiku un liksim kustēties!

Atver `index.html` failu un izveido tur HTML pamata struktūru!

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Mana lappuse</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <script src="script.js"></script>
    </body>
</html>
~~~

Svarīgi ir piesaistīt CSS un JS failus ar `<link>` un `<script>` tagiem, citādi nedarbosies stilistika un JS kods!
{: .alert .alert-warning}

Ievietosim lapā virsrakstu!

~~~html
<body>
    <h1 id="sveiciens">Sveika, pasaule!</h1>
</body>
~~~

... un `style.css` failā iestatīsim tam kādu košu krāsu ...

~~~css
#sveiciens {
    color: red;
}
~~~

Vairāk par css uzzināsi [šeit](../css/index.md)!
{: .alert .alert-warning}

![sveika-pasaule](/media/sveika_pasaule.jpg)

Ievietosim lapā pogu, kas pasvītros tekstu!

~~~html
<body>
    <h1 id="sveiciens">Sveika, pasaule!</h1>
    <button onclick="pasvitroTekstu()">Pasvītrot!</button>
</body>
~~~

... un `script.js` failā pievienosim funkciju!

~~~js
function pasvitroTekstu() {
    document.getElementById("sveiciens").style.textDecoration = "underline";
}
~~~

Izmēģini pievienoto pogu!

Lai uzzinātu vairāk par JavaScript, [dodies šeit](../js/index.md)!
{: .alert .alert-warning}