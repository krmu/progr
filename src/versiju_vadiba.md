---
title: Versiju vadība
---
## Ievads

Iedomāsimies situāciju, kad jāuzraksta referāts ar 10 lapām. Iesākumā top ievads, pēc tam iztirzājuma daļa, beigās jāpievieno secinājumi. Noslēgumā darbam jāpievieno satura rādītājs. Visticamāk procesā tiks izveidoti neskaitāmi faili un katrā no tiem būs kādas izmaiņas. Izskatīties tas varētu šādi:

![slikta_versiju_kontrole](/bad_version_control.png)

Autoram kļūst grūti orientēties un viņš vairs nesaprot, kādas izmaiņas glabājas katrā no failiem. Tāpēc lieto rīkus, ko sauc par versiju kontroles (vadības) rīkiem.

Vēsturiski versiju vadības sistēmas radīja vienkāršiem .txt failiem, bet ātri vien programmētāji tos sāka izmantot savām vajadzībām. 

Zināmākie no versiju vadības rīkiem ir Git, Bitbucket, kā arī citi. Taču tie darbojas ļoti līdzīgi, atšķirās vien pieraksts komandām.

## Kā tas darbojas?

Lai savā projektā varētu saglabāt visas veiktās izmaiņas un vēlāk pie tām atgriezties, veido repozitoriju, kas ir kā konteiners, kas sevī ietver projektu un visas tā datnes. Repozitorijs sevī glabā informāciju par visām veiktajām izmaiņām koda failos. Ja programmētājam rodas vajadzība, viņš var brīvi atgriezties uz jebkuru iepriekšējo versiju un turpināt darbu.


## Iestatīšana

Turpmākajos piemēros izmantosim versiju vadības sistēmu Git. Lai sāktu to izmantot, nepieciešams lejupielādēt un uzstādīt savā datorā.

Instalācijas failu vari lejupielādēt [šeit](https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-64-bit.exe)!

Instalācijas vednī nekādas izmaiņas nav jāveic. Sekojam instrukcijām, līdz instalācija ir veiksmīgi pabeigta.

Pirms sākam izmantot Git saviem projektiem, vēlams iestatīt lietotāju. Tam izmantosim speciālas komandas, ko ierakstīsim komandrindā. Komandrindu atveram ar `Win + R`, Run logā ierakstot **cmd**. 

Iestatīsim lietotājvārdu un e-pastu. Tas tiks norādīts, fiksējot versijas savā projektā.

Izpildam komandu, kurā norādam savu izvēlēto lietotājvārdu

~~~git
git config --global user.name "Brašais koderis"
~~~

**--global** parametrs norāda, ka lietotājvārds tiks lietots visiem repozitorijiem, ko veidosim

Tādā pašā veidā iestatīsim arī e-pastu

~~~git
git config --global user.email "brasais_koderis@pasts.lv"
~~~

Ja nepieciešams apskatīties esošo konfigurāciju, to var izdarīt šādi:

~~~git
git config --list
~~~

## Atgādne ar komandām, kas var noderēt

Spied, lai palielinātu!

[![komandas](/git/citas_komandas.jpg)](/git/citas_komandas.jpg)

Avots: https://twitter.com/profulsadangi/status/1298236182245982210

## Iepazīstam komandrindu

Lai izveidotu repozitoriju (dažreiz to dēvē par **repo**), to inicializē jau esošā mapē, tāpēc uz darbvirsmas izveidosim jaunu mapi ar nosaukumu `mans_projekts`.

Kad mape ir izveidota, komandrindā ir jānokļūst uz šo mapi.

Apskatīsim dažas komandas, kas ļauj veikt pamata darbības komandrindā.

~~~git
cd <mapes nosaukums>
~~~
ļauj atvērt mapi

~~~git
cd ..
~~~
atgriežas līmeni atpakaļ iepriekšējā mapē (back)

~~~git
mkdir <mapes nosaukums>
~~~
veido jaunu mapi ar doto nosaukumu

~~~git
dir
~~~
ļauj apskatīt mapes saturu

Ar šo pietiks, lai mēs varētu sākt izmantot Git.

Atverot komandrindu, parasti mēs nonākam lietotāja mapē `C:\Users\<tavs lietotājvārds>`

Ja vēlamies nokļūt darbvirsmā, izpildām komandu `cd desktop`

Un atvērsim jauno projekta mapi ar komandu `cd mans_projekts`. Ja mapi esi nosaucis citādi, tad norādi izvēlēto nosaukumu.

## Veidojam repozitoriju

Ja komandrindā redzam ceļu `C:\Users\<tavs lietotājvārds>\Desktop\mans_projekts`, tad varam izveidot jeb inicializēt repozitoriju šajā mapē.

Tam lietojam doto komandu:
~~~git
git init
~~~

Saņemsim paziņojumu, ka repozitorijs ir veiksmīgi izveidots.

Nākamais solis ir pievienot failus repozitorijā, ko apskatīsim nākamajā sadaļā.


## Failu pievienošana

Pirms veidojam versijas, jāizpilda svarīgs solis - faili jāieliek uzskaitē

![add_commit](/git/add_commit.png)

Ar komandu

~~~git
git status
~~~

varam ērti apskatīt, kuri faili jau ir repozitorija uzskaitē un kuri vēl nav

![neizsekotie_faili](/git/untracked_files.png)

