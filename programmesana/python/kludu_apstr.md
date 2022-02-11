---
layout: default
title: Kļūdu apstrāde
description: ~
grand_parent: Programmēšana
parent: Python
---

# Kļūdu apstrāde

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