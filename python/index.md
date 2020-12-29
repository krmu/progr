---
layout: page
title: Python programmēšanas valoda
description: ~
---
# Lietojums
## Funkciju definēšana

Python programmēšanas valodā funkcijas definē ar vārdu def.

~~~python
def FUNKCIJAS NOSAUKUMS():
    print("Funkcijas darbība")
~~~

Piemērs
~~~python
def hello():
    print("Sveika pasaule")
hello()
~~~

## Mainīgo pieraksts

Mainīgajiem nav jāpieraksta to veids. Piemēram, Java programmēšanas valodā jāraksta skatiļu mainīgajiem burti Int

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

SVARĪGI! Python kodā atdalīšana notiek līmeņos. Visi vienādie līmeņi tiek izpildīti pēc kārtas. Līmeņus ievieš ar TAB taustiņu vai SPACE spiežot 4 reizes, bet visā kodā jābūt vienādiem atdalītājiem, atsarpes vai tabulatori.

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

Kur data.txt ir faila nosaukums (jāatrodas tajā pašā mapē, kur atrodas .py fails), 'r' parametrs norāda, ka fails tiek lasīts - read. Savukārt, mainīgais dati saturēs masīvu ar rindām no faila. 

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

Mainīgais = ['pirmā teksta vērtība', 'otrā teksta vērtība',skaitlis1, utt. ]

Vārdnīcas mainīgais = {'atslega':'vertiba','atslega2':'vertiba2'}

Kur atslēga ir unikāla visā vārdnīcā.

Masīvu un vārdnīcu garumus nosaka ar šādām komandām:

print(len(Vārdnīcas mainīgais))

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
print(prieksmetusaisinajumi ['lv'])
~~~

Konsolē tiek izdrukāts: Latviešu valoda , jo vārdnīcas atslēga lv satur vērtību Latviešu valoda.

Vārdnīcas nolasīšana ciklā.

~~~python
prieksmetusaisinajumi = {'lv':'Latviešu valoda', 'inf':'Informātika'}
for x in prieksmetusaisinajumi:
    print(x)
~~~

X šajā gadījumā nodos konsolē vārdnīcas atslēgas.

# Piemēri
============

# UID ģenerātors

Šis kods ļauj mums iegūt unikālu lietotāja identifikātoru formātā XXXXX-XXXXX-XXXXX-XXXXX daļu daudzumu nosaka lietotājs.

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