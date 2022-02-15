---
layout: default
title: Funkcijas
description: ~
grand_parent: Programmēšana
parent: C++
nav_order: 6
---

### Funkcijas 

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
{: .alert .alert-warning}

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

![cpp_funkcija](/media/cpp_function.png)
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

`sk1` un `sk` šajā gadījumā ir argumenti, kurus padodam funkcijai, kura tos saņem kā parametrus `a` un `b`.

Mainīgais `summa` saņem funkcijas atgriezto rezultātu `c`.

Var teikt, ka parametri pārmanto argumentu vērtības.
{: .alert .alert-warning}








