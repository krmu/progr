---
title: CSS
description: ~
---

# Lapa par CSS
## Ievads

CSS jeb Cascading Style Sheets ir veids kā rakstot dažādus noteikumus piešķirt izskatu HTML elementiem lapā.

## Stila piešķiršana elementam

Ir divi veidi kā piešķirt stilu elementam:
1. Pievienojot stila noteikumu pie paša elementa;
2. Definējot stila failu/stila birkas pašā lapā.

Piešķirot stilu kādam elementam to raksta atribūtā `style`. 

Ar visiem pieejamajiem stila definējumiem var iepazīties [šeit](https://www.w3schools.com/cssref/)

Piemērs. Pievienojam elementam fona krāsu `background-color` un teksta krāsu `color`, un izmēru `font-size`. 

~~~html
<p style="backround-color:red;color:white;font-size:20px"> Paragrāfs ar sarkanu fonu un baltu tekstu</p>
~~~
~~~warning
Šajā piemērā stila noteikumi darbosies tikai uz šo elementu.
~~~

Otrs veids ir definēt stilu kā failu vai stila birku dokumentā. 

Piemērs. Izveidojam stila birkas HTML dokumentā. Un uzstādam visus tos pašus noteikumus.

~~~html
<style>
    p{
        backround-color:red;
        color:white;
        font-size:20px;
    }
</style>
~~~
~~~warning
Šajā piemērā stila noteikumi darbosies uz visiem `p` elementiem.
~~~

Stila failu definē ar paplašinājumu `.css` un ievieto lapā ar šādu birku:

~~~html
 <link rel="stylesheet" href="manstils.css">
~~~

~~~note
Stila faila ievietošanu veic lapas galvenē jeb `<head>` birkās. 
~~~

Stila noteikumu izskats stila failā:
~~~css
p{
    backround-color:red;
    color:white;
    font-size:20px
}
~~~

## Stila piešķiršana elementam pēc tā identifikatora vai klases

Iepriekšējā nodaļā apskatījām piemēru kā var piešķirt stilu konkrētam elementam vai viena veida elementiem, piemēram, paragrāfiem.

Ir arī veids, kurā var piešķirt stilus konkrētiem elementiem tos grupējot pēc klases vai identifikatora.

Lai pievienotu stilu elementam pēc tā identifikatora `id`.

Nodefinēsim paragrāfu ar identifikatoru `zalu`.

~~~note
Klases un identifikātorus veido programmētājs.
~~~

~~~html
<p id="zalu">Paragrāfs</p>
~~~

Lai atlasītu šo elementu pēc identifikatora stila failā jāizmanto tā nosaukums un restīte `#`.

~~~css
#zalu{
    backround-color:red;
    color:white;
    font-size:20px
}
~~~

Tieši tāpat var atlasīt visus elementus pēc tā klases. Tad izmanto atribūtu `class`. Restītes vietā izmanto punktu.

~~~html
<p class="zalu">Paragrāfs</p>
~~~

~~~css
.zalu{
    backround-color:red;
    color:white;
    font-size:20px
}
~~~

Elements var saturēt vairākas klases.

~~~html
<p class="zalu centret">Paragrāfs</p>
~~~

