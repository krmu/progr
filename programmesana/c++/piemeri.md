---
layout: default
title: Piemēri
description: ~
grand_parent: Programmēšana
parent: C++
nav_order: 7
---

### Apelsīni

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
