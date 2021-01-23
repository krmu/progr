---
layout: default
title:  Objekti
description: ~
grand_parent: Programmēšana
parent: PHP
nav_order: 5
---
# Objekti

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