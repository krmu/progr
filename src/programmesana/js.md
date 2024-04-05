---
title: Javascript
order: 5
---
## Lietošana

JavaScript lieto, lai mājas lapai piešķirtu dinamiku un interaktivitāti.

![html-css-js](/html-css-js.png)

Izmantotais attēls: edureka.co

Lai sāktu mājaslapā rakstīt Javascript kodu jālieto `<script type="application/javascript"></script>` birkas. 

Var izmantot arī vienkāršo variantu `<script></script>`

Piemērs:

~~~html

<script type="application/javascript">

</script>

~~~

Vai - otrs variants.

~~~html

<script>
    
// Javascript kods

</script>

~~~

Lai iekļautu savā lapā ārējo Javascript kodu:

`<script src="mansskripts.js"></script>`

`<script>` tagu vēlams ievietot body bloka beigās! 

Ārējie Javascript faili var tikt uzturēti uz cita servera. Ja skripts uz ārējā servera tiek noņemts, tad arī vietnē netiks ielādēts šis fails.

Galvenā atšķirība starp koda glabāšanu lapā un ārējā failā ir tāda, ka ārējo failu pārlūkprogramma var kešot, tāpēc, ja kods tiek mainīts, tad var rasties problēmas ar jaunākā koda ielādi.

Kešot - saglabāt datus, lai nākamreiz tos varētu ātrāk ielādēt. Pārlūks glabā informāciju par kešotajiem failiem un jaunākās versijas ielādē tikai tad, ja ir mainījies fails.

Lai izvairītos no kešošanas, var pievienot faila nosaukumam unikālu skaitli, piemēram, `mansskripts.js?versija=1`.

Brīdī kad tiek ielādēts fails, pārlūkprogramma neskatās uz faila saturu, bet uz faila nosaukumu. Ja nosaukums ir mainīts, tad pārlūkprogramma uzskata, ka tas ir jauns fails un ielādē to no jauna.

## Komentāri kodā

Komentāri kodā ir svarīgi, lai citi programmētāji varētu saprast, kas ir kodā rakstīts. Komentāri ir koda daļa, kas netiek izpildīta.

~~~js

alert("Paziņojuma lodziņš");

// Vienas rindas komentārs
/*
Vairāku 
rindu 
komentārs
*/

~~~

## Brīdinājumi konsolē

Programmētājs, lai atkļūdotu savu kodu, var veidot dažādus paziņojumus konsolē. Konsole parādās, ja lietotājs pārlūkā nospiež labo peles klikšķi un tad izvēlas `Inpect` -> `Console` vai ar taustiņu kombināciju `Ctrl + Shift + J`.

Ir trīs veida paziņojumi.


Informatīvais - informē par kādu koda darbības posmu.

Kļūda - parasti kļūdu veida paziņojumi, tiek izmantots arī sintakses kļūdu gadījumos.

Parasts paziņojums - parasts teksts konsolē.


Visi trīs paziņojumi attēloti bildē.

::: tabs

@tab Kods 

~~~js

console.log("Parasts teikums konsolē");
console.warn("Brīdinājums konsolē");
console.error("Kļūda konsolē");

~~~

@tab Iznākums

![example image](/js_konsoles_pazinojumi.png)
 
:::

## Mainīgie

Mainīgie ir vērtības, kas var tikt izmantotas vairākas reizes kodā. Mainīgajam var piešķirt vērtību un to izmantot kodā.

Mainīgajiem nav jāpieraksta to veids, bet mainīgo nosaukumam priekšā jāraksta vārdu `let`.

Ir diezgan svarīga atšķirība, jo literatūrā parādās apzīmējums `var`, bet šis apzīmējums ir novecojis un to vairs neizmanto. 

Tiek izšķirti divi mainīgo veidi - skaitliskie un tekstuālie. Papildus ir masīvi un JSON objekti.

Piemērs:
~~~js

let x = 1; // Skaitlisks mainīgais

let vards = "Mans vārds ir Pēteris"; // Tekstuāls mainīgais

let atzimes = [1,2,3,4,5]; // Skaitlisks masīvs

let teksta_masivs = ["Krūmi", "Koks", "Stabs"]; // Tekstuāls masīvs

~~~

Skaitliskos mainīgos no tekstuālajiem mainīgajiem atšķir ar pēdiņu lietojumu. Decimālie skaitļi tieši tāpat tiek pierakstīti kā veselie skaitļi,bet izmanto punktu tam paredzētajā vietā.

