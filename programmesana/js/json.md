---
layout: default
title:  JSON
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
---

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

Ja ir vairāki kā viens elements objektā objekts sākas ar [ un  beidzas ar ]
{: .alert .alert-warning}