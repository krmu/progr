---
layout: default
title: Nosacījumu veidošana
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 3
---

# Nosacījumu veidošana

Python programmēšanas valodā nosacījumi teik veidoti šadā veidā:


Python kodā atdalīšana notiek līmeņos. Visi vienādie līmeņi tiek izpildīti pēc kārtas. Līmeņus ievieš ar `TAB` taustiņu vai `SPACE` spiežot 4 reizes, bet visā kodā jābūt vienādiem atdalītājiem, atsarpes vai tabulatori.
{: .alert .alert-warning}

~~~
if nosacījums :
    [TABULATORA ATKĀPE] notikums
else:
    [TABULATORA ATKĀPE] notikums
Ja mums ir vairāk par vienu pārbaudi:
if nosacījums :
    [TABULATORA ATKĀPE] notikums
elif nosacījums2:
    [TABULATORA ATKĀPE] notikums
elif nosacījums3:
    [TABULATORA ATKĀPE] notikums

Kur [TABULATORA ATKĀPE] ir taustiņš TAB
~~~

Veidojot nosacījumus pēc principa `if ... elif ... else` tie izpildās šādi:

Ja neizpildās `if`, pārbauda `elif` bloku. Ja neizpildās `elif` bloks, jebkurā gadījumā izpilda `else` bloku.
{: .alert .alert-warning} 

Piemēri:

~~~python
x = 0
y = 5
if x < y:  
    print('x ir mazāks nekā y')
    
if y < x: 
    print('y ir mazāks nekā x')
~~~

Dodies [šeit](./saraksti.md#meklesana) un izpēti, kā nosacījumus pielieto sarakstiem!
