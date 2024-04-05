---
title: Teorija
order: 2
---
## Algoritmi

Datorprogrammas vienmēr ietver stingru darbību secību, ko tās izpilda pēc lietotāja pavēles. Šīs darbību secības sauc par algoritmiem un ar tiem mēs sastopamies kā datoros, tā arī ikdienā.

### Algoritmu pieraksta veidi

Algoritmus var pierakstīt 3 dažādos veidos:
* pseidokods - secīgs darbību uzskaitījums rakstīts brīvā, bet cilvēkam saprotamā formā, kas var būt numurēts ar norādītu sākumu un beigām
* blokshēma - grafiskais algoritma attēlojuma veids, kur darbības attēlotas kā figūras
* programmēšanas valoda - vienīgais datoram saprotamais pieraksta veids, kur lietota speciāla sintakse

Algoritmam jābūt skaidram, mērķtiecīgam un nepārprotamam!


Apskatīsim tējas pagatavošanas algoritmu, kas pierakstīts 3 dažādos veidos.

#### Pseidokods

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

#### Blokshēma

![blokshemas_piemers](/blokshema.png)

Blokshēmās lieto sekojošos elementus:

![blokshemu_elementi](/blokshemu_elementi.png)

#### Programmēšanas valoda

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

## Kārtošanas algoritmi

Lai arī šādu kodu dators izpildīt nevarēs, tas ir uzrakstīts sintaktiski pareizi un atbilst programmēšanas valodas normām.

### Algoritmu izpildes veidi

Algoritmus iedala **lineāros**, **sazarotos** un **cikliskos**.

Tējas pagatavošanas process ir lineārs algoritms, kur darbības izpilda citu pēc citas noteiktā secībā. Bet ne vienmēr tas ir iespējams.

Iedomāsimies, ka mums nav tējkannas, kur ieliet ūdeni vai cukura, ko pievienot tējai. Tāpēc nepieciešams uzlabot algoritmu, iekļaujot dažādas pārbaudes, lai pārliecinātos, vai mums ir viss nepieciešamais rezultāta sasniegšanai.

![sazarota_blokshema](/blokshema_sazarota.png)

Attēlā parādīta blokshēma ar zarošanās konstrukciju. Romba figūrā ir lasāms nosacījums. Ja tas ir patiess, izpildās viena darbība, ja ne - tad otra.

Bet daudzos algoritmos ir darbības, kas daudzkārt atkārtojas. Ja vēlamies tējai pievienot 3 tējkarotes cukura, tad viena darbība jāizpilda 3 reizes. To sauc par ciklu ar 3 iterācijām.

Attēlā redzama blokshēma ar ciklisku konstrukciju.

Zili iekrāsotās darbības var atkārtoties neskaitāmas reizes.


![cikliska_blokshema](/blokshema_cikliska.png)

Šādi algoritmu var papildināt ar vairākiem cikliem. Piemēram, ja ūdens nav gana atdzisis, tad turpinām gaidīt, līdz tas atdzisīs.

Kārtošanas algoritmus izmanto, lai haotiskus datus sakārtotu pieaugošā vai dilstošā virknē. Tie var būt taisnstūru malu garumi, cilvēku vārdi, preču cenas utt.

Kārtošanas algoritmi ir dažādi, bet aizved pie viena un tā paša rezultāta.

Kārtojamie dati sadalās sakārtotajā daļā un nesakārtotajā daļā.


### Burbuļkārtošana

Viens no vienkāršākajiem algoritmiem, kas vairākkārt pārbauda visus virknes skaitļus pa pāriem un maina tos vietām.

