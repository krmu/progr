---
layout: default
title:  Mājaslapas sadaļas
grand_parent: Programmēšana
parent: HTML un CSS
nav_order: 2
---

# Mājaslapas sadaļas

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



Mājaslapas kodu lietotājs var apskatīt. Biežākā kombinācija ir `ctrl` + `U`
{: .alert .alert-warning}

`<head></head>` sadaļā parasti tiek ielikti ārējie stila faili vai Javascript faili.

Tāpat ir noderīgas arī `meta` birkas, kuras ļauj pārlūkam uzzināt informāciju par veidoto lapu, tās autoru vai arī iestatīt lapas kodējumu u.c. ar lapu saistītus parametrus.

Lapai ir raksturīgs tās kodējums. Kodējums ir veids(formāts) kā tiek rādīts teksts. 

Lai apskatītu ASCII kodejumu: [šeit](https://www.ascii-code.com/)

Lai ievietotu `UTF-8` kodējuma noteikumu jālieto šāda birka:

~~~html
<meta charset="UTF-8">
~~~

Šī birka ļaus atrādīt latviešu valodas burtus to pareizā izskatā, pretējā gadījumā garumzīmju vietā var tikt rādītas jautājuma zīmes.