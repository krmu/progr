---
layout: default
title: Vaicājumu izpildes secība
description: ~
parent: Datu bāzes
---

# SQL vaicājumu izpildes secība

SQL datu bāzes nepilda vaicājumus no labi pa kreisi. Tās pilda vaicājumus pēc šīs secības:

1. FROM/JOIN
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. ORDER BY
7. LIMIT/OFFSET

Tātad, sekojošā vaicājuma sākumā datu bāze apskatās no kuras tabulas datus ņemt pēc `FROM` atslēgas vārda.

```sql
SELECT
    vards, epasts
FROM
    pirceji
WHERE
    konta_statuss = "deaktivizets"
ORDER BY
    vards, id
LIMIT 10
```

Tad datu bāze apskatās filtrus pēc `WHERE` atslēgas vārda (šajā gadījumā, vai konta statuss ir deaktivizēts).

Tad datu bāze izvēlas nepieciešamās atgriežamās kolonas pēc `SELECT` atslēgas vārda.

Pēctam datu bāze sakārto datus pēc `ORDER BY` atslēgas vārdiem un pašās beigās viņa saīsina rezultātu uz tikai 10 ierakstiem.

## Kāpēc šis ir svarīgs?

Rakstot SQL vaicājumus, tāpat kā parastu kodu, ir ļoti svarīgi saprast kādā secībā tas izpildās. Nezinot vaicājumu izpildes secību, jūs varat uzrakstīt vaicājumu kurš vai nu neatgriež pareizos datus, vai arī vaicājumu kurš nav tik optimizēts kā jums šķiet.