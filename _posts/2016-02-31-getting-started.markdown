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



##### CDN
{% highlight html %}
<!-- pavilion.min.css -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/pavilion/latest/pavilion.min.css">
{% endhighlight %}



##### NPM
{% highlight html %}
npm install pavilion
{% endhighlight %}



##### Bower
{% highlight html %}
bower install pavilion
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
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _normalize.scss
│       ├── _grid.scss
│       ├── _flexbox.scss
│       ├── _typography.scss
│       ├── _buttons.scss
│       ├── _lists.scss
│       ├── _forms.scss
│       ├── _tables.scss
│       └── _helpers.scss
├── README.md
├── CHANGELOG.md
├── license
├── gruntfile.js
└── package.json
{% endhighlight %}



