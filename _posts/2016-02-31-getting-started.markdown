---
title:  "Getting started"
date:   2016-03-31 17:06:26 +0200
postid: gettingstarted
---

First of all, thanks for checking out Pavilion! Now let's get you started. Here are four options to include Pavilion in your project.

##### Download

<a href="https://github.com/getpavilion/pavilion/archive/master.zip" rel="nofollow">
    <button class="button-default">Source package</button>
</a>
<a href="https://raw.githubusercontent.com/getpavilion/pavilion/master/dist/pavilion.min.css" rel="nofollow" download>
    <button class="button-default">Compiled CSS</button>
</a>

##### Install with NPM
{% highlight html %}
npm install pavilion
{% endhighlight %}


* * *

##### Pavilion source files
When installing Pavilion with NPM, Bower or the source download, the following structure is delivered.

{% highlight html %}
pavilion/
├── dist/
│   ├── pavilion.css
│   ├── pavilion.min.css
│   ├── pavilion.min.css.map
├── demo/
│   ├── demo project files
├── scss/
│   ├── pavilion.scss
│   └── parts/
│       ├── _base.scss
│       ├── _buttons.scss
│       ├── _flexbox.scss
│       ├── _forms.scss
│       ├── _grid.scss
│       ├── _helpers.scss
│       ├── _lists.scss
│       ├── _mixins.scss
│       ├── _normalize.scss
│       ├── _tables.scss
│       ├── _typography.scss
│       └── _variables.scss
├── README.md
├── CHANGELOG.md
├── license
├── gruntfile.js
└── package.json
{% endhighlight %}

For consistent browser behaviour Pavilion ships with **normalize.css**, a collection of HTML element and attribute style-normalizations by Nicolas Gallagher and Jonathan Neal.
See their documentation [here](http://necolas.github.io/normalize.css/).

