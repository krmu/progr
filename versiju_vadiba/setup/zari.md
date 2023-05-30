---
layout: default
title: Zari (branches)
description: ~
grand_parent: Versiju vadība
parent: Versiju vadība
nav_order: 6
---
## Zari

Iedomāsimies situāciju, kad strādājam pie kāda projekta, piemēram, tīmekļa vietnes. Kādā brīdī nepieciešams pievienot autorizācijas iespēju, bet mēs nevēlamies sabojāt esošo funkcionalitāti. Tādā gadījumā ļoti noder Git iespēja, ko dēvē par zariem jeb *branches*.

![zari](/media/git/zari.png)

avots: https://www.learncsdesign.com/a-review-of-git-branching-strategies/

Noklusēti repozitorijs strādā pamata zarā jeb *main branch*.

No tā iespējams atvasināt citus, piemēram, *bugfix* jeb mazos labojumus vai *feature*, kur pievieno jaunu funkcionalitāti.

Tādā veidā mēs vairs nevaram *salauzt* strādājošo kodu.

Pamata komandas, strādājot ar zariem, ir `git branch`, `git switch` un `git merge`.

Lai izveidotu jaunu zaru, izmantojam

~~~git
git branch "Pievienojam_autorizaaciju"
~~~

, kur pēdiņās norādām tā nosaukumu

Lai pārslēgtos uz jaunizveidoto zaru, izmantojam

~~~git
git switch "Pievienojam_autorizaaciju"
~~~

Ar komandu `git branch` varam apskatīties, kurš no visiem zariem pašlaik ir aktīvs

Kad esam veikuši vajadzīgās izmaiņas vai arī ja funkcionalitāte ir gatava lietošanai, zarā izveido jaunu versiju ar `git add .` un `git commit`.

Ja versija izveidota, atgriežamies *main* zarā un savienojam ar jauno zaru

~~~git 
git merge "Pievienojam autorizaaciju"
~~~

Visas izmaiņas tagad būs spēkā *main* zarā.

Zaram var veidot arī apakšzarus, piemēram, ja funkcijas izstrādes laikā pamana jaunu kļūdu, izveido *feature-new-bug* zaru, kurā to izlabo.



