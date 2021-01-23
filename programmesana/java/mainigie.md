---
layout: default
title: Mainīgie
description: ~
grand_parent: Programmēšana
parent: Java
nav_order: 2
---
# Mainīgo pierakstīšana

~~~java

int a, b, c;         // Tiek deklarēti 3 (a,b,c) skatiliski mainīgie bez vērtībām
int a = 10, b = 10;  // Tiek deklarēti 2 skatiliski mainīgie ar vērtībām
byte B = 22;         // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir Byte
double pi = 3.14159; // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir dubultas precizitātes decimāldaļa
char a = 'a';        // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir simbols

~~~

# Mainīgo izdruka kombinējot ar tekstu

Ja ir tikai viens mainīgais: 
~~~java
System.out.print(mainiganosaukums);
~~~

Ja ir savs teksts un mainīgais: 
~~~java
System.out.print("Jūsu teksts pēdiņās"+mainiganosaukums);
~~~
Ja ir savs teksts, kurš  atkārtojas un ir mainīgais: 
~~~java
System.out.print(mainīgais+ " šis ir mans teksts"+otrsmainigais);
~~~
Matemātiskās darbības: 
~~~java
System.out.print("Mainīgo summa:" + (mainigais+mainigais) );
~~~

Pirmstam mainīgie ir definēti un komanda tiek izmantota kopējā klasē.
