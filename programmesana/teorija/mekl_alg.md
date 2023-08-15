---
title: Meklēšanas algoritmi
description: ~
layout: default
parent: Teorija
nav_order: 1
grand_parent: Programmēšana
---
# Virknes lielākais skaitlis
Skaitļu virknē jāatrod lielākais tās skaitlis.

1. Virknes 1. vērtību nosakām kā lielāko
2. Caurskatām virkni, sākot no 2. vērtības
3. Ja skaitlis ir lielāks, tas kļūst par virknes lielāko skaitli
4. Atkārtojam salīdzināšanu visai atlikušai virknei
5. Kad beidzamais elements virknē pārbaudīts, esam ieguvuši lielāko virknes skaitli

<img style="width: 400px;" src="/media/lielakais_skaitlis.gif">

Virknes mazāko vērtību meklē identiskā veidā, tikai salīdzināšana notiek pretēji.

Procesu, kad visi virknes elementi tiek secīgi pārbaudīti, sauc par **lineāro meklēšanu**.
{: .alert .alert-warning}

# Binārā meklēšana

Izmanto, kad skaitļu virknē jāatrod konkrēts skaitlis.

To dara šādi:
1. Izvēlas skaitli, kas jāatrod
2. Sakārto virkni augošā secībā
3. Sadala virkni divās iedomātās daļās
4. Skaitli, kas jāatrod, salīdzina ar 1. daļas pēdējo un 2. daļas pirmo skaitli, lai noteiktu, kurā virknes pusē tiks turpināta meklēšana. Ja kāds no skaitļiem sakrīt ar izvēlēto, tad meklēšanu pārtrauc, jo rezultāts ir sasniegts
5. Tālāk apskata to virknes daļu, kurai būtu pieskaitāms izvēlētais skaitlis
6. Atkārto 3.- 4. soli, kamēr vērtība ir atrasta. Ja sadalot virkni līdz mazākajai tās vienībai, skaitli neizdodas atrast, tad virknē tāds neeksistē

Attēlā redzams, kā virknē tiek meklēts skaitlis **41**

<img style="width: 500px;" src="/media/binarySearch.webp">

avots: codecademy.com

Bināro meklēšanu iespējams izmantot tikai sakārtotai virknei!
{: .alert .alert-warning}


