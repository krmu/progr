---
title: Python
description: Python programmēšanas valodas lietojums un praktiski piemēri
---
# Lietojums
## Funkciju definēšana

Python programmēšanas valodā funkcijas definē ar vārdu def.

~~~python
def FUNKCIJAS_NOSAUKUMS():
    print("Funkcijas darbība")
~~~

Piemērs
~~~python
def hello():
    print("Sveika pasaule")
hello()
~~~

## Mainīgo pieraksts

Mainīgajiem nav jāpieraksta to veids. Piemēram, Java programmēšanas valodā jāraksta skatiļu mainīgajiem burti `Int`.

~~~python

Skaitls = 1

Tekstuāls mainīgais = "Šis ir teksta mainīgais"

Masīvs = [1,2,3,4,5]

~~~

Piemērs:

~~~python
x = 1

vards = "Mans vārds ir Pēteris"

atzimes = [1,2,3,4,5]

valodas = {'LV': 'Latviešu valoda','ENG': 'Angļu valoda'}
~~~

## Nosacījumu veidošana

Python programmēšanas valodā nosacījumi teik veidoti šadā veidā:

~~~warning
Python kodā atdalīšana notiek līmeņos. Visi vienādie līmeņi tiek izpildīti pēc kārtas. Līmeņus ievieš ar `TAB` taustiņu vai `SPACE` spiežot 4 reizes, bet visā kodā jābūt vienādiem atdalītājiem, atsarpes vai tabulatori.
~~~
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
Piemēri:

~~~python
x = 0
y = 5
if x < y:  
    print('x ir mazāks nekā y')

if y < x: 
    print('y ir mazāks nekā x')
if y in ['foo', 'bar', 'baz']: 
    print('y atrodas masīvā')
~~~

## Failu - lasīšana, rakstīšana

Python programmēšanas valoda ļauj nolasīt failus un to saturu.

~~~python
with open('data.txt', 'r') as f:
    dati= f.read()
~~~

Kur data.txt ir faila nosaukums (jāatrodas tajā pašā mapē, kur atrodas `.py` fails), `r` parametrs norāda, ka fails tiek lasīts - read. Savukārt, mainīgais dati saturēs masīvu ar rindām no faila. 

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
## Masīvi / vārdnīcas

Šajā gadījumā tiek ierakstīts failā teksts - pievienojot faila beigās. 

Python programmēšanas valodā ir iespēja definēt masīvus un vārdnīcas.

Masīva definēšana:

`Mainīgais = ['pirmā teksta vērtība', 'otrā teksta vērtība',skaitlis1, utt. ]

Vārdnīcas mainīgais = {'atslega':'vertiba','atslega2':'vertiba2'}`

```warning

Kur atslēga ir unikāla visā vārdnīcā.
```
Masīvu un vārdnīcu garumus nosaka ar šādām komandām:

`print(len(Vārdnīcas mainīgais))`

Piemēram:
~~~python
prieksmeti = ['Latviešu valoda', 'Krievu valoda', 'Informātika']

atzimes = [10,9,5,4,5,3]

prieksmetusaisinajumi = {'lv':'Latviešu valoda', 'inf':'Informātika'}
~~~
Lai iegūtu konrētu vērtību no masīva:

Python masīva vērtības sāk skaitīt no 0
~~~python
atzimes = [10,9,5,4,5,3]
print(atzimes[1])
~~~
Konsolē tiek izdrukāts: 9, jo sākot skaitīt no 0 iegūstam, ka 9 ir pirmais elements.
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

X šajā gadījumā nodos konsolē vārdnīcas atslēgas.

## Ārējās bibliotēkas

Python programmēšanas valoda atļauj izmantot ārējās bibliotēkas. Lai to izdarītu ir jāizmanto PIP jeb Python bibliotēku pārvaldnieku. 
Lai instalētu bibliotēku:

~~~python

pip install [bibliotēka]

~~~
Piemēram instalēsim Easy UI bibliotēku

~~~python

pip install easyui

~~~

## Piemēri

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

### API pieprasījums

Ar Python palīdzību ir iespējams arī veidot API pieprasījumus uz vietnēm. Tiek veidots vienkāršs pieprasījums uz vietni  chucknorris.io. Mainīgais `r` sevī satur pieparsījumu un tā saturu. Tiek izmantota funkcija `.json()` kas ļauj pārveidot pieprasījumu par vārdnīcu PYTHON valodā. 

~~~python

import requests

r = requests.get(url='https://api.chucknorris.io/jokes/random')
t = r.json()

print("Šīs dienas joks:",t["value"])

~~~

Atgriežot saturu, pie joka mēc varam tikt izmantojot komandu `t["value"]` jeb vārdnīcas vienību `value`.

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