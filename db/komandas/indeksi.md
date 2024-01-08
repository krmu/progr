---
layout: default
title: Indeksi
description: ~
grand_parent: Datu bāzes
parent: SQL komandas
---

# Indeksi

**Īsumā:** SQL indeksi *ne tikai* paātrina DB lasīšanas ātrumu, bet arī samazina lasītās rindas.

SQL indeksi ir kā nelielas atsevišķas tabulas datubāzē, kurās tiek glabātas norādes uz datu rindām tabulā. Indeksi ļauj datubāzei ātri atrast konkrētus datus un rindas, nemeklējot visus tos tabulā. Tas krietni uzlabo vaicājumu veiktspēju.

Salīdzinājumā ar īsto dzīvi mēs varam ņemt satura rādītāju grāmatā. Tā vietā, lai šķirstītu **katru lapu** grāmatā meklējot konkrētu tematu, jūs varat apskatīties saturā kur tas temats atrodas un uzreiz pāriet uz saturā norādīto lapu. Līdzīgi, indeksi datubāzei parāda *kur tieši* atrodas meklējamās datu rindas.

Viens mīnuss ar indeksiem ir tas, ka tas palielina atmiņas izmaksas datubāzei un var nedaudz palēlināt datu modifikācijas operācijas kā `INSERT`, `UPDATE` un `DELETE`.

Tā lai būtu vienkāršāk saprast kur vajag pielietot indeksus, mēs apskatīsim piemēru no īstās dzīves, ar kuru jūs visticamāk sadursities, ja strādāsiet ar datu bāzēm.

## Problēma

Datubāzē ir 500 000 rindas ar cilvēkiem un jūs vēlaties izvēlēties cilvēkus kuriem dzimšanas diena ir starp `1988-01-01` un `1988-01-31`.

Ja mēs strukturējam SQL vaicājumu šādi:

```sql
SELECT * FROM people WHERE birthday BETWEEN '1988-01-01' AND '1988-01-31';
```

... tad datubāze iziet cauri **VISĀM 500 000 rindām**, bet atdod **tikai 1378 rindas**.

