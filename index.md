---
layout: default
title: Sākumlapa
description: Kad nepieciešama palīdzība programmēšanā...
nav_order: 1
ikona: home.png
---

# Sākumlapa



![example image](/media/landinggifs.gif){: .nerami}

<dl>
    <dt>Materiāla autori:</dt>
    <dd>Kristaps Muižnieks [ HTML, Javascript, Java, PHP, Python sadaļas] </dd>
</dl>
## Pievienotās tēmas:
<div class="row">
{% for p in site.pages %}    
    {%- if p.has_children == true -%}
        {%- if p.nesakuma == false or  p.nesakuma == nil -%}
            <div class="d-flex">
                 <div class="card" style="width: 10rem; margin:2px;padding:2px">
                    <img class="card-img-top nerami  img-fluid" src="/media/{{ p.ikona }}"  alt="{{ p.title }}">
                    <div class="card-body d-flex flex-column text-justify text-center">
                        <h3 class="card-title mt-auto font-weight-bold ">{{ p.title }}</h3>
                        <a href="{{ p.url | absolute_url }}" class="card-link">Atvērt</a>   
                    </div>
                </div> 
            </div> 
        {%- endif -%}
      {%- endif -%}
{% endfor %}
 