---
layout: default
title: Relācijas
description: ~
parent: Datu bāzes
nav_order: 1
---

# Relāciju veidi

Lai datu bāzes tabulā vairākkārt nedublētos dati, tos izdala pa vairākām tabulām, piemēram, *skoleni*, *klases*, *skolotaji* vai līdzīgi. Noliktavas uzraudzības datu bāzē tās varētu būt *preces*, *noliktavas_zales*, *parvaldnieki*.

Vairāku tabulu gadījumā tās vienmēr tiek sasaistītas. Tam izmanto saites jeb **relācijas**.

Relācija ir saite starp divām datu bāzes tabulām.
{: .alert .alert-warning}

Relācijām izšķir 3 galvenos tipus:

* **viens-pret-vienu** (viens ieraksts no A tabulas atbilst vienam ierakstam no B tabulas)
* **viens-pret-daudziem** (viens ieraksts no A tabulas atbilst vairākiem ierakstiem no B tabulas)
* **daudzi-pret-daudziem** (vairāki ieraksti no A tabulas atbilst vairākiem ierakstiem no B tabulas)

Daudzi-pret-daudziem relācijas gadījumā izmanto papildus tabulu un divas **viens-pret-daudziem** relācijas.
{: .alert .alert-warning}

Attēlā redzamas tabulas *skoleni* un *klases*. Tā kā vienā klasē var būt vairāki skolēni, bet skolēns var būt tikai vienā klasē, tā ir viens-pret-daudziem relācija.

![db-skoleni](/media/db-skoleni.png)

Šajā piemērā **klase** un **klases_id** ir saistītie lauki.

Saistītajiem laukiem svarīgi iestatīt vienādu datu tipu!
{: .alert .alert-warning}

Papildināsim piemēru ar tabulu **audzinataji**. 

![db-skoleni-audz](/media/db-skoleni-audz.png)

Zinot, ka katrai klasei var būt tikai viens audzinātājs un katram audzinātājam var būt tikai viena klase, tā ir *viens-pret-vienu* relācija.