Daži piemēri skaitliskajiem mainīgajiem.

~~~js
let x = 1;
let maingaisviens = 1124123;
let pi = 3.14159265359;
~~~

Tekstuālos mainīgos pievieno ar pēdiņām. Tekstu raksta starp pēdīņām.

~~~js

let garss_teksts = "Javscript ir programmēšanas valoda, bet HTML nav.";

~~~

### Mainīgo sasaiste

Mainīgos var saistīt kopā, lai iegūtu jaunu mainīgo.

~~~js

let x = 1;
let y = 2;
let z = x + y;

~~~

Šajā piemērā mainīgais `z` ir vienāds ar `3`, jo `x` un `y` ir saistīti kopā. Tā kā šie abi mainīgie ir skaitlis, tad tiek veikta matemātiska darbība.

Piemērs ar tekstuāliem mainīgajiem.

~~~js

let vards = "Mans vārds ir ";
let uzvards = "Pēteris";

let pilns_vards = vards + uzvards;

~~~

Šajā piemērā mainīgais `pilns_vards` ir vienāds ar `Mans vārds ir Pēteris`, jo `vards` un `uzvards` ir saistīti kopā, tie ir teksti un tiek apvienoti, nav iespējams veikt matemātisko darbību.

Ja tiek saistīti kopā skaitliskie un tekstuālie mainīgie, tad skaitliskie mainīgie tiek pārveidoti par tekstuāliem.

~~~js

let vards = "Mans vārds ir ";
let vecums = 30;

let pilns_vards = vards + vecums;

~~~

Šajā piemērā mainīgais `pilns_vards` ir vienāds ar `Mans vārds ir 30`, jo `vards` ir teksts un `vecums` ir skaitlis, bet skaitlis tiek pārveidots par tekstu.

## Masīvi

Masīvus pielieto, lai apvienotu vairākus mainīgos vienā.  Skatām piemēru.

~~~js

let pirmais = 1;
let otrais =  2;
let tresais  = 3; 

~~~

Ir redzams, ka tiek veidoti 3 mainīgie. Šos trīs mainīgos varam apvienot vienā masīvā.

Masīvā katru elementu raksta atdalot ar komatu. Sāk rakstīt ar `[` un noslēdz ar `]`

~~~js

let skaitli = [1,2,3];

~~~

Iepriekš, lai izmantotu mainīgo, rakstījām tā vārdu,bet izmantot masīva konkrētos elementus var, saucot tā nosaukumu un kvādrātiekavās tā indeksu.

Indekss - elementa kārtas skaitlis masīvā. Masīvā indeksus sāk skaitīt no 0.

Ja mēs gribam iegūt no masīva, ar nosaukumu `skaitli`, trešo elementu, kurš vienāds ar `3`, tad raksta komandu `skaitli[2]`. 

Tieši tāpat kā notiek skaitlisko masīvu veidošana, tiek veidoti arī tekstuālie. Piemērā dots masīvs ar skolas priekšmetu nosaukumiem.

~~~js

let prieksmeti = ["Latviešu valoda","Sports","Programmēšana","Datorika","Matemātika"];

~~~

Lai iegūtu programmēšanas priekšmetu no masīva, raksta komandu `prieksmeti[2]`, jo šis elements masīvā (skaitot no 0 indeksa) ir otrais.

Masīvos var tikt miksēti tekstuālie elementi un skaitliskie elementi.

~~~js

let prieksmeti = ["Latviešu valoda",1,"Programmēšana",3,6543];

~~~

## JSON

JSON jeb JavaScript Object Notation ir datu turēšanas veids. Veids kā var tikt strukturēti dati objektā. JSON formāts ļauj drošā struktūrā pārsūtīt datus no klienta uz serveri konkrētā formātā.

Piemērs:

~~~js 

{
	"skoleni":[
		{"vards":"Jānis", "uzvards":"Koks", vecums: 12},
		{"vards":"Anna", "uzvards":"Stabiņa"}
	]
}
~~~

Šādā veidā var strukturēt datus JSON objektā. 

Kā izmantot šādus datus?

~~~js
let obj = JSON.parse('{ "vards":"Valērijs Visvaris", "vecums":30, "pilseta":"Rīga"}');
// Lai iegūtu datus no šī objekta izmanto mainīgā nosaukumu un atslēgu:

alert(obj.vards + ", " + obj.pilseta);

