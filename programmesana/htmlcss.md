---
title: HTML un CSS
description: ~
---
![pythonlogo](/media/htmllogo.png){: .logoval}
# Lapa par HTML un CSS

## Kas ir HTML?

HTML jeb angļu valodā Hyper Text Markup Language ir marķēšanas/iezīmēšanas valoda, kura ļauj klienta pārlūkā atrādīt mājaslapas saturu. 
~~~warning
HTML nav programmēšanas valoda.
~~~
HTML faili beidzas ar paplašinājumu `.html` vai jaunajā versijā `.htm` un ir izpildāmi pārlūkā.

Mājaslapas sastāv no birkām vai angliski `tags`. 

Ar lielāko daļu birku var iepazīties [šeit](https://www.w3schools.com/tags/default.asp)

Birkas ļauj strukturēt mājaslapu no dažādiem elementiem. 

Lai definētu elementu, lielākajai daļai no HTML birkām ir atverošā birka un aizverošā. 

Piemērs:

~~~html
<p> </p>
~~~

`<p>` ir atverošā birka, kura informē pārlūku, ka sākas paragrāfs.

`</p>` ir aizverošā birka, kura informē pārlūku, ka beidzas paragrāfs.

## Mājaslapas sadaļas

Apskatīsim mājaslapas daļas. 

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
Izskats: 

![pythonlogo](/media/htmlsadalas.png)

Mājaslapa sākas ar birkām `<!DOCTYPE html>` un `<html>`, kas informē pārlūku, ka sākas jauna mājaslapas datne.

Mājaslapai ir divas daļas galvene un vidus, par to liecina birku pāri `<head> </head>` `<body> </body>`.

`<head> </head>` birku pārī tiek ievietoti visi ārējie skripti un mājaslapu aprakstošie tehniskie parametri. 

Piemēram, birka `<title> </title>`, kas uzstāda mājaslapas nosaukumu pārlūka cilnē.

`<body> </body>`  birku pārī tiek ievietots mājaslapas saturs - viss ko lietotājs var redzēt lapā. 

~~~warning

Mājaslapas kodu lietotājs var apskatīt. Biežākā kombinācija ir `ctrl` + `U`

~~~~
## Vienkāršas darbības

~~~html

<!-- Komentārs HTMl lapā -->
~~~

## Birkas

Aplūkosim no kā sastāv birka.


![example image](/media/htmlbirkas.png)

Attēlā redzama paragrāfa birka, kurai ir pievienots klases atribūts. 

Šis paragrāfs lapā atlasāms pēc klases `nice`. 

Birka tiek atvērta ar simboliem `< >` -> `<p>`. Un noslēgta ar slīpsvītru `</ >` -> `</p>`

~~~warning

Ne visām birkām ir nepieciešama to noslēgšana. Piemēram attēla ievietošanas (`<img>`) birkai nav nepieciešama noslēgšana.

~~~
## Noslēgumā par HTML

HTML mājaslapas var veidot arī bez interneta pieslēguma, jāizveido tukšs `.htm` dokuments, kurā iekšā ir HTML kods, tad jāatver ar kādu no pārlūkiem.

Daļa jauno pārlūku paši pabeidz birkas, ja to ir aizmirsis izdarīt izstrādātājs, bet uz to nevajadzētu paļauties.

## Ievads CSS

CSS jeb Cascading Style Sheets ir veids kā rakstot dažādus noteikumus piešķirt izskatu HTML elementiem lapā.

## Stila piešķiršana elementam

Ir divi veidi kā piešķirt stilu elementam:
1. Pievienojot stila noteikumu pie paša elementa;
2. Definējot stila failu/stila birkas pašā lapā.

Piešķirot stilu kādam elementam to raksta atribūtā `style`. 

Ar visiem pieejamajiem stila definējumiem var iepazīties [šeit](https://www.w3schools.com/cssref/)

Piemērs. Pievienojam elementam fona krāsu `background-color` un teksta krāsu `color`, un izmēru `font-size`. 

~~~html
<p style="background-color:red;color:white;font-size:20px"> Paragrāfs ar sarkanu fonu un baltu tekstu</p>
~~~
Izskats:
![example image](/media/paragrafssarkans.png)

~~~warning
Šajā piemērā stila noteikumi darbosies tikai uz šo elementu.
~~~

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
~~~warning
Šajā piemērā stila noteikumi darbosies uz visiem `p` elementiem.
~~~

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

## Stila piešķiršana elementam pēc tā identifikatora vai klases

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

~~~css
#zalu{
    background:green;
    color:white;
    font-size:20px;
}
~~~
Izskats:

![example image](/media/idzalu.png)

Tieši tāpat var atlasīt visus elementus pēc tā klases. Tad izmanto atribūtu `class`. Restītes vietā izmanto punktu.

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
Izskats:
![example image](/media/classzalu.png)

Elements var saturēt vairākas klases.

~~~html
<p class="zalu centret">Paragrāfs</p>
~~~


## Piemēri ar gataviem kodiem

### Dažādi virsraksti lapā
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
Izskats:

![html1](/media/html_uzd2.png)

### Attēla ievietošana lapā
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
Izskats:
![html1](/media/html_uzd1.png)

Šajā piemērā tiek ievietots pirmā līmeņa virsraksts `h1` un attēls. 

Attēlam ir 3 atribūti: `src` - attēla adrese, `width` - attēla platums pikseļos, `height` - attēla garums pikseļos.

Attēla izmērus var pierakstīt arī ar atribūtu `style` - `style="width:20px;height:20px"`

Šajā piemērā tiek izmantota ārējā bilde, bet ļauts izmantot arī datorā atrodamās.

~~~warning

Ārēji uzturētās bildes var ar laiku pazust. Tas atkarīgs no attēla uzturētāja.

~~~

### Tabulas izveide

Lai izveidotu HTML tabulu to sāk veidot ar birku `<table>`. Tad seko rindu un šūnu definēšana.

Rindu definē ar birku `<tr>` un šūnu definē ar `<td>`.

Angliski - `<tr>` -> Table Row
`<td>` -> Table data

Apskatīsim piemēru.

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
Izskats:
![html1](/media/html_uzd4.jpg)

Var secināt, ka tabula nav pārskatāma, jo tabulai nav robežu. 
Lai uzstādītu tabulai robežas, tad izmantot birkai `<table>` atribūtu `border=1`

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
Izskats:

![html1](/media/htmltablerobezas.png)

Tabulai ir iespējams arī uzstādi šūnu sapludināšanu vertikālu un horizontāli. 

Ja sapludina šūnas horizontāli, tad jāatceras noņemt tik šūnas cik tiek sapludinātas jeb sapludinot 2 šūnas horizontāli jānoņem divas `<td></td>` birkas. Tāpat arī vertikāli, bet atbilstoši rindu skaitam.

Piemērs.
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

Iznākums:
![html1](/media/html_uzd5.jpg)