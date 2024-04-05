---
title: Python
order: 7
---

## Datu izvads

Lai konsolē izdrukātu kādu tekstu vai mainīgo rezultātu izmanto komandu `print`, bet komentāriem lieto `#` vai `"""`.

~~~python

print("Teksta izdruka lapā")

# Komentārs

"""
komentārs
vairākās
rindās
"""

~~~

## Datu ievads

Lai ievadītu datus, lieto `input()`

~~~python

tavsVards = input("Ievadi vārdu!")

~~~

Ja ievadāmie dati ir skaitlis, tad norāda datu tipu!


~~~python

cena = float(input("Ievadi cenu!"))

~~~
## Mainīgo pieraksts

Mainīgajiem nav jāpieraksta to veids. Piemēram, Java programmēšanas valodā jāraksta skatiļu mainīgajiem burti `Int`.

~~~python

Skaitlis = 1

Decimals_skaitlis = 2.0

Teksta_mainigais = "Šis ir teksta mainīgais"

Logisks_mainigais = True

Tuksa_vertiba = None

Saraksts = [1, 2, 3, 4, 5]

Vardnica = {'vārds': 'Jānis'}

~~~

Piemērs:

~~~python
x = 1

vards = "Mans vārds ir Pēteris"

atzimes = [1, 2, 3, 4, 5]

valodas = {'LV': 'Latviešu valoda','ENG': 'Angļu valoda'}
~~~


## Saraksti (lists)

### Saraksta definēšana

Saraksts savā būtībā ir kā mainīgais, kas satur vairākas vērtības jeb elementus.

Vērtības, ko sevī glabā saraksts, ir strikti numurētas un šis kārtas numurs ir **indekss**.

`mansSaraksts = ['pirmā teksta vērtība', 'otrā teksta vērtība', skaitlis1, utt. ]`

Sarakstu garumus nosaka sekojoši:

`print(len(mansSaraksts))`

Piemēram:
~~~python
prieksmeti = ['Latviešu valoda', 'Krievu valoda', 'Informātika']

atzimes = [10, 9, 5, 4, 5, 3]

maniCipari = [6, 3, "viens", 7, 0]
~~~

Vienā sarakstā var būt arī vairāku tipu vērtības.

Ja sarakstu mēģina izdrukāt ar `print(saraksts)`, tas izdrukājas savā dabiskajā formā.

### Darbības ar elementiem

Lai iegūtu konrētu vērtību no saraksta, ir jāzina tās indekss. Piemērā redzam, kā veidojas indeksi sarakstā.

![python-list](/python-list.png)
Avots: programiz.com

Varam novērot, ka piekļūstot elementiem var lietot arī negatīvus indeksus. Skaitot no kreisās puses uz labo, indeksi ir pozitīvi, bet skaitot no labās puses uz kreiso indeksi ir negatīvi. Īpaši ērti tas ir gadījumos, ja jāpiekļūst elementam, kas atrodas tuvu saraksta beigām.

~~~python
atzimes = [10, 9, 5, 4, 5, 3]
print(atzimes[1])
~~~
Konsolē tiek izdrukāts: 9, jo sākot skaitīt no 0 iegūstam, ka 9 ir pirmais elements.

Elementiem var piekļūt arī izmantojot intervālus.

~~~python
atzimes = [10, 9, 5, 4, 5, 3]
print(atzimes[1:3])
~~~

Šajā piemērā izdrukā elementus ar indeksiem 1 un 2, jo intervāla beigas neieskaita.

Funkcijas darbam ar sarakstiem:

|Funkcija|Nozīme|  
|---|---|              
|pop(indekss)|dzēš elementu, skaitlis iekavās norāda elementa indeksu; ja indeksu nenorāda, tad dzēš pēdējo elementu|
|append(vērtība)|saraksta beigās pievieno jaunu elementu|
|insert(indekss, vērtība)|ievieto jaunu elementu izvēlētajā pozīcijā|
|sort()|kārto elementus pieaugošā secībā|
|reverse()|apgriež sarakstu pretēji|
|index(vērtība)|meklē pirmo elementu, kurš satur norādīto vērtību|

~~~python
krasas = ['zaļa', 'zila', 'balta', 'sarkana']
krasas.pop(0)

#['zila', 'balta', 'sarkana']

krasas.append('melna')

#['zila', 'balta', 'sarkana', 'melna']

krasas.reverse()

#['melna', 'sarkana', 'balta', 'zila']
~~~

Kārtojot tekstuālas vērtības, saraksta sākumā novietosies vērtības ar lielajiem sākuma burtiem.

### Daudzdimensiju saraksti

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

![battleships](/battleships.png)

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

### Vērtību meklēšana

Ērti izmantot sazarojumu, lai pārbaudītu, vai vērtība eksistē sarakstā

~~~python
draudzenes = ['Dace', 'Marta', 'Anna', 'Ilze']
if 'Dace' in draudzenes:
    print('Dace ir šeit!')
else:
    print('Daces šeit nav!')
~~~

### Ciklu pielietošana

Lai pārskatītu visus saraksta elementus, lieto ciklu.

~~~python
ogas = ['mellene', 'zemene', 'avene', 'ķirsis']
for oga in ogas:
    print(oga)
~~~

## Vārdnīcas

`manaVardnica = {'atslega':'vertiba','atslega2':'vertiba2'}`

Vārdnīca ir atslēgu un vērtību pāri, kur atslēga ir unikāla visā vārdnīcā.


~~~python
prieksmetusaisinajumi = {'lv':'Latviešu valoda', 'inf':'Informātika'}
print(prieksmetusaisinajumi['lv'])
~~~

Konsolē tiek izdrukāts: Latviešu valoda , jo vārdnīcas atslēga `lv` satur vērtību Latviešu valoda.

