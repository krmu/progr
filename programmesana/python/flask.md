---
layout: default
title: Web aplikācijas ar Flask
description: ~
grand_parent: Programmēšana
parent: Python
nav_order: 8
---
## Kas ir Flask?

Flask ir bibliotēka jeb ietvars (*framework*), ko izmanto, lai veidotu tīmekļa vietnes un aplikācijas ar Python valodu.

## Pirmie soļi

Lai sāktu veidot tīmekļa vietni, izveido mapi, piemēram, *mans_blogs* ar failu *app.py*. Tā kā Flask ir ārējā bibliotēka, to būs nepieciešams instalēt komandrindā ar komandu 

~~~shell
pip install flask
~~~

Datnē *app.py* ieraksta sekojošo:

~~~py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "<p>Hello, World!</p>"

app.run(debug=True)
~~~

Dotajā piemērā importē flask bibliotēku un nodefinē `app` objektu, ar ko tālāk darbosies.

Pēdējā rinda startē Flask serveri, kas ekrānā parādīs `Hello, World!`, adreses laukā ierakstot adresi `127.0.0.1:5000/`.

Pieliekot papildus serverceļus *(routes)* varēsim izmantot arī citas adreses, piemēram, `127.0.0.1:5000/hello`.

~~~py
from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/hello")
def index():
    return "<p>Hello, World!</p>"

app.run(debug=True)
~~~

## Šabloni

Lai izveidotā lapa būtu dinamiska un ērti papildināma, lieto html šablonus. Tam vajadzīga mape `templates` ar galveno failu `layout.html` un pārējiem failiem, kas kalpos kā lapas sadaļas.

`layout.html` varētu izskatīties šādi:

~~~html
{% raw %}
<!DOCTYPE html>
<html lang="lv">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mana Flask lappuse</title>
  </head>
  <body>
	{% block lapas_saturs %}
    {% endblock %}
  </body>
</html>
{% endraw %}
~~~

Redzam, ka `body` tagā ir izveidots bloks jeb sadaļa, kas saturēs mainīgo lapas daļu. Papildus var ietvert arī navigāciju un citus elementus.

Izveidosim tagad sadaļu `sakums.html`.

~~~html
{% raw %}
{% extends "layout.html" %}

{% block lapas_saturs %}
    Esi sveicināts sākuma lapā!
{% endblock %}
{% endraw %}
~~~

Redzam, ka šeit netiek dublēts viss html kods, bet tikai lapas mainīgā daļa, ietverot galveno failu `layout.html`.

Modificēsim mūsu `app.py` failu, lai tas izsauktu mūsu jauno sadaļu.

~~~py
from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/hello")
def index():
    return render_template("sakums.html")

app.run(debug=True)
~~~