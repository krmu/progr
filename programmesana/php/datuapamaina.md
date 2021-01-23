---
layout: default
title:  Datu apamaiņa ar serveri
description: ~
grand_parent: Programmēšana
parent: PHP
nav_order: 7
---
# Datu nogādāšana no klienta uz serveri

Lai nogādatu datus no klienta pie server tiek veikts datu nosūtīšanas process. Ir divi dažādi veidi kā veidot pieprasījumu uz serveri. `GET` un `POST`.


`GET` pieprasījums adresē izskatās šādi: `http://www.test.com/index.php?name1=value1&name2=value2`. Ar šo veidu uz serveri nevar nogādāt failus. Mainīgie ir redzami pārlūka adreses logā.
{: .alert .alert-warning}

`POST` pieprasījumu pārlūka adresē redzēt nevar. Tiek izmantota `HTTP` galvene, kuru lietotājs neredz. Var tikt pārsūtīti dati uz serveri faila formātā.
{: .alert .alert-warning}


![example image](/media/posttoserver.png)

Attēls www.tutorialrepublic.com