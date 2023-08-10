---
title: Algoritmi
description: Algoritmu veidi
layout: default
parent: Teorija
nav_order: 0
grand_parent: Programmēšana
---

Datorprogrammas vienmēr ietver stingru darbību secību, ko tās izpilda pēc lietotāja pavēles. Šīs darbību secības sauc par algoritmiem un ar tiem mēs sastopamies kā datoros, tā arī ikdienā.

# Algoritmu pieraksta veidi

Algoritmus var pierakstīt 3 dažādos veidos:
* pseidokods - secīgs darbību uzskaitījums rakstīts brīvā, bet cilvēkam saprotamā formā, kas var būt numurēts ar norādītu sākumu un beigām
* blokshēma - grafiskais algoritma attēlojuma veids, kur darbības attēlotas kā figūras
* programmēšanas valoda - vienīgais datoram saprotamais pieraksta veids, kur lietota speciāla sintakse

Algoritmam jābūt skaidram, mērķtiecīgam un nepārprotamam!
{: .alert .alert-warning}

Apskatīsim tējas pagatavošanas algoritmu, kas pierakstīts 3 dažādos veidos.

## Pseidokods

SĀKUMS

1. Paņemam tējkannu
2. Ielejam ūdeni
3. Noliekam tējkannu vietā, ieslēdzam to
4. Sagaidām, kamēr ūdens uzvārījies
5. Paņemam krūzi
6. Ieliekam tējas maisiņu
7. Ielejam ūdeni
8. Pieberam cukuru
9. Samaisam
10. Dzeram!

BEIGAS

## Blokshēma

![blokshemas_piemers](/media/blokshema.png)

Blokshēmās lieto sekojošos elementus:

![blokshemu_elementi](/media/blokshemu_elementi.png)

## Programmēšanas valoda

~~~py
import tejkanna
import kruze

def gatavojam_teju():
    tejkanna.piepildit()
    tejkanna.uzvarit()

    kruze.panemt()
    kruze.ielikt_maisinu()
    kruze.ieliet_udeni()
    kruze.piebert_cukuru()
    kruze.samaisit()
    kruze.dzert()

gatavojam_teju()

#Kodam ir ilustratīva nozīme
~~~

Lai arī šādu kodu dators izpildīt nevarēs, tas ir uzrakstīts sintaktiski pareizi un atbilst programmēšanas valodas normām.

# Algoritmu izpildes veidi

Algoritmus iedala **lineāros**, **sazarotos** un **cikliskos**.

Tējas pagatavošanas process ir lineārs algoritms, kur darbības izpilda citu pēc citas noteiktā secībā. Bet ne vienmēr tas ir iespējams.

Iedomāsimies, ka mums nav tējkannas, kur ieliet ūdeni vai cukura, ko pievienot tējai. Tāpēc nepieciešams uzlabot algoritmu, iekļaujot dažādas pārbaudes, lai pārliecinātos, vai mums ir viss nepieciešamais rezultāta sasniegšanai.

![sazarota_blokshema](/media/blokshema_sazarota.png)

Attēlā parādīta blokshēma ar zarošanās konstrukciju. Romba figūrā ir lasāms nosacījums. Ja tas ir patiess, izpildās viena darbība, ja ne - tad otra.

Bet daudzos algoritmos ir darbības, kas daudzkārt atkārtojas. Ja vēlamies tējai pievienot 3 tējkarotes cukura, tad viena darbība jāizpilda 3 reizes. To sauc par ciklu ar 3 iterācijām.

Attēlā redzama blokshēma ar ciklisku konstrukciju.

Zili iekrāsotās darbības var atkārtoties neskaitāmas reizes.
{: .alert .alert-warning}

![cikliska_blokshema](/media/blokshema_cikliska.png)

Šādi algoritmu var papildināt ar vairākiem cikliem. Piemēram, ja ūdens nav gana atdzisis, tad turpinām gaidīt, līdz tas atdzisīs.