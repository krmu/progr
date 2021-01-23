---
layout: default
title:  Ievads
description: ~
grand_parent: Programmēšana
parent: C++
nav_order: 1
---

# Ievads

C++ programmēšanas valodas kods ir jākompilē. Lai kompilētu C++ kodu var izmantot programmu [CodeBlocks](http://www.codeblocks.org/). 

Pamācība pirmajai izveides reizei var skatīt [šeit](http://wiki.codeblocks.org/index.php/Creating_a_new_project).

Pati vienkāršākā C++ programma sastāv no vienas galvenās funkcijas `main`. Šī funkcija ir pats pamats, kurā tad mēs arī liekam iekšā savu saturu.

~~~c++
int main(){
 
}

~~~

Izdrukāsim vienkāršu vārdu konsole.

~~~c++
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
~~~

`#include <iostream>` šī rinda mums parāda, ka tiek izsaukta ārējā bibliotēka `iostream`, kura ļauj mums izdrukāt tekstu konsolē.

`using namespace std;` ļauj mums lietot tikai vārdu `cout` izdrukājot tekstu konsolē, ja šo rindu neliek, tad izdruka veidojas šādi: `std::cout << "Hello World!";`