// Paziņojumā tiks paziņots vārds un pilsēta.

~~~

Ja mums ir vairāki elementi objektā:

~~~js
let obj = JSON.parse('[ { "vards":"Valērijs Visvaris", "vecums":30, "pilseta":"Rīga"},{ "vards":"Anna Bauma", "vecums":12, "pilseta":"Rīga"} ]');
for (let i=0; i < obj.length; i++) {
    console.log(obj[i].vards);
}
~~~

Konsolē tiks izdrukāti visi elementi objektā ar atslēgu `vards`.

Ja ir vairāki kā viens elements objektā, objekts sākas ar [ un  beidzas ar ], jo tas ir masīvs.

## Loģiskie operatori

Loģiskie operātori ļauj pārbaudīt vai tiek izpildīts nosacījums. Nosacījumu veidošana ir apskatīta zemāk.

| Operators | Apraksts    | Piemērs  |
|:-----|:------------|:------------|
| ==   | Vienāds     |  4 == 4        |
| ===   | Vienāds     |  4 === 4        |
| !=   | Nav vienāds | 4  != 3     |
| !==   | Nav vienāds | 4  !== 3     |
| >    | Lielāks     | 4 > 3|
| >=   | Lielāks vienāds       |  |
| <    | Mazāks       | 4 < 5 |
| <=   | Mazāks vienāds |  |
| &&   | Un (and)    | 4 && 4 |
| &#124;&#124; | vai (or)	 | saldējums vai medus |

Vairāk: https://www.w3schools.com/js/js_operators.asp

Par "===" un " == " skatīt zemāk.

## Nosacījumu veidošana


Javascript programmēšanas valodā nosacījums tiek veikts ar vārdu `if` un nosacījumu darbības atdala ar figūriekavām.

~~~js
if( nosacījums ){

    Darbība

}else{

    Pretēja darbība
}
~~~
Gadījumos, ja ir vairāku nosacījumu pārbaude:

~~~js
if( nosacījums ){

    Darbība

}else if( nosacījums ){

    Darbība

}else{

    Pretēja darbība

}
~~~

### Piemērs nr.1 - viens nosacījums:

~~~js
let x = 0; // Mainīgais x ir vienāds ar vērtību 0
let y = 5; // Mainīgais y ir vienāds ar vērtību 5

if ( x === 5){

    alert("X ir vienāds ar 5");

}else{

    alert("X nav vienāds ar 5");

}

~~~
### Piemērs nr.2 - divi nosacījumi:

~~~js
let x = 0; // Mainīgais x ir vienāds ar vērtību 0

if (x > 0 && x <= 10){ // Tiek pārbaudītas divas loģiskās izteiksmes uzreiz.
    // Tiek pārbaudīts vai x ir lielāks par 0 un mazāks par 10 (ieskaitot) vienlaicīgi
    alert("X ir lielāks par 0 un mazāks par 10");
}else if (x > 10){
    // Tiek pārbaudīts vai x ir lielāks par 10
    alert("X ir lielāks par 10");
}else{
    // Ja neviens no nosacījumiem nav izpildījies
    alert("X ir mazāks par 0");
}
~~~

### Piemērs nr.3 - salīdzina ar tekstu:

~~~js
let skolens = "Visvaldis"; // Mainīgais skolens ir vienāds ar tekstu "Visvaldis"

if(skolens == "Visvaldis"){
    alert("Skolens ir vienāds ar tekstu Visvaldis");
}else{
    alert("Skolens nav vienāds ar tekstu Visvaldis");
}
~~~

Šeit nav svarīga stingrā vienādība, jo teksts nevar skaitlis. Tāpēc šeit tiek izmantots `==` apzīmējums.

::: caution Svarīgi!

Javascript programmēšanas valodā tiek lietots vienādības apzīmējums ar 3 vienādības zīmēm `===` un divām.<br>
Atšķirība ir tāda, ka `===` pārbauda arī mainīgo tipu, bet `==` nē.

::: 

 
Piemēram doti divi mainīgie:

~~~js
let x = 5; //  Šis ir skaitlis
let x_tekstuals = "5"; // Šis ir teksts, bet tā vērtība ir skaitlis 5 - noformēts kā teksts!
if(x == x_tekstuals){

    console.log("Šie ir vienādi, ja ignorē mainīgo tipu");
    // Šis nostrādā, jo 5 kā skaitlis ir vienāds ar 5 kā tekstu.
}

