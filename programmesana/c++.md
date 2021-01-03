---
title: C++
description: C++ programmēšanas valodas lietojums un praktiski piemēri
show_in_menu: false
---
![pythonlogo](/media/c++logo.png){: .logoval}


# Lietojums
## Sākums

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

## Mainīgo pierakstīšana

~~~c++

int a, b, c;         // Tiek deklarēti 3 (a,b,c) skatiliski mainīgie bez vērtībām
int a = 10, b = 10;  // Tiek deklarēti 2 skatiliski mainīgie ar vērtībām
byte B = 22;         // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir Byte
double pi = 3.14159; // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir dubultas precizitātes decimāldaļa
char a = 'a';        // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir simbols

~~~

## Mainīgo izdruka kombinējot ar tekstu

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

## Loģiskie operatori

| Operators | Apraksts    | Piemērs  |
|:-----|:------------|:------------|
| ==   | Vienāds     |  4 == 4        |
| !=   | Nav vienāds | 4  != 3     |
| >    | Lielāks     | 4 > 3|
| >=   | Lielāks vienāds       |  |
| <    | Mazāks       | 4 < 5 |
| <=   | Mazāks vienāds |  |
| &&   | Un (and)    | 4 && 4 |
| &#124;&#124; | vai (or)	 | saldējums vai medus |

## Ievade no konsoles

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

## Cikli

C++ progr. valodā eksistē divu veidu cikli - noteiktie(`for`) un nenoteiktie(`while`).

Nenoteiktais cikls.
~~~c++
int i = 0;
while (i < 5) {
  cout << i << "\n";
  i++;
}
~~~
Cikls darbosies kamēr mainīgais `i` nebūs sasniedzi vērtību 5.

Noteiktā cikla piemērs.

~~~c++
for (int i = 0; i < 5; i++) {
  cout << i << "\n";
}
~~~
Ciklam ir īsāks pieraksts un doti iekavās mainīgie: `(cikla sākums, cikla darbības ilgums, cikla solis)`. Cikla solis šajā piemērām ir 1.
## Papildus resursi

- [Basic Input/Output](http://www.cplusplus.com/doc/tutorial/basic_io/)
- [Mainīgie](https://www.w3schools.com/cpp/cpp_variables.asp)
- [Komentāri](https://www.w3schools.com/cpp/cpp_comments.asp)
