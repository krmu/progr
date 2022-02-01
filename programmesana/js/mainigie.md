---
layout: default
title: Mainīgie, masīvi, JSON
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
nav_order: 2
---

# Mainīgie

Mainīgajiem nav jāpieraksta to veids, bet mainīgo nosaukumam priekšā jāraksta vārdu `var`. 
{: .alert .alert-warning}

Piemērs:

~~~js

var x = 1; // Skaitlisks mainīgais

var vards = "Mans vārds ir Pēteris"; // Tekstuāls mainīgais

var atzimes = [1,2,3,4,5]; // Skaitlisks masīvs

var teksta_masivs = ["Krūmi", "Koks", "Stabs"]; // Tekstuāls masīvs

~~~~

Skaitliskos mainīgos no tekstuālajiem mainīgajiem atšķir ar pēdiņu lietojumu. Decimālie skaitļi tieši tāpat tiek pierakstīti kā veselie skaitļi,bet izmanto punktu tam paredzētajā vietā.
{: .alert .alert-warning}

Daži piemēri skaitliskajiem mainīgajiem.

~~~js
var x = 1;
var maingaisviens = 1124123;
var pi = 3.14159265359;
~~~~

Tekstuālos mainīgos pievieno ar pēdiņām. Tekstu raksta starp pēdīņām.
{: .alert .alert-warning}

~~~js

var garss_teksts = "Javscript ir programmēšanas valoda, bet HTML nav.";

~~~~

# Masīvi

Masīvus pielieto, lai apvienotu vairākus mainīgos vienā.  Skatām piemēru.
{: .alert .alert-warning}

~~~js

var pirmais = 1;
var otrais =  2;
var tresais  = 3; 

~~~~

Ir redzams, ka tiek veidoti 3 mainīgie. Šos trīs mainīgos varam apvienot vienā masīvā.

Masīvā katru elementu raksta atdalot ar komatu. Sāk rakstīt ar `[` un noslēdz ar `]`
{: .alert .alert-warning}

~~~js

var skaitli = [1,2,3];

~~~~

Iepriekš, lai izmantotu mainīgo, rakstījām tā vārdu,bet izmantot masīva konkrētos elementus var, saucot tā nosaukumu un kvādrātiekavās tā indeksu.

Indekss - elementa kārtas skaitlis masīvā. Masīvā indeksus sāk skaitīt no 0.
{: .alert .alert-warning}

Ja mēs gribam iegūt no masīva, ar nosaukumu `skaitli`, trešo elementu, kurš vienāds ar `3`, tad raksta komandu `skaitli[2]`. 

Tieši tāpat kā notiek skaitlisko masīvu veidošana, tiek veidoti arī tekstuālie. Piemērā dots masīvs ar skolas priekšmetu nosaukumiem.

~~~js

var prieksmeti = ["Latviešu valoda","Sports","Programmēšana","Datorika","Matemātika"];

~~~~

Lai iegūtu programmēšanas priekšmetu no masīva, raksta komandu `prieksmeti[2]`, jo šis elements masīvā (skaitot no 0 indeksa) ir otrais.

Masīvos var tikt miksēti tekstuālie elementi un skaitliskie elementi.
{: .alert .alert-info}

~~~js

var prieksmeti = ["Latviešu valoda",1,"Programmēšana",3,6543];

~~~~

# JSON

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
var obj = JSON.parse('{ "vards":"Valērijs Visvaris", "vecums":30, "pilseta":"Rīga"}');
// Lai iegūtu datus no šī objekta izmanto mainīgā nosaukumu un atslēgu:

alert(obj.vards + ", " + obj.pilseta);

// Paziņojumā tiks paziņots vārds un pilsēta.

~~~

Ja mums ir vairāki elementi objektā:

~~~js
var obj = JSON.parse('[ { "vards":"Valērijs Visvaris", "vecums":30, "pilseta":"Rīga"},{ "vards":"Anna Bauma", "vecums":12, "pilseta":"Rīga"} ]');
for (var i=0; i < obj.length; i++) {
    console.log(obj[i].vards);
}
~~~

Konsolē tiks izdrukāti visi elementi objektā ar atslēgu `vards`.

Ja ir vairāki kā viens elements objektā, objekts sākas ar [ un  beidzas ar ], jo tas ir masīvs.
{: .alert .alert-warning}