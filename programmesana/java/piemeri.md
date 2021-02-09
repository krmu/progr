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

public class NeparaPara {

    public static void main(String[] args) {

        Scanner reader = new Scanner(System.in);

        System.out.print("Ievadi skaitli: ");
        int skaitlis_no_ievades = reader.nextInt();

        if(skaitlis_no_ievades % 2 == 0)
            System.out.println(skaitlis_no_ievades + " ir pāra skaitlis");
        else
            System.out.println(skaitlis_no_ievades + " nav pāra skaitlis");
    }
}
~~~
