---
layout: default
title: Kārtošana
description: ~
grand_parent: Datu bāzes
parent: Paņēmieni
---

# Kārtošana

Ja mēs strādājam ar datubāzēm mums ir vairāki paņēmieni kā sakārtot datus.


## Deterministiska sakārtošana

Šis kārtošanas paņēmiens ir vislabākais,jo nepieciešams, lai dati **vispār nekad nemaina vietu**.

**Īsumā:** kārtojot pēc 1 kolonas un `id` rezultāti vienmēr būs tajā pašā vietā

### 1 kolona

Mums ir datu bāze un mēs kārtojam pēc kolonas `first_name`:

| id | first_name | last_name | birthday |
| ---- | ---- | ---- | ---- |
| 2 | Aaron | Francis | 1988-02-14 |
| 589 | Aaron | Streich | 1982-06-29 |
| 13704 | Aaron | Braun | 1974-12-10 |
| 8441 | Aaron | Kreiger | 1997-01-27 |
| 9179 | Aaron | Wolf | 1985-06-04 |
| 10970 | Aaron | Reichert | 1998-11-03 |
| 13082 | Aaron | Collier | 1980-10-26 |
| 3896 | Aaron | Corkery | 1979-06-04 |
| 19399 | Aaron | Watsica | 2001-10-21 |
| 25995 | Aaron | Runte | 1979-01-02 |

Kā mēs redzam, ir ļoti daudz ieraksti uz vārda "Aaron", un ar katru vaicājumi tie dati mainīs vietu. **Tā nav deterministiska sakārtošana**.

### 2 kolonas

Ar vienu kolonu nepietiek, jo tajā ierakstu vērtība var atkārtoties. Tad kā būtu ar `first_name, last_name`?

| id | first_name | last_name | birthday |
| ---- | ---- | ---- | ---- |
| 2 | Aaron | Abbott | 1988-02-14 |
| 589 | Aaron | **Anderson** | 1982-06-29 |
| 13704 | Aaron | **Anderson** | 1974-12-10 |
| 8441 | Aaron | Auer | 1997-01-27 |
| 9179 | Aaron | Auer | 1985-06-04 |
| 10970 | Aaron | Bahringer | 1998-11-03 |
| 13082 | Aaron | Bailey | 1980-10-26 |
| 3896 | Aaron | Balistreri | 1979-06-04 |
| 19399 | Aaron | Balistreri | 2001-10-21 |
| 25995 | Aaron | Barrows | 1979-01-02 |

Arī šis nederēs, jo ierakstiem `589` un `13704` ir tas pats uzvārds, un dēļ tā ar katru vaicājumu viņi var mainīties vietām!

### 3 kolonas

Ar vienu kolonu nepietiek, ar divām nepietiek, tad nu jāpaņem ar 3 (vai pat vairāk)!

... bet tā arī nevar būt patiesa deterministiska kārtošana, jo lai gan tas būtu ļoti reti, **var sakrist 2 (vai vairāk) ieraksti ar tādiem pašiem datiem pat 3 vai vairāk kolonās**

### ⭐️ 1 kolona un `id`

Un tagad mēs beidzot nonākam pie pareizā risinājuma. Pieliekot `id` pie kārtojamās kolonas mēs varam pārliecināties ka tā tiešām būs deterministiskā kārtošana **jo id nekad neatkārtosies**.

SQL vaicājums priekš šī paņēmiena izskatīsies šādi:

```sql
select
	*
from
	people
order by
	first_name, id
```
