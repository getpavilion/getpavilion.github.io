---
title:  "Configuring"
date:   2016-03-31 17:06:26 +0200
postid: configuring
---

Download the source files trough NPM, Bower or source download (see: <a href="#gettingstarted" data-scroll>getting started</a>).
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
  * Paddings/borders for buttons and inputs
  */
  
$padding-input-and-button-y: 0.6rem;
$padding-input-and-button-x: 1rem;
$padding-input-and-button: $padding-input-and-button-y $padding-input-and-button-x;

$border-input-and-button: 1px; /* Borders for buttons and inputs are set to 1px by default */

/**
  * Breakpoints
  */

$phone-landscape-size: 540px;    /* Phone landscape minimum */
$tablet-portrait-size: 768px;    /* Tablet portrait minimum */
$tablet-landscape-size: 991px;   /* Tablet landscape minimum */
$desktop-size: 1200px;           /* Desktop minimum */

$breakmargin: 20px;              /* Margin added to the breakpoint */
$size-switch: $tablet-portrait-size; /* Breakpoint at which the EM & REM sizes switch to small */

/**
  * Colors and tints
  */

$body-copy-color: #333; /* Standard text color */
$heading-color: $body-copy-color;

$soft-gray: #EFEFEF;
$medium-gray: #BCBCBC;
$hard-gray: #565656;

$primary-color: #426AFB;
$accent-color: #2980b9;

$error-color: #FA435A;
$alert-color: #F5A623;
$success-color: #7ED321;

/**
  * Border radius
  */

$small-radius: 3px; /* Used on buttons, form elements, etc */
$large-radius: 10px; /* Not used, but will come in handy */

/**
  * Heading sizes
  */

$h1: 3.157em;
$h2: 2.369em;
$h3: 1.777em;;
$h4: 1.333em;
$h5: 1em;
$h6: 0.75em;

/**
  * Font-weights, you can set your own values to match your font.
  */

$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-bold: 700;

/**
  * Base font stack
  */

$base-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
$heading-font-family: $base-font-family;
$mono-font-family: "Lucida Console", Monaco, monospace;

{% endhighlight %}
    <div class="uncollapse">
        Show full example
    </div>
</div>

##### Be careful
Feel free to poke around and modify Pavilion the way you see fit. Note that when you change core files, **your changes could be overwritten** when you update Pavilion as a
dependency.

You can use the included Grunt.js file to compile your SCSS.