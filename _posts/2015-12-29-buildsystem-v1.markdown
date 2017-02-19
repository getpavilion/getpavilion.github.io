---
title:  "Grunt"
date:   2016-03-31 17:06:26 +0200
postid: grunt
categories: v1
---
The Grunt.js file shipped with the NPM, Bower and source download has two tasks. The default task ( `grunt` ) has the following subtasks:

- grunt-contrib-clean
- grunt-contrib-sass
- grunt-autoprefixer
- grunt-stripcomments
- grunt-contrib-watch

If you only want to build, and not watch, use `grunt dist`.
Both tasks produce the following files in the `dist` folder:

{% highlight html %}
dist/
├── pavilion.css
├── pavilion.min.css
└── pavilion.min.css.map
{% endhighlight %}