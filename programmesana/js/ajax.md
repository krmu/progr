---
layout: default
title:  AJAX
description: JavaScript programmēšanas valodas lietojums un praktiski piemēri
grand_parent: Programmēšana
parent: JavaScript
---

# AJAX 

AJAX jeb Asynchronous JavaScript and XML ir veids kā mājaslapā iegūt informāciju lapu nepārlādējot tādējādi ietaupot servera resursus. AJAX ļauj nomainīt saturu mājaslapas elementā lapu nepārlādējot. Piemēram, nomaina tabulas saturu klientam nospiežot pogu vai meklētājs, kurā lietotājs ieraksta vārda daļu un serveris atgriež atpakaļ visus ierakstus, kuri atbilst šim vaicājumam.


AJAX nav programmēšanas valoda.
{: .alert .alert-danger}


AJAX pieprasījumus var veidot izmantojot `jQuery` bibliotēku vai bez tās.

Pirmais piemērs bez.

~~~js
let xhttp = new XMLHttpRequest(); // Tiek definēta metode, kura tiks izmantota
  xhttp.onreadystatechange = function() { // Kad metode ir gatava jeb ielādēta tiek izpildīda funkcija
    if (this.readyState == 4 && this.status == 200) { // Ja funckija ir veiksmīga un statusa kods ir 200, kas nozīme OK
      document.getElementById("demo").innerHTML = this.responseText; // Dokumenta elementā `demo` tiek ielādeta atbilde no faila 
    }
  };
  xhttp.open("GET", "ajax_info.txt", true); // Izpilda `GET` pieprasījumu uz failu ajax_info.txt
  xhttp.send();
~~~

Otrais piemērs, izmantojot `jQuery` bibliotēku.


Pirms izmantot šo piemēru, lapā jābūt ielādētai Jquery bibliotēkai. [jQuery](https://jquery.com/)
{: .alert .alert-warning}


Ielāde lapas galvenē.
~~~html

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
~~~

Pats pieprasījums

~~~js

$.ajax('https://manaadrese.nav/getdata',   // Pieprasījuma adrese
    {
        success: function (data, status, xhr) {//  Atbilde, ja pieprasījums ir veiksmīgs
            $('p').append(data); // Atrodam lapā paragrāfu un pievienojam iegūtos datus
         }
    });

~~~