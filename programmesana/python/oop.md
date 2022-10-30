---
layout: default
title: Objektorientētā programmēšana (OOP)
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 5
---

# Par OOP

Programmēšanā izdala divas lielās programmēšanas pieejas:

1. Procedurālā programmēšana (izmanto algoritmus un funkcijas);
2. Objektorientēta programmēšana (izmanto objektus un datu definīcijas objektā).

Ir arī citas...

OOP jeb objektorientēta programmēšana ir viena no programmēšanas paradigmām jeb programmēšanas pieejām. 
Šis programmēšanas veids ļauj kodu strukturēt objektos.

Var iedomāties, ka informācija tiek ielikta kastē un no tās izņemta vai apstrādāta.

Avots: StartIT



# Definēšana

OOP kopumā sastāv no klasēm, tāpat arī tas notiek Pythonā. 

Mēs datoram skaidri pasakām, ka programmēsim OOP veidā, izmantojot vārdu `class` un pēc tam raksta mūsu objekta nosaukumu.

~~~python

class Skolens:


~~~

Uz klašu nosaukumiem attiecas visi tie paši noteikumi, kuri uz mainīgo nosaukumu definēšanu.
{: .alert .alert-warning} 

Katru reizi, kad vēlamies izsaukt mūsu objektu, mēs definējam tā nosaukumu iekš jauna mainīgā, lai mainīgā nosaukums varētu tikt izmantots kā objekta savienojums ar tā iekšieni.

No šī brīža var uzskatīt, ka mainīgais satur mūsu definēto objektu.


~~~python

class Skolens:


skolena_objekts = Skolens()

~~~

Šobrīd mūsu objekts nesatur nekādu informāciju, tam nav metožu un vērtību.

# Objekta mainīgie

Visi mainīgie, kuri ir definēti objekta iekšienē nav pieejami ārpus objekta(tos nevar pa taisno, izvadīt vai izmantot kā tas ir ar parastajiem mainīgajiem), ja mēs tos ar kādu speciālu metodi neizsaucam. 

Mainīgos, kuri piederēs objektam, definē pašā objekta sākumā ar atkāpi.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"

skolena_objekts = Skolens()

~~~

Šajā piemērā, objektu izveidojot tā iekšienē, jau ir definēti trīs mainīgie `vecums`, `vards`,`uzvards`. Šie mainīgie nav pieejami ārpus objekta, ja tos speciāli neizsauc ar metodes palīdzību.

# Objekta metodes

Lai iegūtu informāciju no objekta ir jāizmanto objektā definētās `metodes`. Mēs izveidosim metodi, kura atgriezīs jau iepriekš definēto skolēna vecumu.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"

    def skolena_vards(): # metodes definēšana
        return self.vecums # metodes vērtības atgriešana

skolena_objekts = Skolens()

~~~

Mūsu objektam tika pievienota klāt funkcija ar nosaukumu `skolena_vards`, tai klāt ir divas iekavas, iekavās nekā nav, tas nozīmē, ka funkcijai nav parametru. 

Šo funkciju sauc par objekta metodi.

Funkcijas priekšā raksta vārdu `def`, kas Python programmēšanas valodā apzīmē funkciju.

Funkcijas iekšienē mēs redzam vārdu `return`, tas nozīmē, ka funkcija atgriezīs tās rezultātu nevis izvadīs rezultātu pa taisno konsolē.

Tiek rakstīts vārds `self`, kas liek mūsu programmai meklēt mainīgo šajā pašā objekta iekšienē `Skolens`. Pēc vārda `self` ir apzīmēts meklējamā mainīgā nosaukums, kas mūsu gadījumā ir `vecums`.

Vērtību, kuru iegūst konstrukcija `self.vecums` ir `18`, jo tādu vērtību mēs esam iedevuši pie mainīgā pašā objekta sākumā.

Šajā piemērā konsolē nekas netiks izvadīts, jo mēs to neprasam.

Lai izsauktu konkrētu metodi no objekta, izmanto iepriekš jau definēto mainīgo, mūsu gadījumā `skolena_objekts`, tad raksta punktu un metodes nosaukumu.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"

    def skolena_vards():
        return self.vecums

skolena_objekts = Skolens()

print(skolena_objekts.skolena_vards())

~~~

Konsoles izvads: `18`. Ja neizmantotu vārdu `print` un iekavas, tad vērtība netiktu izvadīta vispār.

# Objekta mainīgo vērtības uzstādīšana ar metožu palīdzību

Ir iespējams arī mainīt objekta mainīgo vērtības dinamiski ar metožu palīdzību, tad mēs izmantojam funkciju parametrus. To parasti dara koda izpildes laikā.

Veidojam jaunu funkciju iekš mūsu objekta, liekam tā nosaukumu kā `skolena_vards_uzstadit`, tad definējam divus parametrus - `self` un `vards_kaa_parametrs`.

`self` - Python programmēšanas valodas īpatnība, Python nemāk automātiski atrast objekta vērtības, mēs objekta īpašības dodam līdzi kā parametru `self`.

`vards_kaa_parametrs` - Mainīgais, kuru mēs no koda izsaukšanas vietas dosim kā vērtību.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"

    def skolena_vards():
        return self.vecums

    def skolena_vards_uzstadit(self, vards_kaa_parametrs):
        self.vards = vards

skolena_objekts = Skolens() 

skolena_objekts.skolena_vards_uzstadit("Artūrs") # Izsaucam funkciju no objekta, līdzi iedodam parametru - Artūrs. Funkcija nomaina objekta mainīgā vērtību.

print(skolena_objekts.skolena_vards()) # Izvada - Artūrs

~~~

# Objekta sākuma vērtību uzstādīšana no objekta definēšanas brīža

Mēs objekta pašā augšā esam definējuši 3 mainīgos `vecums`, `vards`,`uzvards` un pievienojuši tiem vērtības. Ir iespējams dot līdzi vērtības arī definējot pašu objektu.

Šādā gadījumā izmanto `konstruktoru`. Python programmēšanas valodā tas tiek definēts iekš objekta ar funkcijas nosaukumu `__init__` un funkcijas parametros dod sākuma vērtības.

Apskatīsim piemēru.

~~~python

class Skolens:
    vecums = 18
    vards = "Visvaris"
    uzvards = "Krūmiņš"
    def __init__(self, vards_ievade, uzvards_ievade,vecums_ievade):
        self.vards = vards_ievade
        self.uzvards = uzvards_ievade
        self.vecums = vecums_ievade

    def skolena_vards():
        return self.vecums

    def skolena_vards_uzstadit(self, vards_kaa_parametrs):
        self.vards = vards

skolena_objekts = Skolens("Laima","Plūme",25) 

print(skolena_objekts.skolena_vards()) # Izvada - Laima

~~~

Konstruktoram `__init__` ir 4 parametri.

`self` - Apzīmē paša objekta saturu, atsaucas uz sevi.

`vards_ievade` - Pirmais parametrs.

`uzvards_ievade` - Otrais parametrs.

`vecums_izvade` - Trešais parametrs.


Brīdī, kad definējam objektu, šīs trīs vērtības tiek ierakstītas iekavās kā funkcijas parametri. 

Konstruktors šīs vērtības saņem un izmantojot vārdu `self` nomaina vērtības jau iepriekš definētajiem mainīgajiem `vecums`,`vards`,`uzvards`.

Konstruktors palīdz iekustināt objektu ar gatavām no malas iedotām vērtībām. Piemēram, lietotājam jāievada spēles beigu skaitlis, tad objekts sāk savu darbu.
