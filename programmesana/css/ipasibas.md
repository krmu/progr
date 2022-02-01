---
layout: default
title:  Īpašības
grand_parent: Programmēšana
parent: CSS
nav_order: 4
---

# Biežāk lietotās īpašības

~~~css
p, a, h1 {
    font-size: 16pt; /* Burtu izmērs */
    font-family: "Times New Roman"; /* Burtu stils */
    font-weight: bold; /* Treknraksts */
    font-style: italic; /* Slīpraksts */
    letter-spacing: 10px; /* Atstatums starp burtiem */
    word-spacing: 30px; /* Atstatums starp vārdiem */

    /* Pasvītrojums un pārsvītrojums */
    text-decoration: none | underline | overline | line-through; 
    text-decoration-color: black; 
    text-decoration-style: solid | wavy | dotted | dashed | double;
}

table {
    border-collapse: collapse; /* Apvieno šūnu, rindu un tabulas ierāmējumu */
    border: 1px solid black; /* Iestata 1px biezu nepārtrauktu rāmja līniju */
}

img, div {
    width: 100px; /* Platums */
    height: 200px;  /* Augstums */
}

div {
    border-radius: 10px; /* Noapaļoti stūri */
    border-radius: 50%; /* Div bloks kā aplis */
    background-color: red; /* Fona krāsa */
    background: linear-gradient(to right, red, yellow); /* Fons kā krāsu pāreja */
}

* {
    padding: 5px; /* Iestata attālumu līdz ierāmējumam */
    margin: 10px; /* Iestata attālumu līdz blakus elementiem */
}
~~~
