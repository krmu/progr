<div align="center">
<h1> < /> ProgHelp</h1>
<h3>💻 Vietne palīdzībai programmēšanā un Datorikā 💻</h3>
</div>
 
# 🖊️ Vietnes adreses maiņa

Lai būtu vieglāk atcerēties vietnes adresi, esam mainījuši tās adresi uz proghelp.lv. Pārsūtīšana notiek automātiski.

Vietnes jaunā adrese: https://proghelp.lv
# 📌 Jaunākās izmaiņas vietnē

<div id="izvads">Iegūst izmaiņu sarakstu...</div>

<component :is="'script'">
async function iegut_pedejas_izmainas() {
  try{
    let response = await fetch("https://api.github.com/repos/krmu/progr/git/refs/heads/main");
    let pedejais_commits = await response.json();
    let response2 = await fetch(pedejais_commits.object.url);
    let pedejais_commits_info = await response2.json();
    let html_elements = document.getElementById("izvads");
    var izmainu_datums = new Date(pedejais_commits_info.author.date);
    html_elements.innerHTML = "Izmaiņu saturs: "+ pedejais_commits_info.message + ", autors: " + pedejais_commits_info.author.name + ", datums: " + izmainu_datums.toLocaleDateString("lv-LV");
  }catch (error) {
    let html_elements = document.getElementById("izvads");
    html_elements.innerHTML = "Neizdevās iegūt jaunākās izmaiņas!";
  }
}
iegut_pedejas_izmainas();
</component>

# 🖊️ Apraksts

Vietnē apkopotas dažādas programmēšanas valodas un to paši pamati, tāpat arī pievienoti piemēri.

Mācību materiāls palīdz skolēniem uzsākt programmēšanas apguvi sākuma stadijā un vietnē pieejamie pamatmateriāli sniedz skolēnam iespēju uzsākt padziļinātu apguvi konkrētajās tēmās pašmācības ceļā.

Elektroniskā mācību līdzekļa saturs ievietots tīmeklī un ir pieejams skolēniem, pedagogiem, vecākiem dažādās viedierīcēs, jo vietnes dizains ir pielāgots mūsdienu ierīču prasībām.

Katras tēmas beigās iekļauti "piemēri" (uzdevums ar atrisinājumu), kurus skolotāji var izmantot un iekļaut mācību procesā.

---

Šīs vietnes oriģinālās idejas autors ir Kristaps Muižnieks (Babītes vidusskola). Šī vietne nav maksas projekts un ir veidota izglītības nolūkiem.

💡 Drīkst arī sadarboties un uzlabot materiālus. 

# 🖊️ Ja vēlas palīdzēt...

Vietni darbina VUEPRESS un tiek pielietota Markdown sintakse, hopeTheme tēma.
Lai uzstādītu šo savā datorā, jāuzstāda Node.js un VUEPRESS.
Lejuplādē šo repozitoriju un izpildi komandu:
```npm
npm install
```
Lai palaistu vietni lokāli, izpildi komandu:

```npm
npm run docs:dev
```

Visas bildes liekam mapē /src/.vuepress/public/

Visa pamatā ir Vuepress: https://vuepress.github.io

Dizains no https://theme-hope.vuejs.press/guide/
