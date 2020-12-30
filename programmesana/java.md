---
title: Java
description: Java programmēšanas valodas lietojums un praktiski piemēri
---

# Lietojums
## Sākums

```warning

Java programmēšanas valodā sāk ar klases definēšanu `1 Main`. Tad definē metodi `main` `(public static void main(String[] args)`

```

~~~java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
~~~

Lai izdrukātu vienkāršu tekstu izmantojam 
~~~java
System.out.println("Hello World");
~~~

Iekavās var būt mainīga nosaukums vai teksts pēdiņās.

## Mainīgo pierakstīšana

~~~java

int a, b, c;         // Tiek deklarēti 3 (a,b,c) skatiliski mainīgie bez vērtībām
int a = 10, b = 10;  // Tiek deklarēti 2 skatiliski mainīgie ar vērtībām
byte B = 22;         // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir Byte
double pi = 3.14159; // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir dubultas precizitātes decimāldaļa
char a = 'a';        // Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir simbols

~~~

## Mainīgo izdruka kombinējot ar tekstu

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

## Piemēri

### Pāra skatļa noteikšana
Vienkārša programma, kura nosaka vai skaitlis ir pāra vai nepāra pēc tā ievades.
~~~java
import java.util.Scanner;

public class EvenOdd {

    public static void main(String[] args) {

        Scanner reader = new Scanner(System.in);

        System.out.print("Ievad skaitli: ");
        int num = reader.nextInt();

        if(num % 2 == 0)
            System.out.println(num + " ir pāra skaitlis");
        else
            System.out.println(num + " nav pāra skaitlis");
    }
}
~~~
