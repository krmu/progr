---
title: HTML un CSS
order: 3
icon: flowbite:html-solid
---
## Kas ir HTML un CSS?

HTML jeb angļu valodā Hyper Text Markup Language ir marķēšanas/iezīmēšanas valoda, kura ļauj klienta pārlūkā atrādīt mājaslapas saturu. 
HTML faili beidzas ar paplašinājumu `.html` vai jaunajā versijā `.htm` un ir izpildāmi pārlūkā.
Daļa jauno pārlūku paši pabeidz birkas, ja to ir aizmirsis izdarīt izstrādātājs, bet uz to nevajadzētu paļauties.

CSS jeb Cascading Style Sheets ir veids kā rakstot dažādus noteikumus piešķirt izskatu HTML elementiem lapā.

::: caution Svarīgi!
HTML un CSS nav programmēšanas valodas, tām nav mainīgo, ciklu, funkciju,loģikas, bet tās ir marķēšanas un stilu valodas.
:::


Lai saprastu procesu, kā mājaslapa veido CSS stilu izmantošanu, apskatīsim attēlu.

![example image](/renderingcss.svg)
Attēls: mozilla.org

No attēla varam saprast, ka vispirms tiek ielādēta mājaslapa, tad ielādēti CSS noteikumi un tad viss kopā tiek pasniegts lietotājam.

## Kā darbojas HTML?

![example image](/request.png)

Avots: monashdatafluency.github.com

Aplūkojot šo attēlu , var secināt, ka viss sākas ar lietotāja pieprasījumu - momentu, kad lietotājs pārlūkā ievada tīmekļa lapas adresi.

Tad notiek pieprasījums uz serveri. Serveris izveido HTML kodu un atgriež skatītāja pārlūkam. 

Pārlūks to saliek kopā un atrāda tieši tā kā to bija izdomājis programmētājs.

