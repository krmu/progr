---
layout: default
title:  Piemēri
grand_parent: Programmēšana
parent: HTML un CSS
nav_order: 9
---

# Piemēri ar gataviem kodiem

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


Ārēji uzturētās bildes var ar laiku pazust. Tas atkarīgs no attēla uzturētāja.
{: .alert .alert-warning}


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