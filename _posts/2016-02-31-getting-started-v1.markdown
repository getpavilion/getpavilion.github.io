---
title:  "Getting started"
date:   2016-03-31 17:06:26 +0200
postid: gettingstarted
categories: v1
---

First of all, thanks for checking out Pavilion! Now let's get you started. Here are four options to include Pavilion in your project.

##### Get the source package

<a href="https://github.com/getpavilion/pavilion/archive/v1.0.31.zip" rel="nofollow" download>
    <button class="button-default">Download v1.0.31</button>
</a>

##### Install with NPM
{% highlight html %}
npm install pavilion@1.0.31
{% endhighlight %}

##### Install with Bower
{% highlight html %}
bower install pavilion#1.0.31
{% endhighlight %}

<br>

### Pavilion source files
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