1. Pirmos divus virknes skaitļus savstarpēji salīdzina, lai noteiktu lielāko. 
2. Ja 1. skaitlis ir lielāks, to maina ar otro, izmantojot kādu no [*swap*](swap.md) algoritmiem.
3. Salīdzina 2. un 3. skaitli un maina vietām, ja nepieciešams. Tā secīgi atkārto darbību visiem pārējiem skaitļu pāriem. Kad pārbaudīts beidzamais pāris, lielākais virknes skaitlis atrodas pēdējā pozīcijā.
4. Atkārto 1.-3. soli tik ilgi, kamēr visa virkne sakārtota.

![bubble_sort](/bubbleSort.gif)

### Izvēles kārtošana

1. Secīgi pārbauda visus virknes skaitļus, lai atrastu pozīciju, kurā atrodas mazākais skaitlis.
2. Mazāko skaitli apmaina vietām ar 1. virknes elementu.
3. Atkārtoti pārbauda un maina vietām skaitļus nesakārtotajā daļā tik ilgi, kamēr virkne sakārtota.

![selection_sort](/selectionSort.gif)


### Virknes lielākais skaitlis
Skaitļu virknē jāatrod lielākais tās skaitlis.

1. Virknes 1. vērtību nosakām kā lielāko
2. Caurskatām virkni, sākot no 2. vērtības
3. Ja skaitlis ir lielāks, tas kļūst par virknes lielāko skaitli
4. Atkārtojam salīdzināšanu visai atlikušai virknei
5. Kad beidzamais elements virknē pārbaudīts, esam ieguvuši lielāko virknes skaitli

<img style="width: 400px;" src="/lielakais_skaitlis.gif">

Virknes mazāko vērtību meklē identiskā veidā, tikai salīdzināšana notiek pretēji.

Procesu, kad visi virknes elementi tiek secīgi pārbaudīti, sauc par **lineāro meklēšanu**.


### Binārā meklēšana

Izmanto, kad skaitļu virknē jāatrod konkrēts skaitlis.

To dara šādi:
1. Izvēlas skaitli, kas jāatrod
2. Sakārto virkni augošā secībā
3. Sadala virkni divās iedomātās daļās
4. Skaitli, kas jāatrod, salīdzina ar 1. daļas pēdējo un 2. daļas pirmo skaitli, lai noteiktu, kurā virknes pusē tiks turpināta meklēšana. Ja kāds no skaitļiem sakrīt ar izvēlēto, tad meklēšanu pārtrauc, jo rezultāts ir sasniegts
5. Tālāk apskata to virknes daļu, kurai būtu pieskaitāms izvēlētais skaitlis
6. Atkārto 3.- 4. soli, kamēr vērtība ir atrasta. Ja sadalot virkni līdz mazākajai tās vienībai, skaitli neizdodas atrast, tad virknē tāds neeksistē

Attēlā redzams, kā virknē tiek meklēts skaitlis **41**

<img style="width: 500px;" src="/binarySearch.webp">

avots: codecademy.com

Bināro meklēšanu iespējams izmantot tikai sakārtotai virknei!

### Swap algoritms
Kārtojot datus, nepieciešams mainīt vietām kopas elementus. Tam izmanto vienu no trim paņēmieniem.

### Trešais mainīgais
Ja šķidrumus divās glāzēs jāapmaina vietām, vajadzēs trešo glāzi. Programmēšanā tam izmanto trešo mainīgo.

1. Ja ir mainīgie a un b, tad trešais būs c
2. c pārmanto mainīgā a vērtību, lai to nepazaudētu
3. a pārmanto b vērtību
4. b kļūst par c
5. Mainīgais c vairs nav nepieciešams

## Saskaitīšanas paņēmiens
Izmanto skaitļu summu.

1) Mainīgie a un b

`a = 3, b = 5`

2) a kļūst par abu skaitļu summu

`a = a + b`

3) b iegūst no a atņemot b

`b = a - b`

4) a iegūst no a atņemot b

`a = a - b`

### Python paņēmiens
Sastāda vienādību, kur abas tās puses ir *apgrieztas*.
Labās puses vērtības piešķir attiecīgajiem kreisās puses mainīgajiem

`a, b = b, a`