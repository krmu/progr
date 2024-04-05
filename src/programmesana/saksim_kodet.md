---
title: Sāksim kodēt!
order: 1
---

## Teksta redaktora un interpretatora uzstādīšana

Lai sāktu programmēt, Tev nepieciešams: 
* teksta redaktors, kas ļauj rakstīt kodu;
* kompilators vai interpretators, kas pārtulko uzrakstīto kodu, lai datora procesors to saprastu.

Izmantosim teksta redaktoru Visual Studio Code un Python interpretatoru!

Visual Studio Code (sauksim to par VS Code) nodrošina ļoti plašu valodu atbalstu un daudz dažādus paplašinājumus *(extensions)* raitākam darbam.

Iesākumā lejupielādē instalācijas pakotnes [Python interpretatoram](https://www.python.org/downloads/) un teksta redaktoram [VS Code](https://code.visualstudio.com).

Atver Python instalācijas pakotni!

Obligāti atzīmē opciju **Add Python 3.x to PATH**, citādi VS Code neredzēs interpretatoru!


![python-installer](/python-installer.jpg)

Spied **Install Now** un uzgaidi, kamēr instalācija būs pabeigta! Aizver instalācijas logu!

Atver VS Code instalācijas pakotni un, sekojot instrukcijām, uzstādi savā datorā!

Ja viss izdevās veiksmīgi, vari atvērt koda redaktoru un ieraudzīsi sākuma ekrānu.

![vscode-window](/vscodewindow.jpg)

Atvērsim **Extensions** sadaļu un uzstādīsim Python atkļūdotāju! Vari izmantot meklētāju!

![extension](/extension.jpg)

Izveidosim datorā mapi jaunajam programmas projektam, nosauksim to *HelloWorld*.

![helloworld](/helloworld.jpg)

Teksta redaktorā atvērsim izveidoto mapi, izmantojot taustiņu kombināciju `Ctrl + K + O` vai opciju **Open Folder**!

Mapē izveidosim jaunu failu ar nosaukumu **helloworld.py**!

Svarīgi norādīt faila paplašinājumu! Python failiem tas ir .py, taču citām valodām tas varētu būt, piemēram, .cpp vai .js.


![create-file](/create-file.jpg)

Pievienosim koda rindiņu!

![first-line](/firstline.jpg)

Un iedarbināsim programmu, izmantojot taustiņu `F5`! No izlecošā saraksta izvēlamies Python File!

Ja viss izdevās, terminālī ieraudzīsi tekstu **Hello World!**

![terminal](/terminal.jpg)

Tagad vari doties savā programmēšanas piedzīvojumā!

VS Code ērti lietot arī veidojot mājas lapas! Tev tikai tukšā mapē jāizveido `index.html`, `style.css` un `script.js` faili!

## Emmet komdandas

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

## Mājas lapu programmēšana

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


Vajadzētu izskatīties šādi!  
![web-files](/web-files.jpg)

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


![sveika-pasaule](/sveika_pasaule.jpg)

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


