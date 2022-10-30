---
layout: default
title: Daudzdimensiju saraksti
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 7
---

# Daudzdimensiju saraksti

Ja sarakstā glabājas vairāki elementi cits aiz cita, to sauc par viendimensijas sarakstu.

~~~py
pilsetas = ["Ainaži", "Smiltene", "Cēsis"]
~~~

Ja sarakstus izkārto citu citā, tad tas kļūst par daudzdimensiju sarakstu.

~~~py
dienas = [["Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena"], ["Sestdiena", "Svētdiena"]]
~~~
Šajā piemērā ir saraksts *dienas*, kurš satur vēl divus sarakstus, kuri glabā darba dienas un brīvās dienas.

Lai izdrukātu ekrānā kādu vērtību, jāraksta šādi:
~~~py
print(dienas[0][2])  # izdrukās trešdiena
print(dienas[1][0])  # izdrukās sestdiena
~~~

Svarīgi ievērot dubulto indeksāciju, jo jānorāda indekss no katra saraksta.

Sarakstus var kārtot arī 3 un vairāk dimensijās, bet to izmanto retāk.

Veicot matemātiskus aprēķinus vai veidojot grafiskas spēles, veido tā sauktās matricas jeb tādus daudzdimensiju sarakstus, kur visi apakšsaraksti ir vienādā izmērā. To ērti pierakstīt šādi:

~~~py
kaujas_lauks = [
    [".", ".", "X", ".", ".", "X", ".", " ", ".", "."],
    [".", " ", " ", " ", " ", "X", ".", ".", " ", "."],
    ["X", ".", "X", "X", " ", "X", " ", "X", ".", "."],
    [".", " ", ".", " ", ".", "X", ".", "X", ".", "X"],
    [".", ".", " ", ".", ".", "X", ".", "X", ".", "X"],
    [".", ".", "X", "X", "X", ".", " ", "X", ".", "."],
    [" ", ".", ".", ".", ".", " ", ".", ".", " ", "."],
    [" ", ".", ".", "X", "X", "X", "X", "X", "X", " "],
    [".", "X", ".", ".", " ", ".", ".", ".", ".", "."],
    [".", "X", ".", ".", ".", "X", "X", "X", ".", " "],
]
~~~
Piemērā attēlots kaujas lauks spēlei KARTUPELIS, kur ar X apzīmētie sašautie kuģi, bet ar . apzīmēti neveiksmīgie šāvieni.

Tālāk no šīs matricas var programmas logā koordinātu plaknē zīmēt grafisku spēles laukumu, simbolus aizstājot ar grafiskiem elementiem, tostarp kuģiem.

Tam izmanto ciklus, kas caurskata sarakstu un meklē attiecīgos simbolus X un .

~~~py
nogrimusie_kugi = []
for i in range(len(kaujas_lauks)):
    for j in range(len(kaujas_lauks[i])):
        if kaujas_lauks[i][j] == "X":
            nogrimusie_kugi.append([i, j])
~~~

Piemērā ir cikls, kas caurskata doto daudzdimensiju sarakstu elementu pa elementam. Lai labāk saprastu, kā strādā cikls, doto sarakstu var uzlūkot kā tabulu ar rindam un kolonnām. Cikls ar skaitītāju i caurskata rindas, bet cikls ar skaitītāju j caurskata kolonnas.

![battleships](/media/battleships.png)

Ciklam caurskatot visus elementus, pārbauda, vai kāds no tiem satur "X". Ja tā ir, tad atsevišķā sarakstā saglabā simbola X "koordinātes" i un j jeb kolonnu un rindu, kurā tas atrodas.

Saraksts izskatītos sekojoši:

`[[0, 2], [0, 5], [1, 5], [2, 0], [2, 2], [2, 3], [2, 5], [2, 7], [3, 5], [3, 7], [3, 9], [4, 5], [4, 7], [4, 9], [5, 2], [5, 3], [5, 4], [5, 7], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [8, 1], [9, 1], [9, 5], [9, 6], [9, 7]]`

Ja spēles beigās nepieciešams attīrīt laukumu, tad lieto identisku ciklisku konstrukciju, kur pārraksta katru elementu.

~~~py
nogrimusie_kugi = []
for i in range(len(kaujas_lauks)):
    for j in range(len(kaujas_lauks[i])):
        kaujas_lauks[i][j] = " "
~~~




