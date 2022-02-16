---
layout: default
title: Hipersaites
grand_parent: Programmēšana
parent: HTML
nav_order: 8
---

## Hipersaite uz ārēju resursu

Lapā iespējams ievietot klikšķināmu hipersaiti, kas ved uz ārēju resursu. Tam lieto birku `<a>` ar parametru `href=`.

~~~html
<a href="https://www.e-klase.lv/">Doties uz e-klasi!</a>
~~~

Rezultāts:
[Doties uz e-klasi!](https://www.e-klase.lv/)

Parametrā `href=` svarīgi norādīt pilno adresi!
{: .alert .alert-warning}

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
 
![html1](/media/urlhiperlink.png)

## Hipersaite uz citu HTML dokumentu

Iedomāsimies, ka mums ir fails `index.html` un fails `jauna_sadala.html`.

Galvenajā lapā ievietosim saiti uz jauno sadaļu...

~~~html
<a href="jauna_sadala.html">Doties uz jauno sadaļu!</a>
~~~

Ja HTML dokuments atrodas apakšmapē, svarīgi norādīt tās nosaukumu, piemēram, `sadalas/jauna.sadala.html`!
{: .alert .alert-warning}