Sarkanā krāsā iezīmētie ir sveši faili, pievienosim tos repizotorijam ar

~~~git
git add .
~~~

Ja nepieciešams, var izpildīt komandu arī atsevišķiem failiem, bet to izmanto retāk

~~~git
git add <faila_nosaukums>
~~~

Tagad atkārtoti izpildot komandu `git status`, redzēsim, ka faili attēloti zaļā krāsā un Git ir sācis sekot izmaiņām failos

![paziistami_faili](/git/to_commit.png)

Redzam arī paziņojumu *No commits yet*, kas nozīmē, ka neesam fiksējuši vēl nevienu versiju savā projektā, bet par to nākamajā sadaļā...


## Versijas jeb komiti

Veidojot tīmekļa vietni vai datorprogrammu, veido versijas, piemēram, v1.0 vai v3.0. Bet dažreiz nākas izlabot kļūdas vai pievienot kādu nelielu labojumu un tādā gadījumā veido mazās jeb *minorversijas*, piemēram, v2.1 vai v1.4. Visas šīs versijas Git sistēmā ir tā sauktie komiti jeb *commits*

Komits glabā informāciju par katru projekta failu un izmaiņām failā konkrētājā brīdī un programmētājam ir iespēja *atgriezties pagātnē* uz kādu iepriekšējo komitu, ja jaunās izmaiņas nedarbojas, kā iecerēts

Mēs iemācījāmies ar komandu `git add` sagatavot failus jaunai versijai un nu tie ir atpazīstami Git sistēmā. Izveidosim pirmo komitu ar komandu

~~~git
git commit -m "Mans pirmais komits"
~~~

Parametrs -m apzīmē, ka pievienosim ziņojumu *(message)* jeb aprakstu par izmaiņām komitā, bet pašu aprakstu norādām pēdiņās

![pirmais_komits](/git/pirmais_komits.png)

Ziņojumā redzēsim, cik faili ir reģistrēti komitā un kādas izmaiņas tajos veiktos

## Versiju žurnāls

Lai redzētu versiju vēsturi repozitorijam, lietojam komandu

~~~git
git log --oneline
~~~

![komitu_zurnals](/git/log.png)

Katrs komits attēlots jaunā rindā ar savu unikālu adresi, piemēram, *5c039ef*

## Atgriežamies uz vecāku versiju

Veiksim izmaiņas kādā no failiem un izveidosim vēl vienu versiju

Failā *index.html* pievienojam paragrāfu un izpildam `git status`

![izmainas](/git/izmainas.png)

Redzam, ka Git ziņo par jaunām izmaiņām failā, tāpēc tas ir atkārtoti jāpievieno ar `git add .`

![gatavas_izmainas](/git/gatavas_izmainas.png)

Atkārtoti izpildot `git status`, redzam, ka izmaiņas failā ir atpazītas un var veidot jaunu versiju, pievienojot ziņojumu

![otra_versija](/git/otra_versija.png)

Versiju žurnālā būs nu jau 2 versijas, kur pēdējā satur papildinātu *index.html* failu

![otra_versija](/git/log2.png)

Ja jaunās izmaiņas tomēr nevēlamies, varam atgriezties uz sākotnējo versiju un *index.html* fails atkal kļūs tukšs

Tam lietojam komandu

~~~git
git reset --hard <komita_id>
~~~

Repozitorijā anulējas visas izmaiņas, kas ieviestas kopš norādītā komita

## Zari

Iedomāsimies situāciju, kad strādājam pie kāda projekta, piemēram, tīmekļa vietnes. Kādā brīdī nepieciešams pievienot autorizācijas iespēju, bet mēs nevēlamies sabojāt esošo funkcionalitāti. Tādā gadījumā ļoti noder Git iespēja, ko dēvē par zariem jeb *branches*.

![zari](/git/zari.png)

avots: https://www.learncsdesign.com/a-review-of-git-branching-strategies/

Noklusēti repozitorijs strādā pamata zarā jeb *main branch*.

No tā iespējams atvasināt citus, piemēram, *bugfix* jeb mazos labojumus vai *feature*, kur pievieno jaunu funkcionalitāti.

Tādā veidā mēs vairs nevaram *salauzt* strādājošo kodu.

Pamata komandas, strādājot ar zariem, ir `git branch`, `git switch` un `git merge`.

Lai izveidotu jaunu zaru, izmantojam

~~~git
git branch "Pievienojam_autorizaaciju"
~~~

, kur pēdiņās norādām tā nosaukumu

Lai pārslēgtos uz jaunizveidoto zaru, izmantojam

~~~git
git switch "Pievienojam_autorizaaciju"
~~~

Ar komandu `git branch` varam apskatīties, kurš no visiem zariem pašlaik ir aktīvs

Kad esam veikuši vajadzīgās izmaiņas vai arī ja funkcionalitāte ir gatava lietošanai, zarā izveido jaunu versiju ar `git add .` un `git commit`.

Ja versija izveidota, atgriežamies *main* zarā un savienojam ar jauno zaru

~~~git 
git merge "Pievienojam autorizaaciju"
~~~

Visas izmaiņas tagad būs spēkā *main* zarā.

Zaram var veidot arī apakšzarus, piemēram, ja funkcijas izstrādes laikā pamana jaunu kļūdu, izveido *feature-new-bug* zaru, kurā to izlabo.



