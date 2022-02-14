---
layout: default
title: Piemēri
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 11
---
# Piemēri

[Bankomāts](#bankomats)

[UID Ģenerators](#uid-gen)

[Dators iedomājas skaitli..](#iedomajas-skaitli)

[Āboli](#aboli)

[Burtu skaitīšana](#burti)

### Bankomāts <a id="bankomats"></a>

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

### Ābolu lasīšanas algoritms. <a id="aboli"></a>

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

### UID ģenerātors <a id="uid-gen"></a>

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

---

### API pieprasījums

Ar Python palīdzību ir iespējams arī veidot API pieprasījumus uz vietnēm. Tiek veidots vienkāršs pieprasījums uz vietni  chucknorris.io. Mainīgais `r` sevī satur pieparsījumu un tā saturu. Tiek izmantota funkcija `.json()` kas ļauj pārveidot pieprasījumu par vārdnīcu PYTHON valodā. 

~~~python

import requests

r = requests.get(url='https://api.chucknorris.io/jokes/random')
t = r.json()

print("Šīs dienas joks:",t["value"])

~~~

Atgriežot saturu, pie joka mēs varam tikt izmantojot komandu `t["value"]` jeb vārdnīcas vienību `value`.

--

### Dators iedomājās skaitli... <a id="iedomajas-skaitli"></a>

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

### Burtu skaitīšana <a id="burti"></a>

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