---
layout: default
title: Ievads
grand_parent: Programmēšana
parent: HTML un CSS
nav_order: 1
---
# Kas ir HTML?

HTML jeb angļu valodā Hyper Text Markup Language ir marķēšanas/iezīmēšanas valoda, kura ļauj klienta pārlūkā atrādīt mājaslapas saturu. 

HTML nav programmēšanas valoda.
{: .alert .alert-warning}

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

# Kā darbojas HTML? Kur tas rodas?

![example image](/media/request.png){: .nerami}

Avots: monashdatafluency.github.com

Aplūkojot šo attēlu , var secināt, ka viss sākas ar lietotāja pieprasījumu - momentu, kad lietotājs pārlūkā ievada tīmekļa lapas adresi.

Tad notiek pieprasījums uz serveri. Serveris izveido HTML kodu un atgriež skatītāja pārlūkam. 

Pārlūks to saliek kopā un atrāda tieši tā kā to bija izdomājis programmētājs.