---
title:  "Configuring"
date:   2016-03-31 17:06:26 +0200
postid: configuring
---

Download the source files trough NPM, Bower or source download.
This enables you to customize and configure your build specifically for your project.

##### Variables
Head over to `scss/parts` and you'll find the core files for Pavilion.
`_variables.scss` holds your project's base settings which are weaved trough the entire core
of Pavilion. Extended documentation about each variable can be found in the file itself.

<div class="collapsor">
<h6 class="mute"><i class="material-icons">arrow_forward</i>File example. Full file and specific documentation in _variables.scss</h6>
{% highlight scss %}
/**
  * Component & Type sizing, normal and small.
  */

$remsize-normal: 15px;
$emsize-normal: 18px;

$remsize-small: 10px;
$emsize-small: 16px;

/**
  * Line-height
  */

$line-height-normal: 1.5;

/**
  * Breakpoints
  */

$phone-landscape-size: 540px;
$tablet-portrait-size: 768px;
$tablet-landscape-size: 991px;
$desktop-size: 1200px;

$breakmargin: 20px;

/**
  * Colors and tints
  */

$body-copy-color: #333;
$soft-gray: #E1E1E1;
$hard-gray: #565656;
$primary-color: #4283FB;
$accent-color: #2980b9;

/**
  * Border radius
  */

$small-radius: 3px;
$large-radius: 10px;

/**
  * Font-weights
  */

$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-bold: 700;

/**
  * Base font stack
  */

$base-font-family: "Segoe UI", "Ubuntu", "Helvetica Neue", sans-serif !default;
$mono-font-family: "Lucida Console", Monaco, monospace;

{% endhighlight %}
    <div class="uncollapse">
        Show full example
    </div>
</div>

##### Other files
Feel free to poke around and modify Pavilion to your liking. Note that when you change core files, **your changes could be overwritten** when you update Pavilion as a
dependency.

You can use the included Grunt.js file to compile your SCSS.