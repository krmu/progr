---
title: PHP
order: 5
icon: akar-icons:php-fill
---
## Ievads

PHP ir servera puses programmēšanas valoda.
Lai saprastu, kas ir servera puses programmēšanas valoda 

![example image](/serveris.png)

Attēls: www.techwebspace.com

Mēs varam saprast, ka servera puses programmēšanas valoda ir valoda, kuru izpilda otrpus pieprasījumam. Lietotājs šo valodu nemaz neredz, jo tā atgriež datus pēc notikuma  jeb lietotāja pieprasījuma.

PHP failus uz servera raksta ar paplašinājumu `.php`. PHP kodu klients neredz, to redz tikai izstrādātājs. PHP failu sāk rakstīt ar vārdu `<?php` un beidz ar `?>`

## Kā sākt darbu ar PHP?

Lai darbotos ar PHP servera puses valodu, ir nepieciešams uzstādīt serveri savā datorā. To var izdarīt ar XAMPP vai WAMP programmatūru.

Ir arī alernatīvais variants, izmantot PHP Development Server, kuru var palaist no komandrindas.

### Instalācija ar XAMPP

1. Lejupielādē XAMPP no [Apache Friends](https://www.apachefriends.org/index.html) mājaslapas.
2. Instalē XAMPP savā datorā.
3. Palaid XAMPP Control Panel un startē `Apache` serveri.
4. Novieto savus `.php` failus `htdocs` mapē, kas atrodas XAMPP instalācijas direktorijā.
5. Atver pārlūkprogrammu un dodies uz `http://localhost/` lai piekļūtu saviem PHP failiem.

### Instalācija ar PHP Development Server

1. Lejupielādē un instalē [PHP](https://www.php.net/downloads.php) savā datorā.
2. Atver komandrindu (Command Prompt vai Terminal).
3. Dodies uz direktoriju, kurā atrodas tavi PHP faili, izmantojot `cd` komandu.
4. Palaid PHP iebūvēto serveri ar komandu:
   ```
   php -S localhost:8000

   ```
5. Atver pārlūkprogrammu un dodies uz `http://localhost:8000/` lai piekļūtu saviem PHP failiem.

Var izmantot arī VS Code paplašinājumu `PHP Server`, kas ļauj palaist PHP serveri tieši no VS Code.

## Komentāru veidošana un teksta izdrukas

~~~php

// vienas rindas komentārs sākas ar slīmajām svītrām
/*
 Vairāku rindu komentārs
*/
<?php 

    echo "Informācijas izvade lapā";

?>
~~~

Ir arī īsais variants, ja nepieciešams izdrukāt vienu īsu vērtību. Var tikt izmantoti arī mainīgie.

~~~php

<?= "Īsais izdrukas veids" ?>

~~~

## Mainīgie

Visi mainīgie tiek definēti ar `$` zīmi. Mainīgā pieraksta beigās liek semikolu - `;`

~~~php

<?php

    $skaitlis = 0;
    $teksts = "Teksts";
    $status = True;
    $peldpunkts = 0.3;
    $masivs = array();

?>
~~~

## Masīvi

Vienkāršos masīvus definē:

~~~php

<?php

    $masivs = array("elements1","elements2","elements2");

    # Vai 

    $masivs = ["elements1","elements2","elements2"];

?>

~~~

Masīvu atslēgu sāk skaitīt no `0` un tas nozīmē, ka piekļūstot vārdam `elements1` būs jāizmanto `$masivs[0]`. Lai izvadītu informāciju no servera puses pie klienta jāizmanto komanda `echo`.

Piemērs. Tiek izdrukāts pirmais elements.

~~~php

<?php

    $masivs = array("elements1","elements2","elements2");

    echo $masivs[0];

?>

~~~

Lai redzētu katram elementa atslēgu masīvā var izmantot arī komandu `var_dump()` tā izvadīs visu masīvu ar to elementu atslēgām.

~~~php 
<?php

    $masivs = array("elements1","elements2","elements2");

    var_dump($masivs);

?>

~~~

Multidimensionālos masīvus definē to atslēgu, kas nav kārtas skaitlis masīvā.

~~~php
<?php

    $a = array("pirmais" => 1,"otrais" => 2);

?>

~~~

Izgūstot datus no māsīva varam izmantot atkal komandu, kura izsauc konkrētu masīva elemetu pēc tā atslēgas. Mēs ņemsim elementu "otrais".

~~~php

<?php

    echo $a['otrais'];

?>
~~~

Tāpat varam definēt masīvu iekš masīva atslēgas, proti, noglabāt vēl vienu masīvu zem konkrētas atslēgas.

~~~php

<?php

    $a = array("pirmais" => 1,"otrais" => array("elementatslega"=> 1234));

?>
~~~
Šeit esam definējuši vēl vienu masīvu zem atslēgas `otrais`. Kā iegūt šo elementu?

~~~php
<?php

    echo $a['otrais']['elementatslega'];

?>

~~~

## Nosacījumu veidošana

Lai veidotu nosacījumu, izmanto komandu `if`. Nosacījuma beigās lieto `{` un `}`. Nosacījumu liek parastajās iekavās.

Apskatīsim piemēru.

~~~php

<?php

    $a = 1;
    $b = 2;

    if($a > $b){
        echo $a . " ir lielāks nekā ". $b;
    }

?>

~~~

Ir iespējams arī izmantot `else if` un `else` komandas, lai veidotu papildu nosacījumus.
Šajā programmēšanas valodā ir svarīgi ievērot pareizu iekavu lietošanu, lai kods būtu saprotams un izpildāms.

~~~php

<?php

    $a = 1;
    $b = 2;

    if($a > $b){
        echo $a . " ir lielāks nekā ". $b;
    }else if($a == $b){
        echo $a . " ir vienāds ar ". $b;
    }else{
        echo $a . " ir mazāks nekā ". $b;
    }
?>

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

## Datu nogādāšana no klienta uz serveri

Lai nogādatu datus no klienta pie server tiek veikts datu nosūtīšanas process. Ir divi dažādi veidi kā veidot pieprasījumu uz serveri. `GET` un `POST`.



`POST` pieprasījumu pārlūka adresē redzēt nevar. Tiek izmantota `HTTP` galvene, kuru lietotājs neredz. Var tikt pārsūtīti dati uz serveri faila formātā.


![example image](/posttoserver.png)

Attēls www.tutorialrepublic.com

### Piemērs - datu nogādāšana uz serveri ar POST

Piedāvāju vienu kopēju failu, lai redzam kā tiek nogādāti dati no klienta pie servera ar `POST` metodi.

~~~php
<html>
    <head>
        <title>PHP piemērs</title>
    </head>
    <body>
        <?php
            if(isset($_POST["vards"])) {
                echo "Sveiks, ". $_POST['vards']. "!<br />";
            }
        ?>
        <form method = "POST">
            Vārds : <input type="text" name="vards" />
            <input type="submit" />
        </form>
    </body>
</html>
~~~

Ar birkām `<?php` un `?>` tiek norādīts, kur sākas un beidzas PHP kods. Pārējais ir HTML kods. Šo PHP kodu nerāda lietotājam, bet izpilda serveris. Ja lietotājs ir ievadījis vārdu, tad tiek izpildīts `if` nosacījums un tiek izdrukāts sveiciens ar ievadīto vārdu.

Idzrukas piemērs, ja lietotājs ievada vārdu `Jānis`

```
Sveiks, Jānis!

```

`POST` pieprasījums tiek izmantots, ja nepieciešams nogādāt lielu datu apjomu uz serveri vai nosūtīt sensitīvu informāciju, piemēram, paroles. To lietotājs neredz pārlūka adreses logā.

::: warning Uzmanību!

Ja savienojums starp klientu un serveri nav šifrēts (piemēram, izmantojot HTTPS), `POST` dati var tikt pārtverti un nolasīti trešās puses. Tāpēc ir svarīgi izmantot drošu savienojumu, lai aizsargātu sensitīvu informāciju.

:::

Piemērs ar autorizāciju, kad lietotājs ievada savu lietotājvārdu un paroli.

```php

<html>
    <head>
        <title>PHP autorizācijas piemērs</title>
    </head>
    <body>
        <?php
            if(isset($_POST["autorizeties"])) {
                $slepenais_vards = "abcd1234";
                $lietotajs = "lietotajvards";
                if( $_POST['parole'] == $slepenais_vards && $_POST['vards'] == $lietotajs) {
                    echo "Parole pareiza!<br />";
                } else {
                    echo "Parole nepareiza!<br />";
                }
            }
        ?>
        <form method = "POST">
            Vārds : <input type="text" name="vards" />
            Parole : <input type="password" name="parole" />
            <input type="submit" name="autorizeties" value="Autorizēties" />
        </form>
    </body>
</html>

```

Mainīgie `$slepenais_vards` un `$lietotajs` satur pareizo lietotājvārdu un paroli. Ja lietotājs ievada pareizo informāciju, tiek izdrukāts paziņojums "Parole pareiza!", pretējā gadījumā "Parole nepareiza!".

Šos mainīgos var arī glabāt datubāzē, lai nodrošinātu drošāku autorizācijas procesu. Tādā gadījumā tie nav vispār redzami koda failā - tā tam būtu jābūt. Mūsu piemērā ir izglītības nolūkos.

### Piemērs - datu nogādāšana uz serveri ar GET

`GET` pieprasījums adresē izskatās šādi: `http://www.test.com/index.php?name1=value1&name2=value2`. Ar šo veidu uz serveri nevar nogādāt failus. Mainīgie ir redzami pārlūka adreses logā.

```php

<html>
    <head>
        <title>PHP piemērs</title>
    </head>
    <body>
        <?php
            if( $_GET["autorizeties"]) {
                $slepenais_vards = "abcd1234";
                $lietotajs = "lietotajvards";
                if( $_GET['parole'] == $slepenais_vards && $_GET['vards'] == $lietotajs) {
                    echo "Parole pareiza!<br />";
                } else {
                    echo "Parole nepareiza!<br />";
                }
            }
        ?>
        <form method = "GET">
            Vārds : <input type="text" name="vards" />
            Parole : <input type="password" name="parole" />
            <input type="submit" name="autorizeties" value="Autorizēties" />
        </form>
    </body>
</html>

```
::: warning Uzmanību!

Šī metode ir ļoti nedroša, jo lietotājs var redzēt ievadītos datus pārlūka adreses logā. Tāpēc `GET` pieprasījumu nevajadzētu izmantot sensitīvu datu nosūtīšanai, piemēram, paroles vai personisko informāciju.

:::

Lietotājs var redzēt ievadītos datus pārlūka adreses logā, piemēram: <br>
`http://localhost:8111/?vards=ASD&parole=ASD&autorizeties=Autoriz%C4%93ties`

Šāda adrese saglabājas pārlūka vēsturē un var tikt redzēta citu personu, kas izmanto to pašu datoru.

`GET` pieprasījums ir piemērots, ja nepieciešams nosūtīt nelielu datu apjomu un ja dati nav sensitīvi, piemēram, meklēšanas vaicājumus vai filtrus.

## Objekti

PHP programmēšanas valodā ir iespējams definēt arī objektus un strukturēt tos klasēs. 

Tas ir veids kā strukturēt kodu, lai tas būtu labāks saprotams citiem programmētājiem un arī vieglāk lasāms.

Objektu definēšanu sāk sāk ar vārdu `class`, kas nozīmē klase, tad tiek definēts klases nosaukums. 

### Piemērs - tukša klase

~~~php
<?php

    class kermenis
    {
    
    }
?>

~~~

Tukša klase nevar pastāvēt tai noteikti ir nepieciešamas raksturojošās funkcijas, kuras veic darbību. Ir definēta klase `kermenis`, kurā definēsim trīs funkcijas `galva`, `veders`, `kajas`

~~~php
<?php

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
?>

~~~

### Klases izsaukšana

Lai izsauktu klasi jāizmanot vārds `new`, jo tādā veidā tiek definēta jauna klase. Piemērā izsauks funkciju ar nosaukumu `galva`


~~~php
<?php

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

?>

~~~
### Piemērs - kalulatora klase ar funkcijām

Apskatīsim piemēru ar kalkulatoru, kurš veic saskaitīšanu un atņemšanu.

~~~php

<?php

    class kalkulators
    {
        function saskaitit($a, $b)
        {
            return $a + $b; 
        }
        
        function atnemt($a, $b)
        {
            return $a - $b; 
        }
    }

    $calc = new kalkulators(); // Definējam klasi iekš mainīgā
    echo $calc->saskaitit(5, 3); // Izsaucam funkciju saskaitit un izdrukājam rezultātu
    echo "<br />";
    echo $calc->atnemt(5, 3); // Izsaucam funkciju atnemt un izdrukājam rezultātu
?>

~~~

Šajā piemērā tiek izmantots vārds `return`, kas nozīmē atgriezt vērtību. Funkcija `saskaitit` pieņem divus parametrus `$a` un `$b`, saskaita tos un atgriež rezultātu. Tāpat arī funkcija `atnemt` atņem otro parametru no pirmā un atgriež rezultātu. Rezultāti tiek izdrukāti, izmantojot `echo`. 

Ar `->` operatoru tiek piekļūts klases funkcijām.

Ar vārdu `return` tiek norādīts, ka funkcija atgriež vērtību, kuru var izmantot tālāk programmā. Tas palīdz, piemēram, saglabāt rezultātu mainīgā vai izmantot to citās funkcijās.

## Piemēri

### Vienkāršs kalkulators ar Bootstrap stila bibliotēku

~~~php

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP Kalkulatora piemērs</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
  <body>
    <h1>PHP Kalkulatora piemērs</h1>
    <?php 
        if(isset($_POST['darbiba'])) {
            $atlautas_darbibas = ['saskaitit', 'atnemt', 'reizinat', 'dalit'];
            if(!in_array($_POST['darbiba'], $atlautas_darbibas)) {
                echo "<div class='alert alert-danger' role='alert'>Nederīga darbība!</div>";
            }else{
                $skaitlis1 = $_POST['skaitlis1'];
                $skaitlis2 = $_POST['skaitlis2'];
                $darbiba = $_POST['darbiba'];
                if(!is_numeric($skaitlis1) || !is_numeric($skaitlis2)) {
                    echo "<div class='alert alert-danger' role='alert'>Ievadītajiem datiem jābūt skaitļiem!</div>";
                }else{
                    $rezultats = 0;

                    switch($darbiba) {
                        case 'saskaitit':
                            $rezultats = $skaitlis1 + $skaitlis2;
                            break;
                        case 'atnemt':
                            $rezultats = $skaitlis1 - $skaitlis2;
                            break;
                        case 'reizinat':
                            $rezultats = $skaitlis1 * $skaitlis2;
                            break;
                        case 'dalit':
                            if($skaitlis2 != 0) {
                                $rezultats = $skaitlis1 / $skaitlis2;
                            } else {
                                echo "<div class='alert alert-danger' role='alert'>Dalīšana ar nulli nav atļauta!</div>";
                            }
                            break;
                    }
                    echo "<div class='alert alert-success' role='alert'>Rezultāts: $rezultats</div>";
                }
                 
            }
            
             
        }
    ?>
    <form method="post">
        <div class="container">
            <div class="mb-3">
                <label for="skaitlis1" class="form-label">Skaitlis 1</label>
                <input type="number" class="form-control" id="skaitlis1" name="skaitlis1" required>
            </div>
            <div class="mb-3">
                <label for="skaitlis2" class="form-label">Skaitlis 2</label>
                <input type="number" class="form-control" id="skaitlis2" name="skaitlis2" required>
            </div>
            <div class="mb-3">
                <label for="darbiba" class="form-label">Darbība</label>
                <select class="form-select" id="darbiba" name="darbiba" required>
                    <option value="saskaitit">Saskaitīt</option>
                    <option value="atnemt">Atņemt</option>
                    <option value="reizinat">Reizināt</option>
                    <option value="dalit">Dalīt</option>
                </select>

            </div>
            <button type="submit" class="btn btn-primary">Aprēķināt</button>
        </div>
        
    </form>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  </body>
</html>

~~~

Svarīgās komandas un funkcijas, kuras tika izmantotas šajā piemērā:

| Komanda/Funkcija | Apraksts    | Piemērs  |
|:-----|:------------|:------------|
| isset   | Pārbauda vai mainīgais ir definēts     |  isset($_POST['darbiba'])        |
| in_array   | Pārbauda vai vērtība ir masīvā | in_array($_POST['darbiba'], $atlautas_darbibas)     |
| is_numeric    | Pārbauda vai vērtība ir skaitlis     | is_numeric($skaitlis1) |
| switch   | Veido nosacījumu ar vairākiem gadījumiem    | switch($darbiba) { ... } |

::: warning Drošība!

Nekad neuzticieties lietotāja ievadītajiem datiem! Vienmēr pārbaudiet un attīriet datus pirms to izmantošanas jūsu programmā, lai novērstu drošības riskus.

HTML formā datus var mainīt, piemēram, izmantojot Inspect Element funkciju pārlūkprogrammā. Tāpēc ir svarīgi veikt datu validāciju servera pusē, ne tikai klienta pusē.
Piemēram, lietotājs ievades laikā izmaina ievades lauka tipu no `number` uz `text`, tādā veidā ievadot burtus, kas var izraisīt kļūdas jūsu programmā.  

:::


### Servera puses izsaukums uz citu lapu ar FILE_GET_CONTENTS

~~~php

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP Kalkulatora piemērs</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
  <body>
    <h1>Suņu bildes API</h1>
        <div class="container">
            <?php 
                $dati = file_get_contents('https://dog.ceo/api/breeds/image/random');
                $dati_json = json_decode($dati, true);
                if($dati_json['status'] == 'success'){
                    echo '<img src="' . $dati_json['message'] . '" alt="Random Dog Image" style="max-width:300px;"><br>';
                }else{
                    echo '<div class="alert alert-danger">Neizdevās ielādēt suņa bildi.</div>';
                }
            ?>
            <button class="btn btn-primary mt-3" onclick="location.reload();">Ielādēt jaunu suņa bildi</button>
        </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  </body>
</html>

~~~

Svarīgās komandas un funkcijas, kuras tika izmantotas šajā piemērā:

| Komanda/Funkcija | Apraksts    | Piemērs  |
|:-----|:------------|:------------|
| file_get_contents   | Nolasa datus no norādītā URL vai faila     |  file_get_contents('https://dog.ceo/api/breeds/image/random')        |
| json_decode   | Dekodē JSON datus uz PHP masīvu vai objektu | json_decode($dati, true)     |

::: warning Drošība!

Lietojot `file_get_contents` ar ārējiem URL, pārliecinieties, ka uzticaties avotam, jo ļaunprātīgi URL var radīt drošības riskus jūsu serverim.
Atceries, ka šī funkcija var būt atspējota dažos serveros drošības apsvērumu dēļ. Ja tā ir atspējota, varat izmantot citu metodi, piemēram, `cURL`, lai iegūtu datus no ārējiem avotiem.

:::


## Papildus resursi

- [PHP.net](https://www.php.net/)
- [PHP in 2020](https://stitcher.io/blog/php-in-2020)
- [Laravel](https://laravel.com/)
- [What Is PHP? - John Morris](https://www.youtube.com/watch?v=mBL9Athx7ms&ab_channel=JohnMorris)
- [TIOBE index PHP valodai](https://www.tiobe.com/tiobe-index/php/)
- [Flight ietvars](https://docs.flightphp.com/lv/v3/)

