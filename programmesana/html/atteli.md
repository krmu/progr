---
layout: default
title: Attēli
grand_parent: Programmēšana
parent: HTML
nav_order: 9
---

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
Avots: azureedge.net
Izskats:
![html1](/media/html_uzd1.png)

Šajā piemērā tiek ievietots pirmā līmeņa virsraksts `h1` un ārējā bilde, bet ļauts izmantot arī datorā atrodamās.

Attēlam ir 3 atribūti: `src` - attēla adrese, `width` - attēla platums pikseļos, `height` - attēla garums pikseļos.

Attēla izmērus var pierakstīt arī ar atribūtu `style` - `style="width:20px;height:20px"`

Atribūtā `alt` norāda tekstu, kas parādīsies, ja attēlu neizdosies ielādēt.

Piemērs:  
![Te jābūt attēlam. Kur tas ir?](/media/navattela.jpg)

Ārēji uzturētās bildes var ar laiku pazust. Tas atkarīgs no attēla uzturētāja.
{: .alert .alert-warning}