if (x === x_tekstuals){
    
    console.log("Šie ir vienādi, ja svarīgs ir mainīgo tips!");
    // Šis nenostrādā, jo mainīgo tipi ir atšķirīgi - viens ir teksts otrs ir skaitlis.
}else{
    console.log("Šie nav vienādi, jo mainīgo tipi ir atšķirīgi!");
    // Šis nostrādā, jo mainīgo tipi ir atšķirīgi un šis ir pretējs nosacījums.
}
~~~

## Cikli

### For cikli

Javascript programmēšanas valodā ir divu veidu cikli `for` un `while`.

`For` ciklu lieto gadījumos, kad ir vajadzīgs cikla skaitītājs un ciklam ir noteikts galapunkts un/vai sākumpunkts.

Pielietojums:

~~~js
for( SĀKUMA VĒRTĪBA; PILDĪT KAMĒR; SOLIS){

    Darbība;

}
~~~~


Piemērā dots noteiktais cikls, kura sākuma vērtība ir 0 un tā tiek glabāta mainīgajā `sk`. Cikls tiek pildīts kamēr `sk` ir mazāks par 10 un katrā cikla solī `sk` tiek palielināts par 1.

`sk` - sevī satur cikla skaitītāju. Katru reizi tas palielinās par vienu vienību, to nosaka `sk++`.
`sk++` - tas ir tas pats, kas `sk = sk + 1`.

::: tabs

@tab Kods

~~~js
for( let sk = 0; sk< 10; sk++ ){

    console.log(sk); // Konsolē tiks izvadīts skaitlis intervālā no 0 līdz 9

}
~~~
@tab Iznākums
![for_cikls1](/for_cikls_1.png)
:::


Ir iespējams arī mainīt cikla sākuma vērtību un soli.

::: tabs

@tab Kods
~~~js
for( let sk = 10; sk> 0; sk-- ){

    console.log(sk); // Konsolē tiks izvadīts skaitlis intervālā no 10 līdz 1

}
~~~
@tab Iznākums
![for_cikls1](/for_cikls_2.png)
:::

Šim ciklam ir iespējams mainīt soli, lai cikls skaitītu katru otro skaitli.

::: tabs

@tab Kods   

~~~js
for( let sk = 0; sk< 10; sk+=2 ){

    console.log(sk); // Konsolē tiks izvadīts skaitlis intervālā no 0 līdz 8

}
~~~

@tab Iznākums
![for_cikls1](/for_cikls_3.png)

:::

Varam arī izmantot cikla skaitītāju, lai to parādītu lapā mums saprotamā formātā.

~~~js

for( let sk = 0; sk< 10; sk++ ){

    document.write(sk + ".elements <br>"); // Izmantojot document.write, skaitītājs tiks izvadīts lapā

}

~~~

### For in un For of cikli

JavaScript valodā pastāv vēl divi īpaši `for` cikla veidi, tie ir `for in` un `for of`.

Lai labāk saprastu, kā tie strādā, apskatīsim piemēru...
::: tabs

@tab Kods

~~~js
let draugi = ["Emīls", "Juris", "Reinis", "Dace"];
for (indekss in draugi) {
    console.log(draugi[indekss]);
}
~~~

@tab Iznākums

![for_of](/for_cikls_4.png)

:::

Piemērā nodefinēts masīvs, kurā, izmantojot `for in` ciklu ar skaitītāju `indekss`, caurskata visas vērtības un izdrukā tās konsolē.

Izdarīsim to pašu ar `for of` ciklu...

::: tabs

@tab Kods

~~~js
let draugi = ["Emīls", "Juris", "Reinis", "Dace"];
for (draugs of draugi) {
    console.log(draugs);
}
~~~
@tab Iznākums

![for_of](/for_cikls_4.png)

:::

Šeit cikla skaitītājs satur nevis indeksu, bet jau pašu masīva elementu. 

Šo paņēmienu ērti pielietot, caurskatot atlasītus HTML elementus, piemēram, tabulas rindas.

~~~js
let rindas = document.getElementById("tabula").rows;
for (row of rows) {
    //...darbība katrai rindai...
}
~~~
### While cikli

Javascript programmēšanas valodā ir divu veidu cikli `for` un `while`.

`While` ciklu lieto gadījumos, kad nav vajadzīgs cikla solis un cikls tiek pildīts līdz konkrētai darbībai.

