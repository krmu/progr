---
layout: default
title: PHP
description: PHP programmēšanas valodas lietojums un praktiski piemēri
show_in_menu: true
---

# Ievads

PHP ir servera puses programmēšanas valoda.
Lai saprastu, kas ir servera puses programmēšanas valoda 

![example image](/progr/media/serveris.png)

Attēls: www.techwebspace.com

Mēs varam saprast, ka servera puses programmēšanas valoda ir valoda, kuru izpilda otrpus pieprasījumam. Lietotājs šo valodu nemaz neredz, jo tā atgriež datus pēc notikuma  jeb lietotāja pieprasījuma.

PHP failus uz servera raksta ar paplašinājumu `.php`. PHP kodu klients neredz, to redz tikai izstrādātājs. PHP failu sāk rakstīt ar vārdu `<?php` un beidz ar `?>`

# Lietojums

## Mainīgie

Visi mainīgie tiek definēti ar `$` zīmi. Mainīgā pieraksta beigās liek semikolu - `;`

~~~php

$skaitlis = 0;
$teksts = "Teksts";
$status = True;
$peldpunkts = 0.3;

~~~

## Masīvi

Vienkāršos masīvus definē:

~~~php

$masivs = array("elements1","elements2","elements2");

~~~
Masīvu atslēgu sāk skaitīt no `0` un tas nozīmē, ka piekļūstot vārdam `elements1` būs jāizmanto `$masivs[0]`. Lai izvadītu informāciju no servera puses pie klienta jāizmanto komanda `echo`.

Piemērs. Tiek izdrukāts pirmais elements.

~~~php

$masivs = array("elements1","elements2","elements2");

echo $masivs[0];

~~~

Lai redzētu katram elementa atslēgu masīvā var izmantot arī komandu `var_dump()` tā izvadīs visu masīvu ar to elementu atslēgām.

~~~php 

var_dump($masivs);

~~~

Multidimensionālos masīvus definē to atslēgu, kas nav kārtas skaitlis masīvā.

~~~php

$a = array("pirmais" => 1,"otrais" => 2);

~~~

Izgūstot datus no māsīva varam izmantot atkal komandu, kura izsauc konkrētu masīva elemetu pēc tā atslēgas. Mēs ņemsim elementu "otrais".

~~~php

echo $a['otrais'];

~~~

Tāpat varam definēt masīvu iekš masīva atslēgas, proti, noglabāt vēl vienu masīvu zem konkrētas atslēgas.

~~~php

$a = array("pirmais" => 1,"otrais" => array("elementatslega"=> 1234));

~~~
Šeit esam definējuši vēl vienu masīvu zem atslēgas `otrais`. Kā iegūt šo elementu?

~~~php

echo $a['otrais']['elementatslega'];

~~~

## Loģiskie operatori

| Operators | Apraksts    | Piemērs  |
|:-----|:------------|:------------|
| ==   | Vienāds     |  4 == 4        |
| !=   | Nav vienāds | 4  != 3     |
| >    | Lielāks     | 4 > 3|
| >=   | Lielāks vienāds       |  |
| <    | Mazāks       | 4 < 5 |
| <=   | Mazāks vienāds |  |
| &&   | Un (and)    | 4 && 4 |
| &#124;&#124; | vai (or)	 | saldējums vai medus |

## Nosacījumu veidošana


Lai veidotu nosacījumu, izmanto komandu `if`. Nosacījuma beigās lieto `{` un `}`. Nosacījumu liek parastajās iekavās.
Apskatīsim piemēru.

~~~php

$a = 1;
$b = 2;

if($a > $b){
    echo $a . " ir lielāks nekā ". $b;
}

~~~
## Funkcijas

Lai definētu funkcijas PHP valodā, jāizmanto vārds `function`. 

Piemērs:

~~~php

function saskaiti($a,$b){
    return $a + $b;
}
~~~

Šajā funkcijā tiek doti līdzi divi mainīgie `$a` un `$b`. Funkcija tos saskaita un ar komandu `return` atgriež lietotājam. Lai iegūtu reālu rezultātu:

~~~php

function saskaiti($a,$b){
    return $a + $b;
}

echo saskaiti(3,3);

~~~

Atbilde 6.

## Datu nogādāšana no klienta uz serveri

Lai nogādatu datus no klienta pie server tiek veikts datu nosūtīšanas process. Ir divi dažādi veidi kā veidot pieprasījumu uz serveri. `GET` un `POST`.

`GET` pieprasījums adresē izskatās šādi: `http://www.test.com/index.php?name1=value1&name2=value2`. Ar šo veidu uz serveri nevar nogādāt failus. Mainīgie ir redzami pārlūka adreses logā.

`POST` pieprasījumu pārlūka adresē redzēt nevar. Tiek izmantota `HTTP` galvene, kuru lietotājs neredz. Var tikt pārsūtīti dati uz serveri faila formātā.

![example image](/progr/media/posttoserver.png)

Attēls www.tutorialrepublic.com

## Piemēri

### Datu nogādāšana uz serveri ar POST

~~~php
<?php
   if( $_POST["vards"]) {

      echo "Sveiks, ". $_POST['vards']. "!<br />";
      exit();
   }
?>
~~~
~~~html
<html>
   <body>
      <form action = "<?php $_PHP_SELF ?>" method = "POST">
         Vārds : <input type = "text" name = "vards" />
         <input type = "submit" />
      </form>
   
   </body>
</html>
~~~

Šajā piemērā serverim tiek nogādāts ievades lauciņš `vards`. Formai tiek pateikta metode, šajā gadījumā `POST`.