---
title: HTML & CSS
description: ~
---

# Lapa par HTML un CSS

## Kas ir HTML?

HTML jeb angļu valodā Hyper Text Markup Language ir marķēšanas/iezīmēšanas valoda, kura ļauj klienta pārlūkā atrādīt mājaslapas saturu. 
~~~warning
HTML nav programmēšanas valoda.
~~~
HTML faili beidzas ar paplašinājumu `.html` vai jaunajā versijā `.htm` un ir izpildāmi pārlūkā.

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
Mājaslapa sākas ar birkām `<!DOCTYPE html>` un `<html>`, kas informē pārlūku, ka sākas jauna mājaslapas datne.

Mājaslapai ir divas daļas galvene un vidus, par to liecina birku pāri `<head> </head>` `<body> </body>`.

`<head> </head>` birku pārī tiek ievietoti visi ārējie skripti un mājaslapu aprakstošie tehniskie parametri. 

Piemēram, birka `<title> </title>`, kas uzstāda mājaslapas nosaukumu pārlūka cilnē.

`<body> </body>`  birku pārī tiek ievietots mājaslapas saturs - viss ko lietotājs var redzēt lapā. 

~~~warning

Mājaslapas kodu lietotājs var apskatīt. Biežākā kombinācija ir `ctrl` + `U`

~~~~

## Birkas

Aplūkosim no kā sastāv birka.


![example image](/media/htmlbirkas.png)

Attēlā redzama paragrāfa birka, kurai ir pievienots klases atribūts. 

Šis paragrāfs lapā atlasāms pēc klases `nice`. 

Birka tiek atvērta ar simboliem `< >` -> `<p>`. Un noslēgta ar slīpsvītru `</ >` -> `</p>`

~~~warning

Ne visām birkām ir nepieciešama to noslēgšana. Piemēram attēla ievietošanas (`<img>`) birkai nav nepieciešama noslēgšana.

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
Iznākums:

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
Iznākums:

![html1](/media/html_uzd1.png)

Šajā piemērā tiek ievietots pirmā līmeņa virsraksts `h1` un attēls. 

Attēlam ir 3 atribūti: `src` - attēla adrese, `width` - attēla platums pikseļos, `height` - attēla garums pikseļos.

Attēla izmērus var pierakstīt arī ar atribūtu `style` - `style="width:20px;height:20px"`

Šajā piemērā tiek izmantota ārējā bilde, bet ļauts izmantot arī datorā atrodamās.

~~~warning

Ārēji uzturētās bildes var ar laiku pazust. Tas atkarīgs no attēla uzturētāja.

~~~
