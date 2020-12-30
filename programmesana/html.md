---
layout: default
title: HTML & CSS
description: ~
---

# Lapa par HTML un CSS

## Kas ir HTML?

HTML jeb angļu valodā Hyper Text Markup Language ir marķēšanas/iezīmēšanas valoda, kura ļauj klienta pārlūkā atrādīt mājaslapas saturu. HTML nav programmēšanas valoda.

HTML faili beidzas ar paplašinājumu `.html` un ir izpildāmi pārlūkā.

Mājaslapas sastāv no birkām vai angliski tags. 

Ar lielāko daļu birkām var iepazīties [šeit](https://www.w3schools.com/tags/default.asp)

Birkas ļauj strukturēt mājaslapu no dažādiem elementiem. 

Lai definētu elementu lielākajai daļai no HTML birkām ir atverošā birka un aizverošā. 

Piemērs
~~~html
<p> </p>
~~~
`<p>` ir atverošā birka, kura informē pārlūku, ka sākas paragrāfa birka.

`</p>` ir aizverošā birka, kura informē pārlūku, ka beidzas paragrāfa birka.

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
Mājaslapa sākas ar birkām `<!DOCTYPE html>` un `<html>`, kas informē pārlūku, ka sākas jauns mājaslapas fails.

Mājaslapai ir divas daļas galvene un vidus, par to liecina birku pāri `<head> </head>` `<body> </body>`.

`<head> </head>` birku pārī tiek ievietoti visi ārējie skripti un mājaslapu aprakstošie tehniskie parametri. Piemēram, birka `<title> </title>`, kas uzstāda mājaslapas nosaukumu pārlūka cilnē.

`<body> </body>`  birku pārī tiek ievietots mājaslapas saturs - viss ko lietotājs var redzēt lapā. 

~~~warning

Mājaslapas kodu lietotājs var apskatīt.

~~~~

