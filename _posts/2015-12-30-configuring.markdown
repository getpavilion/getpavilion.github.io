---
title:  "Configuring"
date:   2016-03-31 17:06:26 +0200
postid: configuring
---

Download the source files trough NPM, Bower or source download.
This enables you to customize and configure your build specifically for your project.

##### Variables
Head over to `scss/parts/_variables.scss`. This file holds your project's base settings which are weaved trough the entire core
of Pavilion. 

<div class="collapsor">
{% highlight scss %}
/**
  * Component & Type sizing, normal and small.
  */

$remsize-normal: 15px; /* Adjust this to adjust your REM sizes on tablets and larger screens, 1REM equals the size you set here. */
$emsize-normal: 18px;  /* Adjust this to adjust your EM sizes on tablets and larger screens. EM is used for typography. 1EM equals the size you set here.*/

$remsize-small: 10px; /* Adjust this to adjust your REM sizes on phones, 1REM equals the size you set here. */
$emsize-small: 16px;  /* Adjust this to adjust your EM sizes on phones. EM is used for typography. 1EM equals the size you set here.*/

/**
  * Line-height
  */

$line-height-normal: 1.5; 

/**
  * Breakpoints
  */

$phone-landscape-size: 540px;    /* Phone landscape minimum */
$tablet-portrait-size: 768px;    /* Tablet portrait minimum */
$tablet-landscape-size: 991px;   /* Tablet landscape minimum */
$desktop-size: 1200px;           /* Desktop minimum */

$breakmargin: 20px;              /* Margin added to the breakpoint */

/**
  * Colors and tints
  */

$body-copy-color: #333;
$soft-gray: #EFEFEF;
$hard-gray: #565656;
$primary-color: #426AFB;
$accent-color: #2980b9;

/**
  * Border radius
  */

$small-radius: 3px; /* Used on buttons, form elements, etc */
$large-radius: 10px; /* Not used, but will come in handy */

/**
  * Font-weights, you can set your own values to match your font.
  */

$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-bold: 700;

/**
  * Base font stack
  */

$base-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
$mono-font-family: "Lucida Console", Monaco, monospace;

{% endhighlight %}
    <div class="uncollapse">
        Show full example
    </div>
</div>

##### Other files
Feel free to poke around and modify Pavilion the way you see fit. Note that when you change core files, **your changes could be overwritten** when you update Pavilion as a
dependency.

You can use the included Grunt.js file to compile your SCSS.