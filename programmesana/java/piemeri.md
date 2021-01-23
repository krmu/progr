---
layout: default
title: Piemēri
description: ~
grand_parent: Programmēšana
parent: Java
nav_order: 4
---

# Piemēri

## Pāra skaitļa noteikšana
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
