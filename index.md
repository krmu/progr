---
layout: default
title: Sākumlapa
description: Kad nepieciešama palīdzība programmēšanā...
nav_order: 0
ikona: home.png
---

# Sākumlapa



![example image](/media/landinggifs.gif){: .nerami}

<dl>
    <dt>Materiāla autori</dt>
    <dd>Kristaps Muižnieks  [ HTML, Javascript, Java, PHP, Python sadaļas] - Babītes vidusskola</dd>
    <dd>Raivis Rasnačs [ HTML, Javascript, Python sadaļas] - Jēkabpils Valsts ģimnāzija</dd>
</dl>
## Pievienotās tēmas:
<div class="row">
{% for p in site.pages %}    
    {%- if p.has_children == true -%}
        {%- if p.nesakuma == false or  p.nesakuma == nil -%}
            <div class="d-flex">
                 <div class="card" style="width: 10rem; margin:2px;padding:2px">
                    <img class="card-img-top nerami mx-auto d-block  img-fluid" src="/media/{{ p.ikona }}"  alt="{{ p.title }}">
                    <div class="card-body d-flex flex-column text-justify text-center">
                        <h3 class="card-title mt-auto font-weight-bold ">{{ p.title }}</h3>
                    </div>
                    <div class="urli">
                      {{ p.description }}
                      <br><a href="{{ p.url | absolute_url }}" class="card-link">Atvērt</a>
                    </div>
                </div> 
            </div> 
        {%- endif -%}
      {%- endif -%}
{% endfor %}
 