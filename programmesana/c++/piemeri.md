---
layout: default
title: Piemēri
description: ~
grand_parent: Programmēšana
parent: C++
nav_order: 7
---

[Apelsīni](#apelsini)

[Ārmstronga skaitlis](#armstr)

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