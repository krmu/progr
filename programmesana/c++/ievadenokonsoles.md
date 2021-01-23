---
layout: default
title: Ievade no konsoles
description: ~
grand_parent: Programmēšana
parent: C++
nav_order: 4
---
# Ievade no konsoles

C++ prog. valodā ir iespējams iegūt rezultātu arī no lietotāja ievades. Lai iegūtu lietotāja ievadi, jāizmanto komanda `cin`.

~~~c++
#include <iostream>
using namespace std;

int main ()
{
  int i;
  cout << "Ievadiet vecumu";
  cin >> i;
  cout << "Ievadītais skaitlis ir " << i;
  cout << " un reizinot to ar divi iegūst " << i*2 << ".\n";
  return 0;
}
~~~

Šajā piemērā arī pieliekam klāt matemātisko darbību `i*2`, šajā gadījumā ievadītais skaitlis tiek reizināts ar divi. ` ".\n"` nozīmē, ka tiek sākta jauna rinda.
