---
layout: default
title:  Mērvienības
grand_parent: Programmēšana
parent: CSS
nav_order: 4
---

# Mērvienības

Mērvienības iedalās absolūtajās un relatīvajās mērvienībās. Absolūtās mērvienības lieto, ja nepieciešams elementam iestatīt fiksētu un nemainīgu izmēru. Relatīvās mērvienības ir atkarīgas no kopējā lapai vai elementam atvēlētā laukuma.

Biežāk lietotās absolūtās mērvienības:

|Mērvienība        | Pielietojums                                                                     |
|------------------|----------------------------------------------------------------------------------|
|`px` jeb pikseļi  | lieto, lai iestatītu izmēru attēlam, div blokam un citiem grafiskiem elementiem  |
|`pt` jeb punkti   | lieto burtu izmēram                                                              |

Relatīvās mērvienības:

|Mērvienība | Pielietojums                                                                     |
|-----------|----------------------------------------------------------------------------------|
|`em`       | lieto burtu izmēram (2em nozīmē 2x lielāki burti)                                |
|`%`        | relatīvs attiecībā pret augstākstāvošo *(parent)* elementu                       |


## Piemērs

Šajā gadījumā attēls aizņems 50% no visa tam atvēlēta laukuma.
~~~html
<body>
    <img id="attels" src="ainava.jpg">
</body>
~~~
~~~css
#attels {
    width: 50%;
}
~~~