Pielietojums:
~~~js
while( NOSACĪJUMS ){

    Darbība;

}
~~~
Piemērs:

~~~js 
let pildi = true;

while(pildi == true){

    console.log("Šī darbība notiek kamēr vien mainīgais PILDI ir vienāds ar TRUE");

}
~~~


## Elementu pievienošana lapā

Elementu izveido ar `document.createElement([birka])`

~~~js

let virsraksts = document.createElement("h1");

~~~
Pēdiņās raksta elementa birkas nosaukumu, piemēram, `h1`, `p`, `div` utt.

Lai tas būtu redzams, elementu jāpievieno body blokam ar `appendChild([elements])`

~~~js

document.body.appendChild(virsraksts);

~~~

### Piemērs

Ja vēlamies ar Javascript palīdzību uztaisīt dizainētu `div` birku, tad izmantosim šādu kodu:

~~~js


let jauns_div = document.createElement("div");
jauns_div.style.backgroundColor = "red"; // uzliekam fona krāsu uz sarkanu
jauns_div.style.width = "100px"; // uzliekam platuma izmēru
jauns_div.style.height = "100px"; // uzliekam augstuma izmēru
jauns_div.style.border = "1px solid black"; // uzliekam apmales biezumu un krāsu
jauns_div.style.margin = "10px"; // uzliekam atstarpi no citiem elementiem
jauns_div.style.padding = "10px"; // uzliekam iekšējo atkāpi
jauns_div.style.textAlign = "center"; // uzliekam teksta centēšanu
jauns_div.style.color = "white"; // uzliekam teksta centēšanu
jauns_div.innerHTML = "Šis ir mana apgabala saturs!"; // uzliekam tekstu
document.body.appendChild(jauns_div); // pievienojam body blokam

~~~
Iznākums:

![Izveidots div elements](/piemers_html_jaunsElements.png)


## Lokālā krātuve (localStorage)

---

![cookie-local-session](/cookie-local-session.png)
Attēls: loginradius.com

Jau noskaidrojām, ka mainīgie datus glabā tikai īslaicīgi un, aizverot lapu, savas vērtības pazaudē. Tāpēc lieto lokālo krātuvi...

Tā darbojas līdzīgi kā sīkdatnes un ir piesaistīta konkrētai mājas lapai, taču pieejams daudz lielāks atmiņas apjoms līdz pat 10MB un dati glabājas JSON formātā.

Dati no lokālās krātuves tiek dzēsti, notīrot parlūkošanas vēsturi pārlūkprogrammā visā periodā.

Apskatīsim, kā saglabāt datus lokālā krātuvē.

~~~js
localStorage.setItem("apmekletajs", "Ilze");
~~~

Lokālā krātuvē ērti saglabāt dažādus lapas iestatījumus, piemēram, izvēlēto valodu

~~~js
localStorage.setItem("valoda", "Eng");
~~~

Lai nolasītu vērtību, lieto `getItem()`

~~~js
var valoda = localStorage.getItem("valoda");
~~~

Vērtību dzēš ar `removeItem()`

~~~js
localStorage.removeItem("valoda");
~~~

Visu lokālo krātuvi dzēš ar `clear()`

~~~js
localStorage.clear();
~~~

---

### Sesijas krātuve (sessionStorage)

Sesijas krātuve darbojas ļoti līdzīgi, bet tajā dati saglabājas tikai sesijas laikā. Aizverot cilni vai pārlūkprogrammu, tie dzēšas.

## Elementu atlase lapā

Lai atlasītu kādu elementu dokumentā pēc tā identifikatora izmanto:

Ieteicams identifikātorus lapā turēt unikālus!


~~~js

let vertiba = document.getElementById("identifikators");

~~~

Kur vārda `identifikators` lieto unikālo identifikatoru. HTML birkā to raksta: `id="identifikators"`

Lai atlasītu kādu elementu dokumentā pēc tā klases izmanto:

Klases elementiem lapā var atkārtoties

~~~js

let vertiba = document.getElementsByClassName("manaklase");

~~~

Kur vārda `manaklase` lieto elementa  `Class` identifikatoru. HTML birkā to raksta: `class="manaklase"`

### Elementu satura, krāsas maiņa ar Javascript

Lai mainītu kāda elementa dizainu un saturu, izmanto:

~~~js

let elements = document.getElementById("identifikators");
elements.innerHTML = "Jauns saturs"; // Šis samaina HTML elementa saturu.