Mājaslapas sastāv no birkām vai angliski `tags`. Ar lielāko daļu birku var iepazīties [šeit](https://www.w3schools.com/tags/default.asp)

Birkas ļauj strukturēt mājaslapu no dažādiem elementiem. Lai definētu elementu, lielākajai daļai no HTML birkām ir atverošā birka un aizverošā. 

Piemērs:

~~~html
<p> </p>
~~~

`<p>` ir atverošā birka, kura informē pārlūku, ka sākas paragrāfs.

`</p>` ir aizverošā birka, kura informē pārlūku, ka beidzas paragrāfs.


### Hierarhijas koks

HTML dokumentam piemīt hierarhiska struktūra, ko veido saiknes starp elementiem

![DOM_tree](/dom_tree.jpg)

Piemērā redzam, ka visaugstāk stāvošais ir `html` bloks, kas satur `head` un `body` blokus. `body` blokā ir ievietots `div` elements, kas satur sarakstu ar 3 vienībām. Šajā gadījumā `ul` elementam augstāk stāvošs *(parent)* ir `div` elements, bet zemāk stāvoši *(child)* ir `li` elementi. `img` elementam ir tikai augstāk stāvošais *(parent)* elements `a`.

Atceries, ka tabulā pirms rindām vienmēr automātiski tiek pievienots `tbody` bloks!


### Struktūra un pieraksts

Apskatīsim mājaslapas daļas. 

Mājaslapas birkas un kods, šo pārlūks saņem no servera:
::: tabs
@tab Kods
~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Lapas virsraksts</title>
    </head>
<body>

    <h1>Pirmā līmeņa virsraksts</h1>
    <p>Paragrāfs</p>

</body>
</html>
~~~
@tab Iznākums

![pythonlogo](/htmlsadalas.png)
:::

Mājaslapa sākas ar birkām `<!DOCTYPE html>` un `<html>`, kas informē pārlūku, ka sākas jauna mājaslapas datne.

Mājaslapai ir divas daļas galvene un vidus, par to liecina birku pāri `<head> </head>` `<body> </body>`.

`<head> </head>` birku pārī tiek ievietoti visi ārējie skripti un mājaslapu aprakstošie tehniskie parametri. 

Piemēram, birka `<title> </title>`, kas uzstāda mājaslapas nosaukumu pārlūka cilnē.

`<body> </body>`  birku pārī tiek ievietots mājaslapas saturs - viss ko lietotājs var redzēt lapā. 

Mājaslapas kodu lietotājs var apskatīt. Biežākā kombinācija ir `ctrl` + `U`

`<head></head>` sadaļā parasti tiek ielikti ārējie stila faili vai Javascript faili.

Tāpat ir noderīgas arī `meta` birkas, kuras ļauj pārlūkam uzzināt informāciju par veidoto lapu, tās autoru vai arī iestatīt lapas kodējumu u.c. ar lapu saistītus parametrus.

Lapai ir raksturīgs tās kodējums. Kodējums ir veids(formāts) kā tiek rādīts teksts. 

Lai apskatītu ASCII kodejumu: [šeit](https://www.ascii-code.com/)

Lai ievietotu `UTF-8` kodējuma noteikumu jālieto šāda birka:

~~~html
<meta charset="UTF-8">
~~~

Šī birka ļaus atrādīt latviešu valodas burtus to pareizā izskatā, pretējā gadījumā garumzīmju vietā var tikt rādītas jautājuma zīmes.

 

## Birkas

Aplūkosim no kā sastāv birka.


![example image](/htmlbirkas.png)

Bāzes attēls: altervista.org

Attēlā redzama paragrāfa birka, kurai ir pievienots klases atribūts. 

Šis paragrāfs lapā atlasāms pēc klases `nice`. 

Birka tiek atvērta ar simboliem `< >` -> `<p>`. Un noslēgta ar slīpsvītru `</ >` -> `</p>`


Ne visām birkām ir nepieciešama to noslēgšana. Piemēram attēla ievietošanas (`<img>`) birkai nav nepieciešama noslēgšana.

Birkām var būt arī definēti to atribūti ne tikai ar vārdu `style`, tabulām var tikt definētas robežas `border=1`, bildēm adrese ar atribūtu `src` utt.

Piemēri:

~~~html

<img src="/mape/bilde.png"> <!-- Bilde ar tās adresi -->

<table border=1> </table>   <!-- Tabula ar tās robežu -->

<a href="https://manasaite.lv/neeksiste">Nospied mani</a> <!-- Hipersaite ar tās adresi un tekstu -->

<img src="https://codebrainer.azureedge.net/images/what-is-html.jpg" width="20px" height="20px"> <!-- Bilde ar tās izmēriem garumā un platumā -->
~~~

### Komentāri kodā

~~~html

<!-- Komentārs HTML lapā -->
~~~

Komentārs šajā gadījumā ir vienas rindas. Birka sākas ar `<!--` un beidzas ar `-->`

Kādam nolūkam lieto komentārus? - Pavisam vienkārši, lai "atslēgtu" kādu konkrētu koda daļu, lai pārlūks to neatrādītu.

Piemērs:

~~~html
    <!--  <div>Virsraksts</div>
       
    <div>Lapas vidējās daļas saturs</div> -->
~~~

Vēl viens no piemēriem ir dažādu informatīvu komentāru izveide citiem programmētājiem.

Piemērs:

~~~html
    <div>Virsraksts</div>
        <!-- Šeit beidzas virsraksts un sākas vidus daļa -->
    <div>Lapas vidējās daļas saturs</div>
~~~

Komentāri netiek atrādīti lapā! To var redzēt tikai un vienīgi skatoties lapas kodu. 


### Rindas pārtraukums

Lai pārnestu elementu jaunā rindā, lieto birku `<br>`.

~~~html
<a href="https://www.inbox.lv/">Inbox</a><br>
<a href="https://www.delfi.lv/">Delfi</a>
~~~

Noklusēti hipersaites attēlojas vienā rindā, tāpēc pārnesot jaunā rindā, jālieto `<br>`!

### DIV bloki

Birku `<div>` lieto lapas izkārtojumam. Tas ir bloks, kurā ievieto citus elementus, piemēram, rindkopas vai attēlus.
::: tabs
@tab Kods

~~~html
<html>
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
<body>
    <div id="kvadrats">
        <p>Es esmu kvadrāts!</p>
    </div>

    <div id="aplis">
        <p>Es esmu aplis!</p>
    </div>
</body>
</html>
~~~
@tab Iznākums 

![div-bloki](/div-bloki.jpg)

:::


Ar `border-radius: 50%;` iegūstam apaļu formu, bet `line-height: 100px;` novieto tekstu apļa centrā!


### Atveramais saraksts

Ar birkām `<details>` un `<summary>` var panākt interesantu atveramo izvēlni.
::: tabs
@tab Kods

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
@tab Iznākums 

![details-birka](/details.gif)

:::

Nospiežot uz bultiņas, saraksts atveras. Nospiežot vēlreiz, aizveras.

Lai saraksts noklusēti attēlotos atvērts, `details` birkai pieraksta atribūtu `open`!

### Izcelts teksts

Lai izceltu rindkopas fragmentu, lieto birku `<mark>`.
::: tabs

@tab Kods

~~~html

<p>Šis nav svarīgs rindkopas teksts, bet <mark>šis ir ļoti svarīgs teksts.</mark></p>

~~~
@tab Iznākums

<p>Šis nav svarīgs rindkopas teksts, bet 
    <mark>šis ir ļoti svarīgs teksts.</mark>
</p>
:::

Teksts starp `<mark>` birkām attēlosies dzeltens. <br>
Iestatot stila atribūtu `background-color: [krāsa];` var iestatīt jebkādu citu iekrāsojumu!


### Attēla ievietošana lapā
::: tabs
@tab Kods

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Lapas virsraksts</title>
    </head>
<body>

    <h1>Ievietoju savu pirmo bildīti!</h1>
    <img src="https://codebrainer.azureedge.net/images/what-is-html.jpg" width="20px" height="20px">

</body>
</html>
~~~

@tab Iznākums 

![html1](/html_uzd1.png)

Avots: azureedge.net

:::

Šajā piemērā tiek ievietots pirmā līmeņa virsraksts `h1` un ārējā bilde, bet ļauts izmantot arī datorā atrodamās.

Attēlam ir 3 atribūti: `src` - attēla adrese, `width` - attēla platums pikseļos, `height` - attēla garums pikseļos.

Attēla izmērus var pierakstīt arī ar atribūtu `style` - `style="width:20px;height:20px"`

Atribūtā `alt` norāda tekstu, kas parādīsies, ja attēlu neizdosies ielādēt.

Piemērs:  

![kur-ir-attels](/kur-ir-attels.jpg)

Ārēji uzturētās bildes var ar laiku pazust. Tas atkarīgs no attēla uzturētāja.


### Hipersaite uz ārēju resursu

Lapā iespējams ievietot klikšķināmu hipersaiti, kas ved uz ārēju resursu. Tam lieto birku `<a>` ar parametru `href=`.


::: tabs
@tab Kods

~~~html
<a href="https://www.e-klase.lv/">Doties uz e-klasi!</a>
~~~

@tab Iznākums 

[Doties uz e-klasi!](https://www.e-klase.lv/)

:::

Parametrā `href=` svarīgi norādīt pilno adresi!

::: tabs
@tab Kods

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Lapas virsraksts</title>
    </head>
<body>

    <h1>Mana hipersaite</h1>
    <a href="https://navtadasmajaslapas.lv/apaksmape">Nospied mani</a>
    
</body>
</html>
~~~

@tab Iznākums 

![html1](/urlhiperlink.png)

:::

### Hipersaite uz citu HTML dokumentu

Iedomāsimies, ka mums ir fails `index.html` un fails `jauna_sadala.html`.

Galvenajā lapā ievietosim saiti uz jauno sadaļu...

~~~html
<a href="jauna_sadala.html">Doties uz jauno sadaļu!</a>
~~~

Ja HTML dokuments atrodas apakšmapē, svarīgi norādīt tās nosaukumu, piemēram, `sadalas/jauna.sadala.html`!



### Rindkopas

Rindkopas lapā ievieto ar birku `<p>`. Katra rindkopa attēlojas jaunā rindā.

~~~html
<p>Šī ir rindkopa</p>
~~~

### Dažādi virsraksti lapā

Kopā ir 6 līmeņu virsraksti, tie atšķirās ar burtu izmēru. `<h1>` ir lielākais, bet `<h6>` mazākais.

::: tabs
@tab Kods

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Lapas virsraksts</title>
    </head>
<body>
    <h1>1. līmeņa virsraksts </h1>
    <h2>2. līmeņa virsraksts </h2>
    <h3>3. līmeņa virsraksts </h3>
    <h4>4. līmeņa virsraksts </h4>
    <h5>5. līmeņa virsraksts </h5>
    <h6>6. līmeņa virsraksts </h6>
</body>
</html>
~~~

@tab Iznākums 

![html1](/html_uzd2.png)

:::

### Tabulas izveide

Lai izveidotu HTML tabulu to sāk veidot ar birku `<table>`. Tad seko rindu un šūnu definēšana.

Rindu definē ar birku `<tr>` un šūnu definē ar `<td>`.

Angliski - `<tr>` -> Table Row
`<td>` -> Table data

Apskatīsim piemēru.

::: tabs

@tab Kods

~~~html
<table>
	<tr>
    	<td>1. rinda - 1. kolona </td>
        <td>1. rinda - 2. kolona </td>
        <td>1. rinda - 3. kolona </td>
        <td>1. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>2. rinda - 1. kolona </td>
        <td>2. rinda - 2. kolona </td>
        <td>2. rinda - 3. kolona </td>
        <td>2. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>3. rinda - 1. kolona </td>
        <td>3. rinda - 2. kolona </td>
        <td>3. rinda - 3. kolona </td>
        <td>3. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>4. rinda - 1. kolona </td>
        <td>4. rinda - 2. kolona </td>
        <td>4. rinda - 3. kolona </td>
        <td>4. rinda - 4. kolona </td>
    </tr>
</table>
~~~

@tab Iznākums 

![html1](/htmltablerobezas.png)

:::

Var secināt, ka tabula nav pārskatāma, jo tabulai nav robežu. 
Lai uzstādītu tabulai robežas, tad izmantot birkai `<table>` atribūtu `border=1`

::: tabs

@tab Kods

~~~html
<table border=1>
	<tr>
    	<td>1. rinda - 1. kolona </td>
        <td>1. rinda - 2. kolona </td>
        <td>1. rinda - 3. kolona </td>
        <td>1. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>2. rinda - 1. kolona </td>
        <td>2. rinda - 2. kolona </td>
        <td>2. rinda - 3. kolona </td>
        <td>2. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>3. rinda - 1. kolona </td>
        <td>3. rinda - 2. kolona </td>
        <td>3. rinda - 3. kolona </td>
        <td>3. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>4. rinda - 1. kolona </td>
        <td>4. rinda - 2. kolona </td>
        <td>4. rinda - 3. kolona </td>
        <td>4. rinda - 4. kolona </td>
    </tr>
</table>
~~~

@tab Iznākums 

![html1](/html_uzd4.jpg)

:::

Tabulai ir iespējams arī uzstādi šūnu sapludināšanu vertikālu un horizontāli. 

Ja sapludina šūnas horizontāli, tad jāatceras noņemt tik šūnas cik tiek sapludinātas jeb sapludinot 2 šūnas horizontāli jānoņem divas `<td></td>` birkas. Tāpat arī vertikāli, bet atbilstoši rindu skaitam.

Piemērs.

::: tabs

@tab Kods

~~~html
<table>
	<tr>
    	<td rowspan=2>1. rinda - 1. kolona </td>
        <td>1. rinda - 2. kolona </td>
        <td>1. rinda - 3. kolona </td>
        <td>1. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<!-- Noņemu pirmo šūnu, jo sapludinu divas rindas. -->
        <td>2. rinda - 2. kolona </td>
        <td>2. rinda - 3. kolona </td>
        <td>2. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>3. rinda - 1. kolona </td>
        <td>3. rinda - 2. kolona </td>
        <td>3. rinda - 3. kolona </td>
        <td>3. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>4. rinda - 1. kolona </td>
        <td>4. rinda - 2. kolona </td>
        <td colspan=2>4. rinda - 3. kolona </td>
        <!-- Noņemu pēdējo šūnu, jo sapludinu divas šūnas blakus. -->
    </tr>
</table>
~~~

@tab Iznākums 

![html1](/html_uzd5.jpg)

:::

### Numurēti saraksti

Numurētu sarakstu veido ar birku `<ol>`, kas nozīmē *ordered list*. Katru saraksta vienību jeb rindu veido ar birku `<li>`.


::: tabs

@tab Kods


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

@tab Iznākums 

![numurets-saraksts](/numurets-saraksts.jpg)

:::

Iestatot sarakstam atribūtu `type="I"`, iegūstam romiešu ciparus, bet atribūts `type="A"` veidos alfabētisku numerāciju.


::: tabs

@tab Kods


~~~html
<h3>Kurš ir gada pirmais mēnesis?</h3>
<ol type="A">
    <li>Septembris</li>
    <li>Augusts</li>
    <li>Janvāris</li>
</ol>
~~~

@tab Iznākums 

![saraksts](/saraksts.jpg)

:::


### Nenumurēti saraksti

Nenumurētu sarakstu veido ar birku `<ul>`, bet saraksta vienības tāpat ar `<li>`.

::: tabs

@tab Kods

~~~html
<h3>Ēdienkarte:</h3>
<ul>
    <li>Aukstā zupa</li>
    <li>Karbondāde</li>
    <li>Biezpienmaize</li>
    <li>Kefīrs</li>
</ul>
~~~

@tab Iznākums 

![edienkarte](/edienkarte.jpg)

:::

Sarakstus iespējams veidot vairākos līmeņos, `<li>` vietā liekot `<ol>` vai `<ul>`.

## Klases un identifikatori

Elementus HTML dokumentā var ērti grupēt, izmantojot klases. Klasi elementam iestata šādi:

~~~html
<p class="zilaRindkopa">Es mācos kodēt...</p>
~~~

Un atbilstošais CSS selektors, lai rindkopa attēlotos zilā krāsā.

~~~css
.zilaRindkopa { 
    color: blue;
}
~~~

Visas rindkopas, kurām iestatīta klase `zilaRindkopa`, attēlosies zilā krāsā.

Klases īpašības iespējams definēt arī atsevišķiem elementiem, piemēram, dažādas sarkanās nokrāsas virsrakstiem.

~~~html
<h1 class="sarkans">Sarkans virsraksts</h1>
<h2 class="sarkans">Sarkans virsraksts</h2>
<h3 class="sarkans">Sarkans virsraksts</h3>
~~~

~~~css
h1.sarkans {
  color:rgb(255, 0, 0);
}

h2.sarkans {
  color:rgb(220, 0 ,0);
}

h3.sarkans {
  color:rgb(200, 0 ,0);
}
~~~

Identifikatorus lieto, lai stilizētu unikālu elementu lappusē.

Pieņemsim, ka lappusē ievietots logo, kuram jāiestata izmēri.

~~~html
<img id="logo" src="mans_logo.jpg">
~~~
~~~css
#logo {
    width: 80px;
}
~~~
::: tip Svarīgi!
Identifikatorus lieto, lai veidotu unikālus elementus lapā. Identifikatoru var lietot tikai vienam elementam lapā!
:::

## Stila piešķiršana elementam

Ir divi veidi kā piešķirt stilu elementam:
1. Pievienojot stila noteikumu pie paša elementa;
2. Definējot stila failu/stila birkas pašā lapā.

Piešķirot stilu kādam elementam to raksta atribūtā `style`. 

Ar visiem pieejamajiem stila definējumiem var iepazīties [šeit](https://www.w3schools.com/cssref/)

Piemērs. Pievienojam elementam fona krāsu `background-color` un teksta krāsu `color`, un izmēru `font-size`. 
::: tabs
@tab Kods
~~~html
<p style="background-color:red;color:white;font-size:20px"> 
    Paragrāfs ar sarkanu fonu un baltu tekstu
</p>
~~~

@tab Iznākums 

![example image](/paragrafssarkans.png)

:::

Šajā piemērā stila noteikumi darbosies tikai uz šo elementu.

Otrs veids ir definēt stilu kā failu vai stila birku dokumentā. 

Piemērs. Izveidojam stila birkas HTML dokumentā. Un uzstādam visus tos pašus noteikumus.

~~~html
<style>
    p{
        backround-color:red;
        color:white;
        font-size:20px;
    }
</style>
~~~

Šajā piemērā stila noteikumi darbosies uz visiem `p` elementiem.


Stila failu definē ar paplašinājumu `.css` un ievieto lapā ar šādu birku:

~~~html
 <link rel="stylesheet" href="manstils.css">
~~~

~~~note
Stila faila ievietošanu veic lapas galvenē jeb `<head>` birkās. 
~~~

Stila noteikumu izskats stila failā:
~~~css
p{
    backround-color:red;
    color:white;
    font-size:20px
}
~~~
### Pēc ID vai Class

Iepriekšējā nodaļā apskatījām piemēru kā var piešķirt stilu konkrētam elementam vai viena veida elementiem, piemēram, paragrāfiem.

Ir arī veids, kurā var piešķirt stilus konkrētiem elementiem tos grupējot pēc klases vai identifikatora.

Lai pievienotu stilu elementam pēc tā identifikatora `id`.

Nodefinēsim paragrāfu ar identifikatoru `zalu`.

~~~note
Klases un identifikātorus veido programmētājs.
~~~

~~~html
<p id="zalu">Paragrāfs</p>
~~~

Lai atlasītu šo elementu pēc identifikatora stila failā jāizmanto tā nosaukums un restīte `#`.

::: tabs
@tab Kods
~~~css
#zalu{
    background:green;
    color:white;
    font-size:20px;
}
~~~

@tab Iznākums 

![example image](/idzalu.png)

:::

Tieši tāpat var atlasīt visus elementus pēc tā klases. Tad izmanto atribūtu `class`. Restītes vietā izmanto punktu.


::: tabs
@tab Kods

~~~html
<p class="zalu">Paragrāfs</p>
~~~

~~~css
.zalu{
    background:red;
    color:white;
    font-size:20px
}
~~~

@tab Iznākums 

![example image](/classzalu.png)

:::

Elements var saturēt vairākas klases.

~~~html
<p class="zalu centret">Paragrāfs</p>
~~~

## Selektori

Apskatīsim, kā iespējams mainīt burtu izmēru visām rindkopām HTML dokumentā.

~~~css
p {
     font-size: 18pt;
}
~~~

Šajā gadījumā `p` ir selektors, `font-size` ir īpašība, bet `18pt` ir vērtība.

Vienā selektorā iespējams iestatīt īpašības vairākiem elementiem, piemēram, visu līmeņu virsrakstiem.

~~~css
h1, h2, h3, h4, h5, h6 {
    font-family: "Arial";
}
~~~

Ne vienmēr mēs vēlamies formatēt visas rindkopas vai visus virsrakstus lapā, tāpēc lieto.

### Hierarhiskie selektori

Ja nepieciešams formatēt elementu, kas ir tiešais *apakšīrnieks* citam elementam, lieto `>`.

~~~html
<p>Rindkopa ārpus div bloka.</p>
<div>
    <p>Rindkopa div blokā.</p>
</div>
~~~
~~~css
div > p {
    font-weight: bold;
}
~~~

Ja elementiem nav tiešas saiknes, tad rīkojas šādi:

~~~html
<p>Rindkopa ārpus div bloka.</p>
<div>
    <span>
        <p>Rindkopa div blokā.</p>
    </span>
</div>
~~~
~~~css
div p {
    font-weight: bold;
}
~~~
Stils būs spēkā visām rindkopām, kuras atrodas jebkurā pakāpē div blokā.


### Aktīvie selektori

Aktīvie selektori jeb pseido-klases ir selektori, kas nosaka, kā elements reaģēs uz noteiktām darbībām, piemēram, uzbraukšana ar kursoru vai klikšķis uz saites.

Apskatīsim piemēru ar hipersaiti...

~~~css
a:link {
    color: blue; /* Krāsa neapskatītai saitei */
}

a:visited {
    color: purple; /* Krāsa apskatītai saitei */
} 
~~~

Citas biežāk lietotās pseido-klases ir `active`, `focus` un `hover`.

Ar `active` var iestatīt saites izskatu klikšķa brīdī.
Ar `focus` iestata īpašības atlasītiem elementiem, piemēram, `input` laukam datu ievades brīdī.
Ar `hover` iestata īpašības, kas stājas spēkā, uzbraucot elementam ar peles kursoru.

Dotajā piemērā pogas teksts palielinās 1.5x, ja tam uzbraucam ar kursoru.
~~~css
button:hover {
    font-size: 1.5em;
}
~~~

Ievades lauks iegūs sarkanu rāmi, ja to atlasīs.
~~~css
input:focus {
    border:1px solid red;
}
~~~

Ar `::first-letter` selektoru iespējams atsevišķi nodefinēt pirmā burta stilu rindkopai vai virsrakstam.
~~~css
p::first-letter {
    font-size: 3em;
    color: orange;
    text-shadow: 1px 1px grey;
}
~~~

Selektoru `::selection` izmanto, lai nodefinētu īpašības atlasītam tekstam rindkopā vai virsrakstā.

~~~css
p::selection {
    color: white;
    background-color: black;
}
~~~

Atlasītā rindkopas tekstā būs balti burti uz melna fona.

### Izņēmuma selektori

Iedomāsimies, ka mums ir 4 attēli, kuriem jāiestata izmērs, bet attēlam ar `id="titulbilde"` jāpaliek nemainīgam.

~~~html
<img id="titulbilde" src="...">
<img src="...">
<img src="...">
<img src="...">
~~~

Lieto `:not()`, iekavās rakstot elementu, uz kuru neattieksies dotās īpašības.

~~~css
img:not(#titulbilde) {
    width: 100px;
}
~~~


## Biežāk lietotās īpašības

~~~css
p, a, h1 {
    font-size: 16pt; /* Burtu izmērs */
    font-family: "Times New Roman"; /* Burtu stils */
    font-weight: bold; /* Treknraksts */
    font-style: italic; /* Slīpraksts */
    letter-spacing: 10px; /* Atstatums starp burtiem */
    word-spacing: 30px; /* Atstatums starp vārdiem */

    /* Pasvītrojums un pārsvītrojums */
    text-decoration: none | underline | overline | line-through; 
    text-decoration-color: black; 
    text-decoration-style: solid | wavy | dotted | dashed | double;
}

table {
    border-collapse: collapse; /* Apvieno šūnu, rindu un tabulas ierāmējumu */
    border: 1px solid black; /* Iestata 1px biezu nepārtrauktu rāmja līniju */
}

img, div {
    width: 100px; /* Platums */
    height: 200px;  /* Augstums */
}

div {
    border-radius: 10px; /* Noapaļoti stūri */
    border-radius: 50%; /* Div bloks kā aplis */
    background-color: red; /* Fona krāsa */
    background: linear-gradient(to right, red, yellow); /* Fons kā krāsu pāreja */
}

* {
    padding: 5px; /* Iestata attālumu līdz ierāmējumam */
    margin: 10px; /* Iestata attālumu līdz blakus elementiem */
}
~~~


## Kastes modelis

![box_model](/box_model.jpg)

Avots: web.dev/learn/css/box-model/

Kastes modelis ir veids, kā tiek aprakstīts HTML elementa izmērs un izvietojums lapā. Kastes modelis sastāv no četriem elementiem: iekšējās platuma un augstuma, ārējās platuma un augstuma, iekšējās atkāpes un ārējās atkāpes.

Komanda margin nosaka attālumu starp elementu un citiem elementiem, bet padding nosaka attālumu starp elementa saturu un tā ierāmējumu - uz iekšu.

Parasti tiek lietotas abas atkāpes, lai elementi būtu labi redzami un saprotami, bet tie aizņem lielāku vietu lapā.

Lai to vieglāk būtu saprast, te ir vienkāršāks piemērs.

![box_model](/padding_margin.jpeg)
Avots: webflow

Lai vieglāk saprastu kastes modeli, iespējams izmantot [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp) rīku.

## Krāsu sistēmas

Visbiežāk CSS lieto vienu no divām krāsu sistēmām: HEX vai RGB

### HEX sistēma

HEX sistēmā krāsa tiek kodēta heksadecimālajā skaitīšanas sistēmā un kods veidojas kā #RRGGBB, kur RR ir sarkanās krāsas intensitāte, GG ir zaļās krāsas intensitāte, bet BB ir zilās krāsas intensitāte.

Piemēram, #0000FF tiek attēlota kā zilā krāsa.

~~~css
div {
    background-color: #FFFF00; /* Dzeltens fons */
}
~~~

### RGB sistēma

RGB sistēma paredz līdzīgu principu, taču pieraksts veidojas no 3 komponentiem, tie ir (R, G, B), kur R ir sarkanā, G ir zaļā, bet B - zilā krāsa. Katru komponenti norāda ar vērtību no 0 līdz 255.

~~~css
p {
    color: rgb(255, 0, 0); /* Sarkans rindkopas teksts */
}
~~~

Nereti rgb īpašībā lieto 4. parametru, kas ir tā sauktais alfa parametrs, kurš norāda krāsas caurspīdīgumu. Tas var būt diapazonā no 0 līdz 1.0.

~~~css
div {
    background-color: rgba(255, 0, 0, 0.5); /* Puscaurspīdīgs sarkans fons */
}
~~~

Veidojot mājas lapas, tev varētu noderēt resurss [htmlcolorcodes.com](https://htmlcolorcodes.com/color-picker/), kur iespējams atlasītai krāsai iegūt gan RGB, gan HEX kodu.


## Mērvienības

Mērvienības iedalās absolūtajās un relatīvajās mērvienībās. Absolūtās mērvienības lieto, ja nepieciešams elementam iestatīt fiksētu un nemainīgu izmēru. Relatīvās mērvienības ir atkarīgas no kopējā lapai vai elementam atvēlētā laukuma.

Biežāk lietotās absolūtās mērvienības:

|Mērvienība        | Pielietojums                                                                     |
|------------------|----------------------------------------------------------------------------------|
|`px` jeb pikseļi  | lieto, lai iestatītu izmēru attēlam, div blokam un citiem grafiskiem elementiem  |
|`pt` jeb punkti   | lieto burtu izmēram                                                              |

Relatīvās mērvienības:

|Mērvienība | Pielietojums                                                                     |
|-----------|----------------------------------------------------------------------------------|
|`em`       | lieto burtu izmēram (2em nozīmē 2x lielāki burti)                                |
|`%`        | relatīvs attiecībā pret augstākstāvošo *(parent)* elementu                       |


### Piemērs

Šajā gadījumā attēls aizņems 50% no visa tam atvēlēta laukuma.
~~~html
<body>
    <img id="attels" src="ainava.jpg">
</body>
~~~
~~~css
#attels {
    width: 50%;
}
~~~
