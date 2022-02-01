---
layout: default
title:  Aktīvie selektori
grand_parent: Programmēšana
parent: CSS
nav_order: 4
---

# Aktīvie selektori

Aktīvie selektori jeb pseido-klases ir selektori, kas nosaka, kā elements reaģēs uz noteiktām darbībām, piemēram, uzbraukšana ar kursoru vai klikšķis uz saites.

Apskatīsim piemēru ar hipersaiti...

~~~css
a:link {
    color: blue; /* Krāsa neapskatītai saitei */
}

a:visited {
    color: purple; /* Krāsa apskatītai saitei */
} 
~~~

Citas biežāk lietotās pseido-klases ir `active`, `focus` un `hover`.

Ar `active` var iestatīt saites izskatu klikšķa brīdī.
Ar `focus` iestata īpašības atlasītiem elementiem, piemēram, `input` laukam datu ievades brīdī.
Ar `hover` iestata īpašības, kas stājas spēkā, uzbraucot elementam ar peles kursoru.

Dotajā piemērā pogas teksts palielinās 1.5x, ja tam uzbraucam ar kursoru.
~~~css
button:hover {
    font-size: 1.5em;
}
~~~

Ievades lauks iegūs sarkanu rāmi, ja to atlasīs.
~~~css
input:focus {
    border:1px solid red;
}
~~~

Ar `::first-letter` selektoru iespējams atsevišķi nodefinēt pirmā burta stilu rindkopai vai virsrakstam.
~~~css
p::first-letter {
    font-size: 3em;
    color: orange;
    text-shadow: 1px 1px grey;
}
~~~