let elements = document.getElementById("identifikators");
elements.style.color = "green"; // Uzliek tekstam zaļu krāsu

~~~
### HTML atribūtu iestatīšana

Iedomāsimies, ka atlasītais elements ir kā objekts un atribūti ir tā īpašības

`innerHTML` ir elementa attēlojamais teksts

~~~js
let rindkopa = document.getElementById("rindkopa");
rindkopa.innerHTML = "Es esmu rindkopa!";
~~~

Apskatīsim piemēru, kā klikšķis uz pogas maina tās tekstu

~~~html
<button id="poga" onclick="mainaTekstu()">Spied šeit!</button>
~~~

~~~js
function mainaTekstu() {
    let poga = document.getElementById("poga");
    poga.innerHTML = "Hey!";
}
~~~

Izmēģini darbībā!  
<button style="padding:5px; border:1px solid black;" id="poga" onclick="let poga = document.getElementById('poga'); poga.innerHTML = 'Hey!';">Spied šeit!</button>

Lai paslēptu elementu, tam iestata atribūtu `hidden = true`

Ar `disabled = true` elementu padara neaktīvu, piemēram, neaktīva poga vairs nereaģēs uz klikšķiem

Atribūtus `width` un `height` pielieto attēliem un `div` blokiem

## Funkcijas

### Funkciju veidi pēc to darbības veidiem

Javascript programmēšanas valodā ir iespējams definēt funcijas, lai universālu kodu izmantotu atkārtoti.

Funkcijas var veikt divu veidu darbības.
1. Veikt darbību un neko neatgriezt atpakaļ, piemēram, nomaina lapai fonu.
2. Veikt darbību un atgriezt kādu vērtībum,piemēram, aprēķināt skaitli, tad izmanto vārdu `return`.

### Funkciju lietojums

Funkcijas sāk rakstīt ar vārdu `function`, tad seko funkcijas nosaukums un iekavās tās parametri.

Svarīgi! Nosaucot funkcijas, nedrīkst lietot: garumzīmes, mīkstinājuma zīmes, atstarpes. Funkcijas ir reģistrjūtīgas(lielie un mazie burti ir svarīgi).

~~~js
function nosaukums( MAINĪGAIS, MAINĪGAIS, MAINĪGAIS utt.){

  // DARBĪBA

}
~~~ 

Ja funkcijas darbības rezultātā ir jāatgriež vērtība, tad lieto `return`.

~~~js
function ( MAINĪGAIS, MAINĪGAIS, MAINĪGAIS utt.){

    return vērtība;

}
~~~ 

Apskatīsim funkcijas piemēru. Funkcijai `saskaiti` tiek padoti līdzi divi parametri kā funkcijas argumenti, kuri jāsaskaita un jāatgriež atpakaļ to summa. Funckijas argumenti nosaukti kā `a` un `b`.

```js

function saskaiti(a,b){
  return a + b;
}

saskaiti(1,2); // Tiek izsaukta funkcija

```

Ar rindas `saskaiti(1,2);` palīdzību, tiek izsaukta funkcija `saskaiti` un tās argumentos līdzi iedoti skaitļi `1` un `2`. Tā kā rezultāts netiek ielādēts vai izdrukāts lapā, tad rezultāts nav vizuāli redzams. 

Lai iegūtu redzamu rezultātu, piesaistīsim funkcijas rezultātam mainīgo.

```js

function saskaiti(a,b){
  return a + b;
}

var rezultaats = saskaiti(1,2); // Tiek izsaukta funkcija

console.log(rezultaats);

```

Mainīgajā `rezultaats` tiek ielādēts funkcijas `saskaiti(1,2)` izpildes iznākums. 

Otrs piemērs ir veikt darbību funkcijā un uzreiz izvadīt tās rezultātu. Funkcijai `izvadi_konsolee` ir pievienots parametrs `vards`. 
Funkcijas iekšienē uzreiz tiek veikta darbība.
Mainīgais, kurš ir fukcijas parametrs, tiek sasaistīts ar statisku tekstu (`ir iedotais funkcijas parametrs.`) un izvadīts konsolē.
Šādā gadījumā nav vajadzīgs mainīgais, kuram piesaista funkcijas iznākumu.

```js

function izvadi_konsolee(vards){
  console.log(vards+" ir iedotais funkcijas parametrs.");
}

izvadi_konsolee("Tests"); // Izvade: Tests ir iedotais funkcijas parametrs.

izvadi_konsolee(1234); // Izvade: 1234 ir iedotais funkcijas parametrs.


```

