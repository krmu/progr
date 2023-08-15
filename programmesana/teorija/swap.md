---
title: Swap algoritms
description: ~
layout: default
parent: Teorija
nav_order: 3
grand_parent: Programmēšana
---
Kārtojot datus, nepieciešams mainīt vietām kopas elementus. Tam izmanto vienu no trim paņēmieniem.

# Trešais mainīgais
Ja šķidrumus divās glāzēs jāapmaina vietām, vajadzēs trešo glāzi. Programmēšanā tam izmanto trešo mainīgo.

1. Ja ir mainīgie a un b, tad trešais būs c
2. c pārmanto mainīgā a vērtību, lai to nepazaudētu
3. a pārmanto b vērtību
4. b kļūst par c
5. Mainīgais c vairs nav nepieciešams

# Saskaitīšanas paņēmiens
Izmanto skaitļu summu.

1) Mainīgie a un b

`a = 3, b = 5`

2) a kļūst par abu skaitļu summu

`a = a + b`

3) b iegūst no a atņemot b

`b = a - b`

4) a iegūst no a atņemot b

`a = a - b`

# Python paņēmiens
Sastāda vienādību, kur abas tās puses ir *apgrieztas*.
Labās puses vērtības piešķir attiecīgajiem kreisās puses mainīgajiem

`a, b = b, a`