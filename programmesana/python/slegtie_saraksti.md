---
layout: default
title: Slēgtie saraksti
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 8
---
## Slēgtie saraksti (tuples)

Python datu struktūras iedala maināmās (mutable) un nemaināmās (immutable).

Saraksts, kuru definē kvadrātiekavās `[]`, ir maināma datu struktūra, bet apaļās iekavās `()` pierakstīts tas kļūst par nemaināmu slēgto sarakstu.

Arī slēgtā sarakstā ir spēkā indeksācija un to var veidot arī daudzdimensiju pierakstā.

~~~py
# saraksts
draudzenes = ["Maija", "Anna", "Ilze"]  

# slēgtais saraksts
patskani = ("a", "ā", "e", "ē", "i", "ī", "u", "ū", "o")  
~~~

Slēgtos sarakstus parasti lieto vispārpieņemtiem nemainīgiem datiem, piemēram, patskaņu kopai vai nedēļas dienām.

Slēgto sarakstu nevar mainīt (ne pievienojot vai izmetot elementus, ne mainot kāda elementa vērtību).
{: .alert .alert-warning}

Kāpēc būtu vajadzīgs slēgts saraksts? Programmēšanā rekomendējamā prakse ir "aizliegt visu, ko var aizliegt", tādējādi sargājot algoritmus no neparedzētām kļūdām. Līdz ar to slēgtais saraksts ir kā "drošais" saraksta variants, kurš noteikti būtu izmantojams, ja tas dotajā situācijā der.

Slēgtais saraksts aizņem mazāk atmiņas un strādā ievērojami ātrāk.
{: .alert .alert-warning}

Definējot slēgto sarakstu, to var pierakstīt gan apaļās iekavās, gan bez tām.

~~~py
sarkans_rgb = (255, 0, 0)
zils_rgb = 0, 0, 255

# abi varianti pareizi
~~~

Sarakstus savā starpā iespējams kombinēt. Piemērā saraksts, kurš satur trīs slēgtos sarakstus.

~~~py
rudens_menesi = [("Septembris", 30), ("Oktobris", 31), ("Novembris", 30)]

# mēneši un dienu skaits
~~~

Slēgtos sarakstus nevar mainīt, bet tos var apvienot. Ja vērtība ir tikai viena, aiz tās jāliek komats.

~~~py
lv_novadi = ("Kurzeme", "Zemgale", "Vidzeme", "Latgale")
lv_novadi += ("Sēlija",)
~~~

Rezultāts: `("Kurzeme", "Zemgale", "Vidzeme", "Latgale", "Sēlija")`





