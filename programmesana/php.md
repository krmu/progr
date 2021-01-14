---
title: PHP
description: PHP programmēšanas valodas lietojums un praktiski piemēri

---
![example image](/media/phplogo.svg){: .logoval}
# Ievads

PHP ir servera puses programmēšanas valoda.
Lai saprastu, kas ir servera puses programmēšanas valoda 

![example image](/media/serveris.png)

Attēls: www.techwebspace.com

Mēs varam saprast, ka servera puses programmēšanas valoda ir valoda, kuru izpilda otrpus pieprasījumam. Lietotājs šo valodu nemaz neredz, jo tā atgriež datus pēc notikuma  jeb lietotāja pieprasījuma.

PHP failus uz servera raksta ar paplašinājumu `.php`. PHP kodu klients neredz, to redz tikai izstrādātājs. PHP failu sāk rakstīt ar vārdu `<?php` un beidz ar `?>`

# Lietojums

## Vienkāršās darbības


~~~php

// vienas rindas komentārs sākas ar slīmajām svītrām
/*
 Vairāku rindu komentārs
*/

echo "Informācijas izvade lapā";

~~~

## Mainīgie

Visi mainīgie tiek definēti ar `$` zīmi. Mainīgā pieraksta beigās liek semikolu - `;`

~~~php

$skaitlis = 0;
$teksts = "Teksts";
$status = True;
$peldpunkts = 0.3;
$masivs = array();

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
~~~tip
Lai redzētu katram elementa atslēgu masīvā var izmantot arī komandu `var_dump()` tā izvadīs visu masīvu ar to elementu atslēgām.
~~~
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

~~~note
Lai veidotu nosacījumu, izmanto komandu `if`. Nosacījuma beigās lieto `{` un `}`. Nosacījumu liek parastajās iekavās.
~~~
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

~~~note

`GET` pieprasījums adresē izskatās šādi: `http://www.test.com/index.php?name1=value1&name2=value2`. Ar šo veidu uz serveri nevar nogādāt failus. Mainīgie ir redzami pārlūka adreses logā.
~~~
~~~note

`POST` pieprasījumu pārlūka adresē redzēt nevar. Tiek izmantota `HTTP` galvene, kuru lietotājs neredz. Var tikt pārsūtīti dati uz serveri faila formātā.
~~~ 

![example image](/media/posttoserver.png)

Attēls www.tutorialrepublic.com
## Papildus resursi

- [PHP.net](https://www.php.net/)
- [PHP in 2020](https://stitcher.io/blog/php-in-2020)
- [Laravel](https://laravel.com/)
- [What Is PHP? - John Morris](https://www.youtube.com/watch?v=mBL9Athx7ms&ab_channel=JohnMorris)

## Objekti

PHP programmēšanas valodā ir iespējams definēt arī objektus un strukturēt tos klasēs. Tas ir veids kā strukturēt kodu, lai tas būtu labāks saprotams citiem programmētājiem un arī vieglāk lasāms.
Objektu definēšanu sāk sāk ar vārdu `class`, kas nozīmē klase, tad tiek definēts klases nosaukums. 
Piemērs - tukša klase.
~~~php

class kermenis
{
  
}

~~~

Tukša klase nevar pastāvēt tai noteikti ir nepieciešamas raksturojošās funkcijas, kuras veic darbību. Ir definēta klase `kermenis`, kurā definēsim trīs funkcijas `galva`, `veders`, `kajas`

~~~php

class kermenis
{
	function galva()
    {
        echo "Šī ir galva"; 
    }
	
	function veders()
    {
        echo "Šis ir vēders"; 
    }
	
	function kajas()
    {
        echo "Šīs ir kājas"; 
    }
}

~~~
Lai izsauktu klasi jāizmanot vārds `new`, jo tādā veidā tiek definēta jauna klase. Piemērā izsauks funkciju ar nosaukumu `galva`


~~~php

class kermenis
{
	function galva()
    {
        echo "Šī ir galva"; 
    }
	
	function veders()
    {
        echo "Šis ir vēders"; 
    }
	
	function kajas()
    {
        echo "Šīs ir kājas"; 
    }
}

$mainigais = new kermenis; // Definējam klasi iekš mainīgā
$mainigais->galva(); // Tagad izsaucam funkciju galva un mums tiks izdrukāts tā saturs.

~~~

## Piemēri

### Datu nogādāšana uz serveri ar POST

~~~php
<?php
   if( $_POST["vards"]) {
      echo "Sveiks, ". $_POST['vards']. "!<br />";
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