Ja ir maza datubāze un maz lietotāju, tad tā nav pārāk liela problēma, **BET** ja tev, piemēram, ir 500 000 rindas tabulā un katrs vaicājums iziet caur visām tām rindām, tad kopējais lasītais rindu skaits ļoti ātri pieaug ([ļoti labs piemērs par to, kas var notikt šādos apstākļos](https://twitter.com/d4m1n/status/1723800194460856338)). Tas var ne tikai ietekmēt datu bāzes veiktspēju, bet arī palielināt izmaksas, ja izmantojat datu bāžu pakalpojumus.

Pirms mēs kaut ko sākam risināt, mums vajadzētu sākumā saprast kas tiešām ar vaicājumu notiek izmantojot [Explain komandu](/db/komandas/explain).

## Risinājums

Ja mēs vaicājumu visu laiku filtrējam pēc vienas kolonas (piem. dzimšanas dienas), tad to kolonu mēs varam padarīt par indeksu.

```sql
-- MySQL sintakse

ALTER TABLE people ADD INDEX (birthday);

-- SQL sintakse

ALTER TABLE people CREATE INDEX (birthday);
```

Tas krietni palielinās veiktspēju un samazinās lasīto rindu skaitu.

Mēs varam noteikt vai tas tiešām ir samazinājis lasīto rindu skaitu ar [Explain komandu](/db/komandas/explain)

---

# Aptverošais indekss

⚠️ Šī sadaļa ir galvenokārt priekš MySQL ⚠️

**Šo indeksu vajag izmantot tikai retajos gadījumos, kad ir nemainīgs vaicājums kuram vajag pēc iespējas mazāku izpildīšanas laiku. Šo indeksu vajag pievienot projekta izstrādes laika beigās, kad projekts ir pabeigts un ir jāveic optimizācija. Netaisi projektu ap šo stratēģiju.**

Ja mums vajag paņemt kolonas vērtību ar filtru (piem. `created_at`) un mums ir liela datu bāze (piem. 5 milj. rindas) tad mēs varam neizmantot indeksu, vai arī izmantot vienu no diviem indeksu veidiem.

```sql
SELECT email FROM users WHERE created_at >= "2023-01-01" and created_At < "2023-01-02"
```

- Bez indeksa (~ 2 505,500 ms)
- Ar indeksu `created_at` (~73,6 ms)
- Ar **aptverošo indeksu** (~ 6,7 ms)

Kā mēs redzam, aptverošais indekss ir *daudz* ātrāks par parastu indeksu, bet kas tas īsti ir, un kā mēs to varam pielietot?

Aptverošais indekss ir ļoti specifisks indekss kurš aptver **visus datus kurus gribat atgriezt UN pēc kā jūs filtrējat**.

Parasts indekss būtu uz kolonas `created_at`. Tā būtu loģiskākā vieta balstoties uz iepriekšējo info, bet kas notiktu ja mēs uztaisītu vienu indeksu priekš 2 kolonām?

Lai uztaisītu Covering indeksu mēs uztaisām vienu indeksu ar 2 kolonām pēc [SQL vaicājumu izpildes secības](/db/seciba):
1. Filtra kolona
2. Kolonu, kuras datus gribi izvēlēties

Šajā piemērā tas izskatītos šādi:

```sql
ALTER TABLE users ADD INDEX created_at_email(created_at, email)
```

Uztaisot šāda veida indeksu mēs varam izdarīt tā, lai tas vaicājums nekad nepieskaras pašai tabulai. Tas tikai paņem datus no ātrā un optimizētā indeksa.

Mēs varam pārliecināties vai aptverošais indekss strādā ar [Explain komandu](/db/komandas/explain).

![](/assets/images/db/komandas/indeksi-explain.png)

Pirmā vieta kur mums ir jāskatās ir `Extra` kolona. Tas izskaidro ko datu bāze izmanto, lai dabūtu datus. Ja tur ir `Using index` beigās, tad tas nozīmē ka datu bāze izmanto aptverošo indeksu un galīgi nepieskaras tabulai.

Tad, ja skatoties uz `key` kolonu ir aptverošā indeksa vārds, tad viss ir labi un *tieši tas* vaicājums būs ļoti ātrs.

## Neizmanto `*`

Ja mēs izmantojam aptverošo indeksu, tad ir jāpārliecinās, ka tie dati kurus jūs vēlaties paņemt un tie dati kuri ir indeksā sakrīt. Jeb, ka ja mēs uztaisām indeksu ar `(created_at, email)`, tad mums ir jāliek tikai tās divas kolonas vaicājumā.

Ja mēs ņemam `*` vai kādu citu vērtību, tad datu bāze turpina tā it kā tas aptverošais indekss nepastāvētu.

Izmantojot [Explain komandu](/db/komandas/explain) mēs varam pārliecināties vai vaicājums izmanto aptverošo indeksu pēc `Extra` un `key` kolonām.

![](/assets/images/db/komandas/indeksi-explain-*.png)

Šajā piemērā (`SELECT * [...]`) mēs varam redzēt, ka aptverošais indekss netiek izmantots pēc atslēgas vārdiem `Using MRR`. Kā arī mēs varam redzēt ka tomēr kaut kāds indekss tiek izmantots, bet tas ir parastais un nevis aptverošais indekss, tāpēc šajā gadījumā šis vaicājums būs ~73,6 ms nevis ~6,7ms. 

## `id` neskaitās

Ja mēs ņemam `SELECT email, id [...]` vai pat `SELECT id [...]` tad `Using index` vajadzētu pazust, jo tas nav indeksā... bet tā nenotiek.

Kāpēc? Jo `id` ir primārā atslēga, un primārā atslēga ir ielikta visos indeksos. Jeb, ka kad mēs uztaisījām aptverošo indeksu priekš `(created_at, email)`, mēs īstenībā uztaisījām indeksu priekš `(created_at, email, id)`.

---

![](/assets/images/db/komandas/indeksu_zim.png)