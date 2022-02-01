---
layout: default
title:  Krāsu sistēmas
grand_parent: Programmēšana
parent: CSS
nav_order: 6
---

# Krāsu sistēmas

Visbiežāk CSS lieto vienu no divām krāsu sistēmām: HEX vai RGB

## HEX sistēma

HEX sistēmā krāsa tiek kodēta heksadecimālajā skaitīšanas sistēmā un kods veidojas kā #RRGGBB, kur RR ir sarkanās krāsas intensitāte, GG ir zaļās krāsas intensitāte, bet BB ir zilās krāsas intensitāte.

Piemēram, #0000FF tiek attēlota kā zilā krāsa.

~~~css
div {
    background-color: #FFFF00; /* Dzeltens fons */
}
~~~

## RGB sistēma

RGB sistēma paredz līdzīgu principu, taču pieraksts veidojas no 3 komponentiem, tie ir (R, G, B), kur R ir sarkanā, G ir zaļā, bet B - zilā krāsa. Katru komponenti norāda ar vērtību no 0 līdz 255.

~~~css
p {
    color: rgb(255, 0, 0); /* Sarkans rindkopas teksts */
}
~~~

Nereti rgb īpašībā lieto 4. parametru, kas ir tā sauktais alfa parametrs, kurš norāda krāsas caurspīdīgumu. Tas var būt diapazonā no 0 līdz 1.0.

~~~css
div {
    background-color: rgba(255, 0, 0, 0.5); /* Puscaurspīdīgs sarkans fons */
}
~~~

Veidojot mājas lapas, tev varētu noderēt resurss [htmlcolorcodes.com](https://htmlcolorcodes.com/color-picker/), kur iespējams atlasītai krāsai iegūt gan RGB, gan HEX kodu.