## AJAX 

AJAX jeb Asynchronous JavaScript and XML ir veids kā mājaslapā iegūt informāciju lapu nepārlādējot tādējādi ietaupot servera resursus. AJAX ļauj nomainīt saturu mājaslapas elementā lapu nepārlādējot. Piemēram, nomaina tabulas saturu klientam nospiežot pogu vai meklētājs, kurā lietotājs ieraksta vārda daļu un serveris atgriež atpakaļ visus ierakstus, kuri atbilst šim vaicājumam.


AJAX nav programmēšanas valoda.



AJAX pieprasījumus var veidot izmantojot `jQuery` bibliotēku vai bez tās.

Pirmais piemērs bez.

~~~js
let xhttp = new XMLHttpRequest(); // Tiek definēta metode, kura tiks izmantota
  xhttp.onreadystatechange = function() { // Kad metode ir gatava jeb ielādēta tiek izpildīda funkcija
    if (this.readyState == 4 && this.status == 200) { // Ja funckija ir veiksmīga un statusa kods ir 200, kas nozīme OK
      document.getElementById("demo").innerHTML = this.responseText; // Dokumenta elementā `demo` tiek ielādeta atbilde no faila 
    }
  };
  xhttp.open("GET", "ajax_info.txt", true); // Izpilda `GET` pieprasījumu uz failu ajax_info.txt
  xhttp.send();
~~~

Otrais piemērs, izmantojot `jQuery` bibliotēku.


