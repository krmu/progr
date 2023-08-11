---
layout: default
title: SQLite
description: ~
parent: Datu bāzes
nav_order: 5
---
# SQLite

SQLite ir atvieglots SQL paveids, jo datu bāzei nav nepieciešams serveris un tā var glabāties datnē ar paplašinājumu `.sqlite`. Tas rada zināmus drošības riskus, bet atvieglo datu bāzes izstrādi un testēšanu.

Lai darbotos ar SQLite un līdzīgām datu bāzēm, jāzina dažas svarīgākās komandas

~~~sql
CREATE TABLE preces;
-- veido tabulu ar doto nosaukumu

DROP TABLE preces;
-- dzēš tabulu ar doto nosaukumu un datus no tās

INSERT INTO preces (nosaukums, cena, daudzums) VALUES ("Persiks", 0.40, 3);
-- ievieto tabulā jaunu ierakstu ar dotajām vērtībām

SELECT * FROM preces WHERE cena > 1.20;
-- atlasa preces, kurām cena lielāka par 1.20; izvada visus laukus

SELECT nosaukums FROM preces WHERE nosaukums LIKE 'Z%';
-- atlasa preces, kurām nosaukums sākas ar Z; izvada tikai nosaukumus 

SELECT * FROM preces ORDER BY cena DESC LIMIT 5;
-- atlasa 5 dārgākās preces, izvada visus laukus

DELETE FROM preces WHERE daudzums = 0;
-- dzēš no tabulas tās preces, kurām daudzums ir 0
~~~

Komandu var rakstīt vairākās rindās, bet tās beigās vienmēr jālieto semikols!
{: .alert .alert-warning}
