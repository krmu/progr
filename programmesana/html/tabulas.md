---
layout: default
title:  Tabulas
grand_parent: Programmēšana
parent: HTML
nav_order: 10
---

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