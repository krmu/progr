---
title: Kārtošanas algoritmi
description: ~
layout: default
parent: Teorija
nav_order: 2
grand_parent: Programmēšana
---
Kārtošanas algoritmus izmanto, lai haotiskus datus sakārtotu pieaugošā vai dilstošā virknē. Tie var būt taisnstūru malu garumi, cilvēku vārdi, preču cenas utt.

Kārtošanas algoritmi ir dažādi, bet aizved pie viena un tā paša rezultāta.

Kārtojamie dati sadalās sakārtotajā daļā un nesakārtotajā daļā.
{: .alert .alert-warning}

# Burbuļkārtošana

Viens no vienkāršākajiem algoritmiem, kas vairākkārt pārbauda visus virknes skaitļus pa pāriem un maina tos vietām.

1. Pirmos divus virknes skaitļus savstarpēji salīdzina, lai noteiktu lielāko. 
2. Ja 1. skaitlis ir lielāks, to maina ar otro, izmantojot kādu no [*swap*](swap.md) algoritmiem.
3. Salīdzina 2. un 3. skaitli un maina vietām, ja nepieciešams. Tā secīgi atkārto darbību visiem pārējiem skaitļu pāriem. Kad pārbaudīts beidzamais pāris, lielākais virknes skaitlis atrodas pēdējā pozīcijā.
4. Atkārto 1.-3. soli tik ilgi, kamēr visa virkne sakārtota.

![bubble_sort](/media/bubbleSort.gif)

# Izvēles kārtošana

1. Secīgi pārbauda visus virknes skaitļus, lai atrastu pozīciju, kurā atrodas mazākais skaitlis.
2. Mazāko skaitli apmaina vietām ar 1. virknes elementu.
3. Atkārtoti pārbauda un maina vietām skaitļus nesakārtotajā daļā tik ilgi, kamēr virkne sakārtota.

![selection_sort](/media/selectionSort.gif)





