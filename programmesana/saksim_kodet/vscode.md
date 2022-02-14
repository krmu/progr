---
title: VS Code un Python uzstādīšana
description: Kā sagatavot darba vidi un izveidot pirmo projektu.
layout: default
grand_parent: Programmēšana
parent: Sāksim kodēt!
nav_order: 0
---

### Teksta redaktora un interpretatora uzstādīšana

Lai sāktu programmēt, tev nepieciešams: 
* teksta redaktors, kas ļauj rakstīt kodu
* kompilators vai interpretators, kas pārtulko uzrakstīto kodu, lai datora procesors to saprastu

Lai programmētu mājas lapas, tev pietiks tikai ar teksta redaktoru, jo mājas lapu attēlo un interpretē parlūkprogramma! [Dodies šeit](./web.md), lai uzzinātu vairāk!
{: .alert .alert-warning}

Izmantosim teksta redaktoru Visual Studio Code un Python interpretatoru!

Visual Studio Code (sauksim to par VS Code) nodrošina ļoti plašu valodu atbalstu un daudz dažādus paplašinājumus *(extensions)* raitākam darbam.

Iesākumā lejupielādē instalācijas pakotnes [Python interpretatoram](https://www.python.org/downloads/) un teksta redaktoram [VS Code](https://code.visualstudio.com).

### Python uzstādīšana

Atver Python instalācijas pakotni!

Obligāti atzīmē opciju **Add Python 3.x to PATH**, citādi VS Code neredzēs interpretatoru!
{: .alert .alert-danger}

![python-installer](/media/python-installer.jpg)

Spied **Install Now** un uzgaidi, kamēr instalācija būs pabeigta! Aizver instalācijas logu!

### Visual Studio Code uzstādīšana

Atver VS Code instalācijas pakotni un, sekojot instrukcijām, uzstādi savā datorā!

Ja viss izdevās veiksmīgi, vari atvērt koda redaktoru un ieraudzīsi sākuma ekrānu.

![vscode-window](/media/vscodewindow.jpg)

Atvērsim **Extensions** sadaļu un uzstādīsim Python atkļūdotāju! Vari izmantot meklētāju!

![extension](/media/extension.jpg)

Izveidosim datorā mapi jaunajam programmas projektam, nosauksim to *HelloWorld*.

![helloworld](/media/helloworld.jpg)

Teksta redaktorā atvērsim izveidoto mapi, izmantojot taustiņu kombināciju `Ctrl + K + O` vai opciju **Open Folder**!

Mapē izveidosim jaunu failu ar nosaukumu **helloworld.py**!

Svarīgi norādīt faila paplašinājumu! Python failiem tas ir .py, taču citām valodām tas varētu būt, piemēram, .cpp vai .js.
{: .alert .alert-warning}

![create-file](/media/create-file.jpg)

Pievienosim koda rindiņu!

![first-line](/media/firstline.jpg)

Un iedarbināsim programmu, izmantojot taustiņu `F5`! No izlecošā saraksta izvēlamies Python File!

Ja viss izdevās, terminālī ieraudzīsi tekstu **Hello World!**

![terminal](/media/terminal.jpg)

Tagad vari doties savā programmēšanas piedzīvojumā!

VS Code ērti lietot arī veidojot mājas lapas! Tev tikai tukšā mapē jāizveido `index.html`, `style.css` un `script.js` faili!
{: .alert .alert-warning}