Pirms izmantot šo piemēru, lapā jābūt ielādētai Jquery bibliotēkai. [jQuery](https://jquery.com/)



Ielāde lapas galvenē.
~~~html

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
~~~

Pats pieprasījums

~~~js

$.ajax('https://manaadrese.nav/getdata',   // Pieprasījuma adrese
    {
        success: function (data, status, xhr) {//  Atbilde, ja pieprasījums ir veiksmīgs
            $('p').append(data); // Atrodam lapā paragrāfu un pievienojam iegūtos datus
         }
    });

~~~
## Sīkdatnes

Sīkdatnes (cookies) ļauj datorā saglabāt mazas datu vienības par mājas lapas apmeklētāju.

Var teikt, ka sīkdatne ir mazs fails pārlūkprogrammas kešatmiņā, kas satur parametrus un to vērtības.

Apskatīsim piemēru...

~~~js
document.cookie = "lietotajs=Andris";
~~~

Piemērā redzams, kā sīkdatnē iestata lapas apmeklētāja vārdu.

Noklusēti sīkdatnes tiek dzēstas, aizverot pārlūkprogrammu, bet iespējams definēt arī sīkdatnes derīguma termiņu.

~~~js
document.cookie = "lietotajs=Andris; expires=Wed, 10 Nov 2021 12:00:00 UTC; path=/;";
~~~

Parametrs *path* norāda noklusēto ceļu uz mājas lapas direktoriju.

Lai dzēstu sīkdatni, tai iestata atpakaļejošu datumu.

## jQuery

jQuery ir Javascript papildus bibliotēka, kuru var izmantot, lai saīsinātu savu kodu, tāpat dažas funkcijas ir lietojamas ar īsāku pierakstu un vieglāk iegūstams rezultāts.

Apskatīsim piemērus.


Javascript valodā atlasām elementu.

Javascript bez jQuery:

~~~js

let vertiba = document.getElementById("identifikators");

~~~
Javascript izmantojot jQuery:

~~~js

let vertiba = $("$identifikators");

~~~


Javascript valodā atlasām elementa vērtību lapā jeb ievades lauciņa vērtību.

Javascript bez jQuery:
~~~js

let vertiba = document.getElementById("identifikators").value;

~~~
Javascript izmantojot jQuery:

~~~js

let vertiba = $("#identifikators").val();

~~~

## Praktiski piemēri

### Paziņojuma lodziņš

Pārlūkos ir iespējams izveidot paziņojuma lodziņu vēl angļu valodā to sauc par `alert` lodziņu.

::: tabs

@tab Kods

~~~js

alert("Paziņojuma saturs");

~~~

@tab Iznākums

![html1](/js_alert.jpg)

:::

### Ievades lodziņš

`prompt()` darbojas līdzīgi kā `alert()`, bet ļauj ievadīt arī, piemēram, vārdu.

::: tabs

@tab Kods

~~~js

let vards = prompt("Ievadu savu vārdu!");

~~~
@tab Iznākums

Ievadītais vārds saglabājas mainīgajā `vards`, kuru var izmantot, piemēram, izvadot sveicienu lappusē.

![prompt](/prompt.jpg)
:::

### HTML ievades lauciņa nolasišana

Ar Javascript progr. valodu ir iespējams arī nolasīt ievades lauciņu vērtības. Mēs definēsim teksta ievades lauciņu un paziņojumā izvadīsim tā saturu.
::: tabs

@tab Kods

~~~html

<label>Ievade: </label><input type="text" id="ievades_lauks">

<button onclick="nolasi();"></button>

~~~

@tab Iznākums

![html1](/js_alert2.jpg)

:::

Tika definēti 3 elementi lapā. `label` - elements, kurš kalpo kā skaidrojums ievades lauciņam.
`<input type="text" id="ievades_lauks">` - tekstuāls ievades lauks, kura `type` atribūtā ir pateikts, ka ievades lauks ir tekstuāls.
`id="ievades_lauks"` unikāls identifikātors visā lapā.

`<button onclick="nolasi();">Nolasi mani!</button>` - poga, kura nospiežot palaiž funkciju `nolasi()`



Tad tiek definēts Javascript kods:

::: tabs
@tab Kods

~~~js
function nolasi(){
    let ievades_lauks_atlasi = document.getElementById("ievades_lauks"); // Atlasām elementu no mūsu HTML lapas.
    let vertiba = ievades_lauks_atlasi.value; // Paņemam no mūsu elementa tikai un vienīgi tā vērtību
    alert("Ievades lauka vērtība ir: " + vertiba); // Paziņojam lapā ievades lauka vērtību.
}
~~~
@tab Iznākums

![html1](/js_alert3.jpg)

:::

### HTML elementa vērtības nomainīšana

Ar Javascript ir iespējams arī nomainīt elementa saturu lapu nepārlādējot.

Iedomāsimies, ka mums ir pirmā līmeņa virsraksts, kurā ir vārds "Diena", bet mēs vēlamies ar pogas palīdzību nomainīt tā saturu uz "Nakts".

HTML Kods:

~~~html

<h1 id="mainit_so">Diena</h1>

<button onclick="maini_mani();">Nomainīt saturu</button>

<script>

    function maini_mani(){
        let ievades_lauks_atlasi = document.getElementById("mainit_so"); // Atlasām elementu no mūsu HTML lapas.
        ievades_lauks_atlasi.innerHTML =  "Nakts"; // Iestatām tā HTML saturu uz vārdu "Nakts"
    }
</script>
~~~

### Iepirkumu saraksts

Uzbūvēsim vienkāršu iepirkšanās sarakstu, ko var papildināt, ievadot pirkumus

Sākumā nepieciešams tukšs saraksts, ievades lauks un poga. To veido ar HTML birkām.

Nospiežot pogu, pirkums no ievades lauka *pārcelsies* uz sarakstu 

::: tabs

@tab Kods

~~~html

<input id="pirkums">
<button onclick="pievienot()">Pievienot pirkumu!</button>
<ol id="saraksts">
</ol>

<script>

function pievienot() {
    let pirkums = document.getElementById("pirkums").value;
    let rinda = document.createElement("li");
    rinda.innerHTML = pirkums;
    let saraksts = document.getElementById("saraksts");
    saraksts.appendChild(rinda);
}
</script>

~~~
@tab Iznākums
  
![pirkumi](/pirkumi.jpg)
:::

## Papildus resursi

- [What is JavaScript?](https://www.youtube.com/watch?v=nItSSTwBvSU)
- [Javascript mainīgie](https://www.w3schools.com/js/js_variables.asp)
- [JS Object-oriented programming — the basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Javascript loģiskie operatori](https://www.w3schools.com/js/js_operators.asp)
- [Dažādi piemēri un pamācības](https://htmldog.com)
- [Īsas video pamācības](https://www.youtube.com/playlist?list=PLYZAmrDCITSMH8BLTKOvZfTdP1bCpkqEi)
- [Valstu galvaspilsētu spēle](https://github.com/krmu/valstuspele)
- [React Piemērs](https://github.com/krmu/ReactTests)
- [VUE Piemērs](https://github.com/krmu/datagovlvapi)