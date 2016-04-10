---
layout: page
title: Get Started
permalink: /docs/
---

yolo

{% for post in site.posts %}
<div class="post">
<h2>{{ post.title }}</h2>
{{ post.content }}
</div>
{% endfor %}