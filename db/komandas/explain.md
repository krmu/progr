---
layout: default
title: Explain
description: ~
grand_parent: Datu bāzes
parent: SQL komandas
---

# Explain

⚠️ Šī komanda ir priekš MySQL, PostgreSQL un SQLite ⚠️

Īsumā: `EXPLAIN` izskaidro cik daudz rindas tiek lasītas u.tml. bez vaicājuma veikšanas, jeb tikai ar statistiku. `EXPLAIN ANALYZE` dara to pašu, bet veic vaicājumu.

Ja mums ir problēmas ar veiktspēju, mēs varam izmantot `EXPLAIN` komandu, lai to analizētu.

## `EXPLAIN`

Komanda `EXPLAIN [vaicājums]` **ar analītiku** izskaidro kas notiek ar to vaicājumu. **Tas nepalaiž vaicājumu**, tas izmanto tikai iepriekš zināmo analītiku, lai to aprakstītu. Tas ir labi tad, ja gribi ātri dabūt vispārīgu info par to, kas notiek ar to vaicājumu neiedodot papildus slodzu datu bāzei.

```sql
EXPLAIN SELECT * FROM people WHERE birthday BETWEEN '1988-01-01' AND '1988-01-31';
```

![Explain rezultāta bilde](/assets/images/db/komandas/explain.png)

## `EXPLAIN ANALYZE`

Komanda `EXPLAIN ANALYZE [vaicājums]` atšķiras ar to, ka šī komanda **veic vaicājumu**, nevis izmanto statistiku. Tas nozīmē, ka šī komanda ir precīza, bet ļoti dārga resursu ziņā.

```sql
EXPLAIN ANALYZE SELECT * FROM people WHERE birthday BETWEEN '1988-01-01' AND '1988-01-31';
```

![Explain analyze rezultāta bilde](/assets/images/db/komandas/explain-analyze.png)
