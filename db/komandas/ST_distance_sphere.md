---
layout: default
title: ST_distance_sphere
description: ~
grand_parent: Datu bāzes
parent: SQL komandas
---

# ST_distance_sphere

Ja mums ir 2 ģēogrāfiski punkti ar ģeogrāfiskajiem platumiem un ģeogrāfiskajiem garumiem, un mēs vēlamies dabūt attālumu metros starp diviem punktiem, mums ir jaizmanto haversīna formula.

![Haversīna formulas attēlojums uz riņķa](/assets/images/db/komandas/haversine.png)
![Haversīna formula](/assets/images/db/komandas/haversine-1.png)

... bet tā formula ir ļoti sarežģīta un lai gan mēs varam viņu paši iekodēt, ir liela iespējamība, ka mēs pieļausim kļūdu, vai ka nebūs optimizēti. Tāpēc MySQL datubāze nāk ar iebūvētu komandu, kas to aprēķina.

```sql
select ST_distance_sphere(
	point(garums, platums),
	point(garums, platums)
	-- papildus arguments - metri (riņķa platums). Pēc noklusējuma MySQL ņem zemeslodes platumu (6 370 986 m).
); -- atgriež attālumu metros
```

## Izmantošana filtrā

Ja mēs vēlamies atlasīt visus ģeogrāfiskos punktus 1 km attālumā no centra punkta mēs varam izmantot `ST_distance_sphere` kā filtru.

```sql
SELECT
	*
FROM
	addresses
WHERE
	ST_distance_sphere(
		point(-1.234567, 2.345678), -- "Point Of Interest" (centra punkts)
		point(longitude, latitude)  -- longitude (ģeogrāfiskais garums) un latitude (ģeogrāfiskais platums) - kolonas tabulā
	) < 1000 -- kur attālums ir mazāks par 1 km
```

## Optimizācija

Šī komanda ir samērā dārga, tāpēc ir ieteikts **vismaz** izmantot [indeksus](/db/komandas/indeksi) priekš ģeogrāfiskā garuma un platuma kolonām (`lon(longitude)`, `lat(latitude)`).