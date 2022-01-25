---
layout: default
title:  Birkas
grand_parent: Programmēšana
parent: HTML un CSS
nav_order: 4

---

# Birkas

Aplūkosim no kā sastāv birka.


![example image](/media/htmlbirkas.png)

Bāzes attēls: altervista.org

Attēlā redzama paragrāfa birka, kurai ir pievienots klases atribūts. 

Šis paragrāfs lapā atlasāms pēc klases `nice`. 

Birka tiek atvērta ar simboliem `< >` -> `<p>`. Un noslēgta ar slīpsvītru `</ >` -> `</p>`


Ne visām birkām ir nepieciešama to noslēgšana. Piemēram attēla ievietošanas (`<img>`) birkai nav nepieciešama noslēgšana.
{: .alert .alert-warning}

Birkām var būt arī definēti to atribūti ne tikai ar vārdu `style`, tabulām var tikt definētas robežas `border=1`, bildēm adrese ar atribūtu `src` utt.

Piemēri:

~~~html

<img src="/mape/bilde.png"> <!-- Bilde ar tās adresi -->

<table border=1> </table>   <!-- Tabula ar tās robežu -->

<a href="https://manasaite.lv/neeksiste">Nospied mani</a> <!-- Hipersaite ar tās adresi un tekstu -->

<img src="https://codebrainer.azureedge.net/images/what-is-html.jpg" width="20px" height="20px"> <!-- Bilde ar tās izmēriem garumā un platumā -->
~~~