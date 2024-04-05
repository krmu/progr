---
title:  C++
---

## Ievads

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

## Cikli

C++ progr. valodā eksistē divu veidu cikli - noteiktie `for` un nenoteiktie `while`.

Nenoteiktais cikls.
~~~c++
int i = 0;
while (i < 5) { //cikla deklarācija
  cout << i << "\n"; //izvads
  i++; //palielinātājs
}
~~~
Cikls darbosies kamēr mainīgais `i` nebūs sasniedzis vērtību 5.

Noteiktā cikla piemērs.

~~~c++
for (int i = 0; i < 5; i++) {
  cout << i << "\n";
}
~~~
Ciklam ir īsāks pieraksts un doti iekavās mainīgie: `(cikla sākums, cikla darbības ilgums, cikla solis)`. Cikla solis šajā piemērā ir 1.

Cikliem pielieto operatorus `break` un `continue`.

### Break

`break` pārtrauc ciklu pie konkrēta nosacījuma.

~~~cpp
while (i < 5) {
  cout << i << "\n";
  i++;
  if (i == 3) { break; }
}
~~~

Šajā gadījumā cikls apstāsies, mainīgajam i sasniedzot vērtību 3.

### Continue

~~~cpp
int i = 0;
while (i < 5) {
  i++;
  if (i == 3) { continue; }
  cout << i << "\n";
}
~~~

Izpildoties `continue`, cikls pāriet nākamajā iterācijā. Tas nozīmē, ka skaitlis 3 neizdrukāsies ekrānā.

Šajā gadījumā sazarojums nedrīkst būt pirms palielinātāja i++, jo tādā gadījumā būtu bezgalīgs cikls!


## Funkcijas 

Jebkurai C++ programmai ir galvenā **main()** funkcija, kas satur programmas kodu.

Ja visu kodu rakstīs vienā funkcijā, kods būs nepārskatāms un grūti lasāms, tāpēc kodu sadala atsevišķās funkcijās un katra no tām veic (realizē) savu konkrēto uzdevumu.

### Funkcijas deklarācija

C++ valodā funkcijas deklarē divējādi:
* prototips, tad izsaukums, tad realizācija
* realizācija, tad izsaukums

Funkciju pieraksta sekojoši:

~~~cpp
datu-tips nosaukums(param1, param2) {
    //f-jas realizācija
}
~~~

Deklarācijas sākumā raksta atgriežamās vērtības datu tipu. Tie var būt `int`, `float`, `double`, `char`, `string` un `bool`.

Ja funkcija vērtību neatgriež, norāda tukšo datu tipu `void`!

### Funkcija bez parametriem

Apskatīsim piemēru...

~~~cpp

void vaiLielaksPar10(int x) {
    if (x > 10) {
        cout << "Lielāks par 10!" << endl;
    }
    else {
        cout << "Nav lielāks par 10!" << endl;
    }
}

int main () {
    int skaitlis;
    cin >> skaitlis;
    vaiLielaksPar10(skaitlis);
}

~~~

Šajā piemērā funkcija pati izdrukā ekrānā rezultātu un neko neatgriež, tāpēc f-jas deklarācijā raksta `void`.

### Funkcija ar parametriem

Funkcija šajā gadījumā ir kā mehānisms, kas saņem datus, tos apstrādā un atgriež rezultātu.

![cpp_funkcija](/cpp_function.png)
Izmantotais attēls: en.wikipedia.org

~~~cpp

int saskaitisana(int a, int b) {
    int c = a + b;
    return c;
}

int main() {
    int sk1 = 5, sk2 = 3;
    int summa = saskaitisana(sk1, sk2);
    cout << summa << endl;
}

~~~

`sk1` un `sk2` šajā gadījumā ir argumenti, kurus padodam funkcijai, kura tos saņem kā parametrus `a` un `b`.

Var teikt, ka parametri pārmanto argumentu vērtības.

Mainīgais `summa` saņem funkcijas atgriezto rezultātu `c`.

Mainīgais, kas deklarēts funkcijā, ārpus tās neeksistē!

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


## Papildus resursi

- [Basic Input/Output](http://www.cplusplus.com/doc/tutorial/basic_io/)
- [Mainīgie](https://www.w3schools.com/cpp/cpp_variables.asp)
- [Komentāri](https://www.w3schools.com/cpp/cpp_comments.asp)
- [Prograbs.lv](http://prograbs.lv/?cat=learn&lang=1&t=2&st=1)
- [Tiešsaistes kompilators](https://www.onlinegdb.com/online_c++_compiler)

[Apelsīni](#apelsini)

[Ārmstronga skaitlis](#armstr)

## Piemēri

### Apelsīni <a id="apelsini"></a>

Dotajā piemērā programma prasa ievadīt apelsīnu cenu un naudas bilanci, un aprēķina, cik pilnus kg apelsīnu var nopirkt, kā arī parāda naudas atlikumu.

Tā kā nepieciešams zināt tikai pilnus kg apelsīnu, tad f-ja atgriež tikai veselo daļu no rezultāta.

~~~cpp
#include <iostream>
using namespace std;

int aprekinaDaudzumu(float cena, float kapitals){
    int daudzums = 0;
    if (kapitals >= cena) {
        daudzums = kapitals / cena;
    }
    else { 
        cout << "Nepietiek naudas!" << endl; 
    }
    return daudzums;
}

int main() {
    float cena, kapitals;
    cout << "Ievadi cenu kilogramam apelsīnu!" << endl;
    cin >> cena;
    cout << "Ievadi pieejamās naudas daudzumu!" << endl;
    cin >> kapitals;
    int rezultats = aprekinaDaudzumu(cena, kapitals);
    
    if (rezultats > 0) { 
        float atlikums = kapitals-rezultats*cena;
        cout << "Var nopirkt " << rezultats << " pilnus kg apelsīnu un pāri paliek " << atlikums << " eiro."; 
    }
}
~~~

---

### Ārmstronga skaitlis <a id="armstr"></a>

Naturālu n ciparu skaitli sauc par Ārmstronga skaitli, ja tas sakrīt ar savu ciparu n-to pakāpju summu. 

Apskatīsim programmu, kas nosaka, vai ievadītais skaitlis ir Ārmstronga skaitlis.

~~~cpp
#include <iostream>
#include <string>
#include <math.h>
using namespace std;

int main() {
  int sk, summa = 0;
  cout << "Ievadi skaitli!" << endl;
  cin >> sk;
  string sk_str = to_string(sk);
  int n = sk_str.size();
  if (n > 50) {
    cout << "Pārāk liels skaitlis!" << endl;
  }
  else {
    for (int i = 0; i < n; i++) {
      summa += pow(int(sk_str[i]) - 48, n);
    }
  }

  if (summa == sk) {
    cout << "IR";
  }
  else {
    cout << "NAV!";
  }
}
~~~

Ar `n` apzīmē ciparu skaitu ievadītajā skaitlī. 

Ja ievadītais skaitlis nav garāks par 50 cipariem, sākas cikls, kurš citu pēc cita pārbauda visus ciparus. 

Katru ciparu kāpina n-tajā pakāpē, izmantojot funkciju `pow()` no `<math.h>` bibliotēkas un rezultātu pieskaita mainīgajam `summa`.

Beigās pārbauda, vai summa ir vienāda ar ievadīto skaitli. Ja tā ir, tad skaitlis ir Ārmstronga skaitlis un programma izvada "IR", citādi izvada "NAV".