Vārdnīcas nolasīšana ciklā.

~~~python
prieksmetusaisinajumi = {'lv':'Latviešu valoda', 'inf':'Informātika'}
for x in prieksmetusaisinajumi:
    print(x)
~~~

Konsolē izdrukāsies vārdnīcas atslēgas.

Lai izdrukātos vērtības, jāraksta `print(prieksmetusaisinajumi[x])`

Lai labāk saprastu, kā strādā vārdnīcas, apskati [burtu skaitīšanas algoritmu.](piemeri.md#aboli)

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

Kāpēc būtu vajadzīgs slēgts saraksts? Programmēšanā rekomendējamā prakse ir "aizliegt visu, ko var aizliegt", tādējādi sargājot algoritmus no neparedzētām kļūdām. Līdz ar to slēgtais saraksts ir kā "drošais" saraksta variants, kurš noteikti būtu izmantojams, ja tas dotajā situācijā der.

Slēgtais saraksts aizņem mazāk atmiņas un strādā ievērojami ātrāk.


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

## Funkciju definēšana

Funkcija ir neatkarīgs koda bloks, kas veic konkrētu uzdevumu.

Python programmēšanas valodā funkcijas definē ar vārdu def.

~~~python
def FUNKCIJAS_NOSAUKUMS():
    print("Funkcijas darbība")
~~~

Piemērs.
~~~python
def hello():
    print("Sveika pasaule")
hello()
~~~

### Funkciju parametri

Parasti funkcija saņem datus, tos apstrādā un atdod atpakaļ rezultātu.

**dati >> funkcija >> rezultāts**

~~~python
def paraVaiNepara(skaitlis): #F-jas definīcija
    if skaitlis%2 == 0:
        paraSk = True
    else:
        paraSk = False
    return paraSk

print(paraVaiNepara(5)) #F-jas izsaukums
~~~

Dotajā piemērā ir funkcija, kas jebkādam padotam skaitlim nosaka, vai tas ir pāra skaitlis un atgriež `True` vai `False`. Tā kā padotais skaitlis ir 5, tad rezultāts ir `False`.

Lai labāk saprastu, kā darbojas funkcijas, apskati [ābolu lasīšanas algoritmu.](piemeri.md#aboli)

### Mainīgo redzamība

Mainīgie, kas deklarēti ārpus funkcijām, ir **globāli** mainīgie, bet tie, kas deklarēti funkcijas iekšienē, ir **lokāli** mainīgie.

~~~python
x = 5 #globāls mainīgais
def izvadaSkaitli():
    x = 10 #lokāls mainīgais
    print(x)

izvadaSkaitli()
print(x)
~~~

Dotajā koda piemērā ir divi dažādi mainīgie `x`. Vispirms izdrukā f-jas mainīgā vērtību `10`, pēc tam globālā mainīgā vērtību `5`.

Globālu mainīgo no funkcijas var nolasīt, bet nevar mainīt tā vērtību.


Ja vēlamies mainīt mainīgā vērtību no f-jas, tad jālieto atslēgvārds `global`.

~~~python
x = 5 
def izvadaSkaitli():
    global x
    x = 10
    print(x)

izvadaSkaitli()
print(x)
~~~

Šajā gadījumā visā programmā ir viens mainīgais `x`, kam funkcijā tiek mainīta vērtība. Programma izdrukās skaitļus `10` un `10`.

## Ciklu veidošana

### Nenoteiktie while cikli

Python progr. valodā eksistē divu veidu cikli - noteiktie(`for`) un nenoteiktie(`while`).

Piemērs nenoteiktajam.

~~~python
i = 1
while i < 6:
  print(i)
  i += 1
~~~

Šajā cikla veidā ir pirms paša cikla ir dots kontroles mainīgais `i`, kurš ļauj sākumā tiek uzstādīts ar vērtību 1. Cikls sākas ar vārdiem `while` un tad ir cikla darbības ilgums jeb šajā gadījumā cikls darbojas kamēr mainīgais
`i` ir mazāks nekā 6. 

`i += 1` šī rinda ir svarīgākā šajā ciklā, jo tiek pateikts, ka cikla vērtība `i` tiek palielināta par vienu vienību. 

### Noteiktie for cikli

Piemērs noteiktajam.

~~~python
for x in range(6):
  print(x)
~~~

Tiek iestatīts cikla mainīgais `x`, kurš sevī satur cikla skaitītāju. `in range(6)` - cikla ilgums. Programmai tiek teikts, ka darbojas līdz sasniedz vērtību 6.


Cikla gala vērtība būs par vienu mazāka nekā tiek norādīts. Ja cikla gala vērtība tiek norādīta kā  range(6), tad pēdējā cikla vienība būs 5.


`range(1, 10, 2)` - komanda mums ļauj arī nodefinēt cikla soli un sākuma vērtību. Pirmā vērtība `1` pasaka, ka cikls sākas ar vērtību 1, tad `10` norāda uz cikla beigām un `2` ir cikla solis, cikls iet uz priekšu pa 2 vienībām.
~~~tip
range(sākums,beigas,solis)
~~~
Minimums šai komandai ir beigu viena vērtība, kura parādīs, kad ir cikla beigas.

Pielietojot negatīvu soli ciklu iespējams darbināt arī atpakaļgaitā.

~~~python
for x in range(10, 0, -1):
  print(x)
~~~

Šajā gadījumā izdrukāsies skaitļi:

~~~tip
10 9 8 7 6 5 4 3 2 1
~~~

### Ciklu veidošana - saraksti

Ir iespējams arī iegūt saraksta vērtības izmantojot noteikto ciklu.

~~~python
stundas = ["Pirmā stunda", "Otrā stunda", "Trešā stunda"]
for x in stundas:
  print(x)
~~~

Šajā gadījumā mainīgais `x` saturēs tā brīža saraksta vērtību. Piemēram, pirmo reizi tas saturēs vārdus `Pirmā stunda` otrajā `Otrā stunda` un trešājā `Trešā stunda`.

Nedaudz grūtāk ir ar vārdnīcām.

~~~python
vardnica = {'x': 1, 'y': 2, 'z': 3} 
for atslega, vertiba in vardnica.items():
    print(atslega, ' tās vērtība ', vertiba)
~~~

Pirmajā rindā ir definēta vārdnīca.

Otrā rinda ir noteiktais cikls. `atslega` sevī satur vārdnīcas atslēgu konkrētājā cikla solī,piemēram, `x`,`y`,`z`.`in vardnica.items()` - cikls tiek lasīts caur vardnīcas elementiem.
`print(atslega, ' tās vērtība ', vertiba)` - `atslega` sevī satur vārdnīcas atslēgu un `vertiba` vērtību.


## Nosacījumu veidošana

Python programmēšanas valodā nosacījumi teik veidoti šadā veidā:


Python kodā atdalīšana notiek līmeņos. Visi vienādie līmeņi tiek izpildīti pēc kārtas. Līmeņus ievieš ar `TAB` taustiņu vai `SPACE` spiežot 4 reizes, bet visā kodā jābūt vienādiem atdalītājiem, atsarpes vai tabulatori.

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


## Operatori
Aritmētiskie operatori

| Operators | Apraksts    | Piemērs  |
|:-----|:------------|:------------|
| +   | Saskaitīt     |  4 + 4        |
| -   | Atņemšana | 4  - 3     |
| *    | Reizināšana     | 4 * 3|
| /   | Dalīšana      | 4 / 3 |
| %    | Modulis       | 4 < 5 |
| **   | Kāpināšana | 4**3 |
| //   | Dalīšana iegūstot veselu skaitli    | 13 // 4 |

Vairāk par Python operātoriem var lasīt [šeit](https://www.w3schools.com/python/python_operators.asp).
## Bibliotēkas

Python valodā pastāv trīs veidu bibliotēkas:
* iebūvētās, kuras var brīvi piesaistīt projektam
* ārējās, kuras nepieciešams instalēt ar PIP
* pašveidotas bibliotēkas, kuras piesaista galvenajam programmas failam

PIP ir Python bibliotēku pārvaldnieks


### Ārējās bibliotēkas instalēšana

Python programmēšanas valoda atļauj izmantot ārējās bibliotēkas. Lai instalētu bibliotēku:

~~~python

pip install [bibliotēka]

~~~
Piemēram instalēsim Easy UI bibliotēku

~~~python

pip install easyui

~~~

---

### Bibliotēkas piesaistīšana programmas projektam

Lai izmantotu funkcijas no konkrētās bibliotēkas, vienmēr nepieciešams piesaistīt to programmas projektam. To dara šādi:

~~~python
import random #piesaista b-tēku random

skaitlis = random.randrange(0, 10) #pielieto f-ju randrange no b-tēkas random
~~~

Lai kods būtu pārskatāms, vēlams pēc bibliotēku piesaistes atstāt tukšu rindu!


Lai bibliotēku kodā varētu ērtāk pierakstīt, tai var nodefinēt "iesauku" ar atslēgvārdu `as`

~~~python
import random as rnd
~~~

Piesaistot konkrētu funkciju no bibliotēkas, raksta `from [bibliotēka] import [funkcija]` un bibliotēku turpmāk nenorāda

~~~python
from random import randrange

skaitlis = randrange(0, 10)
~~~

Šādi programmas projekts būs kompaktāks un aizņems mazāk vietas!


### Dažas populārākās bibliotēkas

* random - nejaušības elementi
* datetime - datums un laiks
* time - koda aizture sleep()
* matplotlib *(instalējama)* - matemātiskie grafiki
* math - kvadrātsakne sqrt() un PI konstante
* requests *(instalējama)* - API izsaukumi
* sqlite3 - darbam ar datu bāzēm

### Kā veidot savas bibliotēkas

Programmējot apjomīgākus projektus, kods nereti sanāk garš un nepārskatāms. Tāpēc programmu sadala *moduļos* jeb bibliotēkās. Šie *moduļi* gluži vienkārši ir atsevišķi .py faili, kas gādā par noteiktām programmas funkcijām, tos piesaista projektam ar `import`.

Apskatīsim piemēru ar atsevišķu bibliotēku **dayToDiena.py**, kurā ir funkcija **latviskotDienu()**, kas saņem anglisko dienas nosaukumu un atgriež tā latvisko versiju.

![dayToDiena](/dayToDiena.png)

#### main.py

~~~python
import datetime
import dayToDiena

diena = int(input("Ievadi datumu!"))
menesis = int(input("Ievadi mēnesi!"))
gads = int(input("Ievadi gadu!"))

datums = datetime.date(gads, menesis, diena)
dienasNos = datums.strftime("%A")
dienaLv = dayToDiena.latviskotDienu(dienasNos)
print(dienaLv)
~~~

#### dayToDiena.py

~~~python
dienas = {
  "Monday":"Pirmdiena",
  "Tuesday":"Otrdiena",
  "Wednesday":"Trešdiena",
  "Thursday":"Ceturtdiena",
  "Friday":"Piektdiena",
  "Saturday":"Sestdiena",
  "Sunday":"Svētdiena"
}

def latviskotDienu(day):
  dienaLv = dienas[day]
  return dienaLv
~~~

Piemērā izmantota iebūvētā bibliotēka `datetime`, lai nodefinētu ievadīto datumu, kuru pēc tam pārvērš dienas nosaukumā.

Lai iegūtu latvisko dienas nosaukumu, izsauc funkciju **latviskotDienu()** no bibliotēkas **dayToDiena.py**.

Šajā gadījumā ērti pielietot vārdnīcu, kur angliskajam dienas nosaukumam pretī ir tā tulkojums.


## API - programmsaskarne

API jeb "application programming interface" un latviešu valodā programmsaskarne ir veids kā izmantot ārējos datu avotus, lai uzlabotu savu programmu.
Tādā veidā iespējams iegūt datus no ārejiem resursiem neizmantojot tiešo datubāzes pieslēgumu.

### Kā tas strādā?

Apskatīsim attēlu.

![html1](/api.jpg)
Attēls: lvivity.com

Attēlā ir vizuāli parādīts, ka notiek pieprasījums no klienta puses (pārlūka, datora, telefona utt.) uz serveri. Serveris apstrādā pieprasījumu un atgriež atpakaļ datus.

Tas kādā formātā tiek atgriezti dati, to nosaka pats programmētājs. Biežākie formāti ir `JSON` un `XML`.

Lai definētu un izmantotu API izsaukumus Python progr. valodā, var izmantot ārējo bibliotēku `requests`.

Paraugs vienkāršam izsaukumam.

~~~python

import requests # Ievietojam ārējo bibliotēku - requests

r = requests.get(url=SAITE UZ API GALAPUNKTU) # Veidojam pieprasījumu, url ir mainīgais, kurā ievietojam saiti uz ārējo resursu.
t = r.json() # Pārveidojam saņemtos datus uz JSON objektu.

print(t) # Izdrukājam saņemto objektu.

~~~

### GET pieprasījumi

Atverot kādu tīmekļa vietni, piemēram, https://www.google.com/, serveris saņem GET pieprasījumu un atbild ar vajadzīgajiem failiem, lai ekrānā attēlotos pieprasītā vietne. Šajā gadījumā GET var dēvēt par tūkšu pieprasījumu, jo tas no klienta puses neietver nekādus datus.

### URL parametri
Veicot GET pieprasījumu uz resursu, adresei var pievienot vienu vai vairākus parametrus.

`https://www.lienestortes.lv/tortes?veids=sokolades`

Adresē, kas redzama piemērā, ir parametrs ar nosaukumu `veids` un tā vērtība `sokolades`

Vietu, kur sākas parametri, apzīmē ar `?`

Ja izmanto vairākus parametrus, tos savieno ar `&` simbolu

`https://www.lienestortes.lv/tortes?veids=sokolades&garsa=citronu`

Nekādā gadījumā nedrīkst adresē ietvert personas datus un paroles!

### POST pieprasījumi

Ja nepieciešams nosūtīt serverim kādus datus, izmanto POST pieprasījumu. Piemērs varētu būt autorizācijas forma e-klase.lv portālā. Tajā ievada personas kodu un paroli, ko saņem serveris, lai pārbaudītu, vai lietotājs eksistē.

~~~html
<form action="/autorizacija" method="POST">
    <input type="text" name="lietotajvards">
    <input type="password" name="parole">
    <input type="submit" value="Ieiet">
</form>
~~~

`action` atribūtā norāda tā saukto galapunktu, lai serveris saprot, kas jādara.

Serveris atbild ar jaunu lapu, ja dati pareizi vai kļūdas ziņojumu, ja dati kļūdaini.

## Darbības ar tekstu

### Teksta garums

Lai noteiktu teksta virknes garumu, lieto `len([mainīgais])`.

~~~python
teksts = "Laterna"
print(len(teksts))
~~~

Izdrukā saņemsim `7`, jo vārdā ir 7 burti

### Teksta apvienošana

Pieņemsim, ka mums ir dots vārds, uzvārds un klase. Apvienosim tos kopā...

~~~python
vards = "Alise"
uzvards = "Muciņa"
klase = "9c"
skolniece = vards+uzvards+klase
~~~

Izvadā ieraudzīsim **AliseMuciņa9c**

Lai pievienotu atstarpes starp mainīgajiem, rīkojas šādi:  
`skolniece = vards+" "+uzvards+" "+klase`

### Simbolu atdalīšana

Teksta mainīgajiem var pielietot parametru `[sākums:beigas]`, lai atdalītu noteiktu skaitu simbolu.

Simbolus tekstā sāk skaitīt no 0!


Intervāla beigas neieskaita!


Apskatīsim piemēru ar telefona numuru...

~~~python
telefons = "+37128506233"
valstsKods = telefons[0:4]
print(valstsKods)
~~~

Šo īpašību varam pielietot, lai cikliski izvadītu katru simbolu jaunā rindā.

~~~python
teksts = "Alisei garšo konfektes."
for simbols in teksts:
    print(simbols)
~~~

Arī atstarpe ir simbols!
{: .alert .alert-warning} 

### Lielie un mazie burti

`isupper()` lieto, lai pārbaudītu, vai teksts satur tikai lielos burtus.

`islower()` lieto, lai pārbaudītu, vai teksts satur tikai mazos burtus.

~~~python
teksts = "Kārlis lasa grāmatu."
print(teksts.islower())
~~~

Tā kā teksts satur lielo sākuma burtu, tad izdrukā būs redzams `False`.

`isdigit()` lieto, lai pārbaudītu, vai rakstzīme ir cipars.

### Sarakstu pielietošana

Ar atsevišķiem burtiem vieglāk darboties, ja tekstu pārnes sarakstā...

~~~python
teksts = "Sprīdītis"
teksts_s = []
for simbols in teksts:
    teksts_s.append(simbols)
print(teksts_s)
~~~

Rezultāts: ['S', 'p', 'r', 'ī', 'd', 'ī', 't', 'i', 's']

Par sarakstiem vairāk izlasīsi [šeit](./saraksti.md)!

## Datums un laiks

Lai kodā varētu pielietot datumu un laiku, piesaista bibliotēku `datetime`

~~~python
import datetime
~~~

Apskatīsim, kā varam izdrukāt pašreizējo datumu un laiku...

~~~python
datumsUnLaiks = datetime.datetime.now()
print(datumsUnLaiks)
~~~

Ja nepieciešams tikai datums, lietojam funkciju `today()` no klases `date`

~~~python
datums = datetime.date.today()
print(datums)
~~~

Laiku iegūstam šādi...

~~~python
laiks = datetime.datetime.now().time()
print(laiks)
~~~

No iegūtā laika varam atdalīt stundas, minūtes, sekundes un pat mikrosekundes

~~~python
laiks = datetime.datetime.now().time()
stundas = laiks.hour
minutes = laiks.minute
sekundes = laiks.second
mikrosekundes = laiks.microsecond
~~~

Atceries, ka datums un laiks nav ne skaitlis, ne teksts! Tas ir īpašs datetime objekts!


Lai laiku un datumu pārveidotu uz tekstu, pielieto `strftime()` funkciju, norādot attēlojamo formātu!

~~~python
laiks = datetime.datetime.now()

laiks_ka_teksts = laiks.strftime("%H:%M:%S")
print(laiks_ka_teksts_)

#izvads => 20:37:04
~~~

### Formātkodu atšifrējumi

|Formātkods |Atšifrējums      |
|-----------|-----------------|
|%H         |Stundas          |
|%M         |Minūtes          |
|%S         |Sekundes         |
|%f         |Mikrosekundes    |
|%Y         |Pilnais gads     |
|%y         |Saīsinātais gads |
|%m         |Mēnesis          |
|%d         |Diena            |


## Failu - lasīšana, rakstīšana

Python programmēšanas valoda ļauj nolasīt failus un to saturu.

~~~python
with open('data.txt', 'r') as f:
    dati= f.read()
~~~

Kur data.txt ir faila nosaukums (jāatrodas tajā pašā mapē, kur atrodas `.py` fails), `r` parametrs norāda, ka fails tiek lasīts - read. Savukārt, mainīgais `dati` saturēs vārdnīcu ar rindām no faila. 

Ierakstīt failā:

~~~python
with open('data.txt', 'w') as f:
    dati= 'Šo tekstu ierakstīt failā'
    f.write(dati)
~~~

Šajā gadījumā tiek ierakstīts failā teksts - pārrakstot faila saturu. 

Ierakstīt failā:

~~~python
with open('data.txt', 'a') as f:
    dati= 'Šo tekstu ierakstīt failā'
    f.write(dati)
~~~

Pēc darbībām ar failu, neaizmirsti to aizvērt ar `f.close()`! Citādi izmaiņas nebūs redzamas!


Lasot failus, ērti pielietot for ciklu

~~~python
for rinda in f:
    print(rinda)
~~~

Lai vairākkārt cikliski varētu nolasīt failu, nepieciešams atgriezties faila sākumā ar `f.seek(0)`

## Flask

Flask ir bibliotēka jeb ietvars (*framework*), ko izmanto, lai veidotu tīmekļa vietnes un aplikācijas ar Python valodu.

### Pirmie soļi ar Flask

Lai sāktu veidot tīmekļa vietni, izveido mapi, piemēram, *mans_blogs* ar failu *app.py*. Tā kā Flask ir ārējā bibliotēka, to būs nepieciešams instalēt komandrindā ar komandu 

~~~shell
pip install flask
~~~

Datnē *app.py* ieraksta sekojošo:

~~~py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "<p>Hello, World!</p>"

app.run(debug=True)
~~~

Dotajā piemērā importē flask bibliotēku un nodefinē `app` objektu, ar ko tālāk darbosies.

Pēdējā rinda startē Flask serveri, kas ekrānā parādīs `Hello, World!`, adreses laukā ierakstot adresi `127.0.0.1:5000/`.

Pieliekot papildus serverceļus *(routes)* varēsim izmantot arī citas adreses, piemēram, `127.0.0.1:5000/hello`.

~~~py
from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/hello")
def index():
    return "<p>Hello, World!</p>"

app.run(debug=True)
~~~

### Šabloni

Lai izveidotā lapa būtu dinamiska un ērti papildināma, lieto html šablonus. Tam vajadzīga mape `templates` ar galveno failu `layout.html` un pārējiem failiem, kas kalpos kā lapas sadaļas.

`layout.html` varētu izskatīties šādi:

~~~html
<!DOCTYPE html>
<html lang="lv">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mana Flask lappuse</title>
  </head>
  <body>
	{% block lapas_saturs %}
    {% endblock %}
  </body>
</html>
~~~

Redzam, ka `body` tagā ir izveidots bloks jeb sadaļa, kas saturēs mainīgo lapas daļu. Papildus var ietvert arī navigāciju un citus elementus.

Izveidosim tagad sadaļu `sakums.html`.

~~~html
{% extends "layout.html" %}

{% block lapas_saturs %}
    Esi sveicināts sākuma lapā!
{% endblock %}
~~~

Redzam, ka šeit netiek dublēts viss html kods, bet tikai lapas mainīgā daļa, ietverot galveno failu `layout.html`.

Modificēsim mūsu `app.py` failu, lai tas izsauktu mūsu jauno sadaļu.

~~~py
from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/hello")
def index():
    return render_template("sakums.html")

app.run(debug=True)
~~~

## Kļūdu apstrāde

Apskatīsim, kā programmā paredzēt dažādus izņēmuma gadījumus...

Izveidosim datu ievadu, kas saņem skaitli.

~~~python

skaitlis = int(input("Ievadi skaitli!"))

~~~

Ja mēģināsim ievadīt burtus, saņemsim kļūdu.

Pielietosim `try ... except` bloku, lai *noķertu* kļūdu

~~~python

try:
    skaitlis = int(input("Ievadi skaitli!"))
except:
    print("Tu kļūdījies! Tas nav skaitlis!")
else:
    print("Tavs skaitlis ir", skaitlis)

~~~

Ja dati nebūs derīgi, izvadīs kļūdas paziņojumu un `try` bloks neizpildīsies

Ja dati būs derīgi, izpildīsies `try` bloks un tad `else` bloks


Pamēģināsim paredzēt gadījumu, kad skaitli dala ar 0...

~~~python

sk1 = int(input("Ievadi skaitli!"))
sk2 = int(input("Ievadi skaitli!"))
try:
    dalijums = sk1/sk2
except:
    print("Ar nulli dalīt nedrīkst!")
else:
    print("Rezultāts ir", dalijums)

~~~

Ja otrais skaitlis būs 0, tad izdrukāsies teksts *Ar nulli dalīt nedrīkst!*

## OOP

Programmēšanā izdala divas lielās programmēšanas pieejas:

1. Procedurālā programmēšana (izmanto algoritmus un funkcijas);
2. Objektorientēta programmēšana (izmanto objektus un datu definīcijas objektā).

Ir arī citas...

OOP jeb objektorientēta programmēšana ir viena no programmēšanas paradigmām jeb programmēšanas pieejām. 
Šis programmēšanas veids ļauj kodu strukturēt objektos.

Var iedomāties, ka informācija tiek ielikta kastē un no tās izņemta vai apstrādāta.

Avots: StartIT



### Definēšana

OOP kopumā sastāv no klasēm, tāpat arī tas notiek Pythonā. 

Mēs datoram skaidri pasakām, ka programmēsim OOP veidā, izmantojot vārdu `class` un pēc tam raksta mūsu objekta nosaukumu.

~~~python

class Skolens:


~~~

Uz klašu nosaukumiem attiecas visi tie paši noteikumi, kuri uz mainīgo nosaukumu definēšanu.


Katru reizi, kad vēlamies izsaukt mūsu objektu, mēs definējam tā nosaukumu iekš jauna mainīgā, lai mainīgā nosaukums varētu tikt izmantots kā objekta savienojums ar tā iekšieni.

No šī brīža var uzskatīt, ka mainīgais satur mūsu definēto objektu.


~~~python

class Skolens:


skolena_objekts = Skolens()

~~~

Šobrīd mūsu objekts nesatur nekādu informāciju, tam nav metožu un vērtību.

### Objekta mainīgie

Visi mainīgie, kuri ir definēti objekta iekšienē nav pieejami ārpus objekta(tos nevar pa taisno, izvadīt vai izmantot kā tas ir ar parastajiem mainīgajiem), ja mēs tos ar kādu speciālu metodi neizsaucam. 

Mainīgos, kuri piederēs objektam, definē pašā objekta sākumā ar atkāpi.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"

skolena_objekts = Skolens()

~~~

Šajā piemērā, objektu izveidojot tā iekšienē, jau ir definēti trīs mainīgie `vecums`, `vards`,`uzvards`. Šie mainīgie nav pieejami ārpus objekta, ja tos speciāli neizsauc ar metodes palīdzību.

### Objekta metodes

Lai iegūtu informāciju no objekta ir jāizmanto objektā definētās `metodes`. Mēs izveidosim metodi, kura atgriezīs jau iepriekš definēto skolēna vecumu.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"

    def skolena_vards(): # metodes definēšana
        return self.vecums # metodes vērtības atgriešana

skolena_objekts = Skolens()

~~~

Mūsu objektam tika pievienota klāt funkcija ar nosaukumu `skolena_vards`, tai klāt ir divas iekavas, iekavās nekā nav, tas nozīmē, ka funkcijai nav parametru. 

Šo funkciju sauc par objekta metodi.

Funkcijas priekšā raksta vārdu `def`, kas Python programmēšanas valodā apzīmē funkciju.

Funkcijas iekšienē mēs redzam vārdu `return`, tas nozīmē, ka funkcija atgriezīs tās rezultātu nevis izvadīs rezultātu pa taisno konsolē.

Tiek rakstīts vārds `self`, kas liek mūsu programmai meklēt mainīgo šajā pašā objekta iekšienē `Skolens`. Pēc vārda `self` ir apzīmēts meklējamā mainīgā nosaukums, kas mūsu gadījumā ir `vecums`.

Vērtību, kuru iegūst konstrukcija `self.vecums` ir `18`, jo tādu vērtību mēs esam iedevuši pie mainīgā pašā objekta sākumā.

Šajā piemērā konsolē nekas netiks izvadīts, jo mēs to neprasam.

Lai izsauktu konkrētu metodi no objekta, izmanto iepriekš jau definēto mainīgo, mūsu gadījumā `skolena_objekts`, tad raksta punktu un metodes nosaukumu.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"

    def skolena_vards():
        return self.vecums

skolena_objekts = Skolens()

print(skolena_objekts.skolena_vards())

~~~

Konsoles izvads: `18`. Ja neizmantotu vārdu `print` un iekavas, tad vērtība netiktu izvadīta vispār.

### Objekta mainīgo vērtības uzstādīšana ar metožu palīdzību

Ir iespējams arī mainīt objekta mainīgo vērtības dinamiski ar metožu palīdzību, tad mēs izmantojam funkciju parametrus. To parasti dara koda izpildes laikā.

Veidojam jaunu funkciju iekš mūsu objekta, liekam tā nosaukumu kā `skolena_vards_uzstadit`, tad definējam divus parametrus - `self` un `vards_kaa_parametrs`.

`self` - Python programmēšanas valodas īpatnība, Python nemāk automātiski atrast objekta vērtības, mēs objekta īpašības dodam līdzi kā parametru `self`.

`vards_kaa_parametrs` - Mainīgais, kuru mēs no koda izsaukšanas vietas dosim kā vērtību.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"

    def skolena_vards():
        return self.vecums

    def skolena_vards_uzstadit(self, vards_kaa_parametrs):
        self.vards = vards

skolena_objekts = Skolens() 

skolena_objekts.skolena_vards_uzstadit("Artūrs") # Izsaucam funkciju no objekta, līdzi iedodam parametru - Artūrs. Funkcija nomaina objekta mainīgā vērtību.

print(skolena_objekts.skolena_vards()) # Izvada - Artūrs

~~~

### Objekta sākuma vērtību uzstādīšana no objekta definēšanas brīža

Mēs objekta pašā augšā esam definējuši 3 mainīgos `vecums`, `vards`,`uzvards` un pievienojuši tiem vērtības. Ir iespējams dot līdzi vērtības arī definējot pašu objektu.

Šādā gadījumā izmanto `konstruktoru`. Python programmēšanas valodā tas tiek definēts iekš objekta ar funkcijas nosaukumu `__init__` un funkcijas parametros dod sākuma vērtības.

Apskatīsim piemēru.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"
    def __init__(self, vards_ievade, uzvards_ievade,vecums_ievade):
        self.vards = vards_ievade
        self.uzvards = uzvards_ievade
        self.vecums = vecums_ievade

    def skolena_vards():
        return self.vecums

    def skolena_vards_uzstadit(self, vards_kaa_parametrs):
        self.vards = vards

skolena_objekts = Skolens("Laima","Plūme",25) 

print(skolena_objekts.skolena_vards()) # Izvada - Laima

~~~

Konstruktoram `__init__` ir 4 parametri.

`self` - Apzīmē paša objekta saturu, atsaucas uz sevi.

`vards_ievade` - Pirmais parametrs.

`uzvards_ievade` - Otrais parametrs.

`vecums_izvade` - Trešais parametrs.


Brīdī, kad definējam objektu, šīs trīs vērtības tiek ierakstītas iekavās kā funkcijas parametri. 

Konstruktors šīs vērtības saņem un izmantojot vārdu `self` nomaina vērtības jau iepriekš definētajiem mainīgajiem `vecums`,`vards`,`uzvards`.

Konstruktors palīdz iekustināt objektu ar gatavām no malas iedotām vērtībām. Piemēram, lietotājam jāievada spēles beigu skaitlis, tad objekts sāk savu darbu.

## Piemēri

[Bankomāts](#bankomats)

[UID Ģenerators](#uid-gen)

[Dators iedomājas skaitli..](#iedomajas-skaitli)

[Āboli](#aboli)

[Burtu skaitīšana](#burti)

### Bankomāts

Piemērā nodemonstrēts bankomāts, kas saņem un izdod naudu. Pin kods un bilance glabājas teksta failā `dati.txt`.

~~~python
fails = open("dati.txt", "r")
pin = fails.readline().strip()
bilance = fails.readline().strip()
fails.close()
bilance = int(bilance)

def pinParbaude():
    meginajumi = 3
    while meginajumi != 0:
        mansPin = input("Ievadi pin kodu!")
        if mansPin == pin:
            print("Pin kods pareizs!")
            izvelne()
            break
        else:
          meginajumi -= 1
          print("Nepareizs pin kods! Mēģini vēlreiz! Atlikušie mēģinājumi:", meginajumi)
    else:
        print("Konts bloķēts!")

def izvelne():
    print("***BANKOMĀTS***")
    print("Ko vēlies darīt?")
    print("1 < Izmaksa\n2 < Iemaksa\n3 < Atlikums\n4 < Mainīt pin kodu\n5 < Beigt darbu")
    izvele = int(input("Izvēlies darbību, ievadot skaitli!"))
    if izvele == 1:
        izmaksa()
    elif izvele == 2:
        iemaksa()
    elif izvele == 3:
        paraditAtlikumu()
    elif izvele == 4:
        mainitPin()
    elif izvele == 5:
        beigtDarbu()

def izmaksa():
    summa = int(input("Ievadi summu!"))
    global bilance
    bilance -= summa
    print("Saņem naudu!")
    izvelne()

def iemaksa():
    summa = int(input("Ievadi summu!"))
    global bilance
    bilance += summa
    print("Nauda iemaksāta!")
    izvelne()

def paraditAtlikumu():
    global bilance
    print("Tavs atlikums:", bilance)
    izvelne()

def mainitPin():
    global pin
    jaunaisPin = input("Ievadi jauno pin kodu!")
    if len(jaunaisPin) != 4:
      print("Operācija atcelta! Pin kodā jābūt 4 cipariem!")
    else:
      pin = jaunaisPin
      print("Pin kods nomainīts!")
    izvelne()

def beigtDarbu():
    global pin, bilance
    fails = open("dati.txt", "w")
    fails.write(str(pin)+"\n")
    fails.write(str(bilance))
    fails.close()
    print("Gaidīsim atkal!")

pinParbaude()
~~~

---

### Ābolu lasīšanas algoritms.

~~~python
import random
import time

def ejamPieKoka():
  print("Ejam līdz kokam...")
  time.sleep(1)
  print("Esam pie koka! Kas tālāk?")
  purinamKoku()

def purinamKoku():
  print("Purinam koku...")
  skaits = random.randrange(0, 30)
  print("Nokrita ", skaits, " āboli")
  lasamAbolus(skaits)

def lasamAbolus(skaits):
  for i in range(1, skaits+1):
    print("Paņemam ābolu...", i)
    time.sleep(1)
  else:
    print("Visi āboli salasīti!")
  darbsIzdarits()

def darbsIzdarits():
  print("Labs darbiņš!")

ejamPieKoka()
~~~

---

### UID ģenerātors

Šis kods ļauj mums iegūt unikālu lietotāja identifikātoru formātā `XXXXX-XXXXX-XXXXX-XXXXX` daļu daudzumu nosaka lietotājs.

Papildus kods ļauj arī ierakstīt CSV failā. Kodā atsāts 100000 ģenerators, kurā ir arī pārbaudes mehānisms.

~~~python
import time
import string
import random
def generate(cikdalas):
    parts = []
    chari = 6
    for r in range(cikdalas + 1):
        part = ""
        for x in range(chari + 1):
            if(x % 2):
                part = part + str(random.randint(1, 9))
            elif x == 5:
                part =part + int(time.time()*10.0)
            else:
                part = part + random.choice(string.ascii_letters)
        parts.append(part)
    return "-".join(parts)
testeris = []
f = open('csvfile.csv','w')
for x in range(100000):
    id = generate(6)
    if  id in testeris:
        print("ATRADA DUBLIKĀTU: ",   id, " REIZE", x )
        break
    f.write(id+'\n')
    testeris.append(generate(5))
f.close()
print("Darbība beigusies")
print("Kopa:", len(testeris))

~~~

### Dators iedomājās skaitli...

Dots piemērs spēlei, kurā dators ir iedomājies skaitli un lietotājam tas jāuzmin. Mēģinājumu skaits ir 3 mazāks nekā spēlē uzstādītais maksimālais skaitlis.
Spēles norise.

1. Tiek importēta bibliotēka `random`, lai varētu dators varētu "iedomāties" skaitli.
2. Divi mainīgie `max_skaitlis` un `min_skaitlis` - programmētājs uzstāda spēles robežas.
3. `skaitlis` - liekam datoram iedomāskaitli
4. `notiek` - spēles notikšanas "karogs" jeb mainīgais, kurā notiek spēles notikšanas stāvoklis. `True` - spēle notiek un `False` - spēle beigusies.
5. `max_meginajumi` - skaitlis, kurš parāda cik būs mēģinājumu
6. `meginajumi` - skaitītājs lietotāja mēģinājumiem.
7. `while notiek == True:` - spēles galvenais cikls, kurš atkārto skaitļa minēšanu.
8. `meginajumi = meginajumi + 1` - spēlētājam pieskaita vienu gājienu.
9. `ievade = int(input())` - Liekam spēlētājam ievadīt skaitli
10. Ja skaitlis ir vienāds ar datora iedomāto, tad paziņo, ka ir uzvara un spēle beidzas.
11. Ja skaitlis nav vienāds ar datora iedomāto, tad notiek pārbaude un tiek paziņots lielāks vai mazāks.
12. `if meginajumi == max_meginajumi:` Ja mēģinājumu skaits sasniegts - spēle beidzas un tiek izdrukāts iedomātais skaitlis.
13. Ja spēles stāvoklis ir beidzies(`if notiek == False:`), tad lietotājam jautā par spēles atsākšanu. 
14. Ja atbilde ir burts `y`, tad spēle tiek restartēta un mainīgie attiestatīti.
15. Ja atbilde nav burts `y` jeb visi citi gadījumi, tad spēle beidzas.

~~~python
import random
max_skaitlis = 5
min_skaitlis = 1
skaitlis = random.randint(min_skaitlis,max_skaitlis)
notiek = True
max_meginajumi = int(max_skaitlis / 3)
meginajumi = 0
print("Labdien! Esiet sveicināti manā minēšanas spēlē. Dators iedomāsies skaitli no ",min_skaitlis," līdz ",max_skaitlis," Tev ir ",max_meginajumi, " mēģinājumi" )
while notiek == True:
  print("Ievadi skaitli:")
  meginajumi = meginajumi + 1
  ievade = int(input())
  if skaitlis == ievade:
    print("Uzvara")
    notiek = False
  else:
    if ievade > skaitlis:
      print("Skaitlis ir mazāks")
    else:
      print("Skaitlis ir lielāks")
  if meginajumi == max_meginajumi:
    print("Spēle beigusies. Mēģinājumu skaits sasniegts.")
    print("Minamais skaitlis ir:",skaitlis)
    notiek = False
  if notiek == False:
    print("Vai Tu vēlies sākt no jauna? Ievadi y, ja vēlies turpināt")
    atbilde = input()
    if atbilde == "y":
      notiek = True
      meginajumi = 0
      skaitlis = random.randint(min_skaitlis,max_skaitlis)

~~~

Speles uzlabošanas variantā dažas vietas var aizvietot ar fukcijām.

---

### Burtu skaitīšana

Piemērā nodemonstrēts algoritms, kas dotam tekstam saskaita visus unikālos burtus un rezultātu ieraksta vārdnīcā.

~~~python
burti = {}
vards = "Anastasija"
for burts in vards: #caurskata burtus vārdā 
    if not burts in burti: #pārbauda, vai burts nav vārdnīcā
        burti[burts] = 0 #pievieno jaunu burtu vārdnīcā
    burti[burts] += 1 #palielina skaitu
        
print(burti)
~~~

Rezultāts:
{'A': 1, 'n': 1, 'a': 3, 's': 2, 't': 1, 'i': 1, 'j': 1}


## Papildus resursi

- [What is Python? Why Python is So Popular?](https://www.youtube.com/watch?v=Y8Tko2YC5hA&ab_channel=ProgrammingwithMosh)
- [Python mainīgie](https://realpython.com/python-variables/)
- [Python loops](https://www.learnpython.org/en/Loops)
- [Python projects](https://data-flair.training/blogs/python-project-ideas/)
- [Publiskie API](https://github.com/public-apis/public-apis)
- [SQL Lite un Python piemērs](https://github.com/krmu/SQLite_OOP)
- [Django piemērs - mini atzīmju izlikšanas sistēma](https://github.com/krmu/djangouni)

