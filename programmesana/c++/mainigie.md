---
layout: default
title:  Mainīgie
description: ~
grand_parent: Programmēšana
parent: C++
nav_order: 2
---

# Mainīgo pierakstīšana

~~~c++

int a, b, c;         // Tiek deklarēti 3 (a,b,c) skatiliski mainīgie bez vērtībām
int a = 10, b = 10;  // Tiek deklarēti 2 skatiliski mainīgie ar vērtībām
byte B = 22;         // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir Byte
double pi = 3.14159; // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir dubultas precizitātes decimāldaļa
char a = 'a';        // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir simbols

~~~

# Mainīgo izdruka kombinējot ar tekstu

Mainīgos pieliek klāt izdrukā ar `<<` simboliem.
~~~c++
#include <iostream>
using namespace std;

int a = 10; 

int main() {
  cout << "Hello World! " << a;
  return 0;
}

~~~