---
title:  "Customizing"
date:   2016-03-31 17:06:26 +0200
postid: customizing
categories: v2
---

First download the source files trough NPM, Bower or get the source download (see: <a href="#gettingstarted" data-scroll>getting started</a>).
This enables you to customize Pavilion by setting the variables to your needs. May it be breakpoints or typography settings. Recompile <code>pavilion.scss</code> with the included <a href="#gulp" data-scroll="true">Gulp build system</a> or use your own SCSS compiler.

##### Variables reference
Head over to `scss/pavilion-parts/_variables.scss`. This file holds your project's base settings which are weaved trough the entire core
of Pavilion. All the variables are listed below with their default value's and a description.

<table class="sass-ref-table"> 
    <thead> 
        <tr> 
            <th style="width: 30%">$</th> 
            <th style="width: 30%">Default value</th>
            <th style="width: 40%">Description</th> 
        </tr> 
    </thead>
    <!-- Table body -->
    <tbody> 
        <tr> 
            <td><code>$remsize-normal</code></td> 
            <td><code>15px</code></td> 
            <td>Defines what 1 REM equals to above <code>$size-switch</code>. Used mainly for components margins and paddings.</td> 
        </tr> 
        <tr> 
            <td><code>$remsize-small</code></td> 
            <td><code>10px</code></td> 
            <td>Defines what 1 REM equals to below <code>$size-switch</code>. Used mainly for components margins and paddings.</td> 
        </tr> 
        <tr> 
            <td><code>$emsize-normal</code></td> 
            <td><code>18px</code></td> 
            <td>Defines what 1 EM equals to above <code>$size-switch</code>. Used mainly for typographic elements.</td> 
        </tr> 
        <tr> 
            <td><code>$emsize-small</code></td> 
            <td><code>15px</code></td> 
            <td>Defines what 1 EM equals to below <code>$size-switch</code>. Used mainly for typographic elements.</td> 
        </tr> 
        <tr> 
            <td><code>$phone-landscape-size</code></td> 
            <td><code>540px</code></td> 
            <td>Minimum screenwidth defined for landscape oriented phones.</code></td> 
        </tr> 
        <tr> 
            <td><code>$tablet-portrait-size</code></td> 
            <td><code>768px</code></td> 
            <td>Minimum screenwidth defined for portrait oriented tablets.</code></td> 
        </tr> 
        <tr> 
            <td><code>$tablet-landscape-size</code></td> 
            <td><code>991px</code></td> 
            <td>Minimum screenwidth defined for landscape oriented tablets.</code></td> 
        </tr> 
        <tr> 
            <td><code>$desktop-size</code></td> 
            <td><code>1200px</code></td> 
            <td>Minimum screenwidth defined for desktops.</code></td> 
        </tr> 
        <tr> 
            <td><code>$breakmargin</code></td> 
            <td><code>20px</code></td> 
            <td>Margin added to breakpoint-screenwidths. Clears the edges of the browser from the content.</code></td> 
        </tr> 
        <tr> 
            <td><code>$size-switch</code></td> 
            <td><code>$tablet-portrait-size</code></td> 
            <td>Minimum screenwidth to define where Pavilion should switch from <code>$rem/emsize-small</code> to <code>$rem/emsize-normal</code>.</td> 
        </tr> 
        <tr> 
            <td><code>$default-border-width</code></td> 
            <td><code>1px</code></td> 
            <td>Default border width. Used mainly on buttons, inputs, tables and horizontal rules.</code></td> 
        </tr> 
        <tr> 
            <td><code>$default-border-radius</code></td> 
            <td><code>4px</code></td> 
            <td>Default border-radius. Used primarily on buttons and inputs.</code></td> 
        </tr> 
        <tr> 
            <td><code>$body-copy-color</code></td> 
            <td><code>#333333</code></td> 
            <td>Default text-color.</code></td> 
        </tr> 
        <tr> 
            <td><code>$primary-color</code></td> 
            <td><code>#0080ff</code></td> 
            <td>Primary color. Used primarily on highlighted components and links.</code></td> 
        </tr> 
        <tr> 
            <td><code>$heading-color</code></td> 
            <td><code>$body-copy-color</code></td> 
            <td>Color defined for <code>h1</code> to <code>h6</code> headings.</code></td> 
        </tr> 
        <tr> 
            <td><code>$soft-gray</code></td> 
            <td><code>#D9D9D9</code></td> 
            <td>Self explanatory. Used mainly for borders.</code></td> 
        </tr> 
        <tr> 
            <td><code>$medium-gray</code></td> 
            <td><code>darken($soft-gray, 20%)</code></td> 
            <td>Self explanatory. Used on blockquote footers.</code></td> 
        </tr> 
        <tr> 
            <td><code>$hard-gray</code></td> 
            <td><code>darken($medium-gray, 20%)</code></td> 
            <td>Self explanatory. Used on input placeholders.</code></td> 
        </tr> 
        <tr> 
            <td><code>$scale-ratio</code></td> 
            <td><code>1.200</code></td> 
            <td>Ratio used by Pavilion's modular typography calculator to calculate the heading sizes. See <a href="http://type-scale.com/" target="_blank">type-scale.com</a> for more ratio's.</td> 
        </tr> 
        <tr> 
            <td><code>$h1</code></td> 
            <td><code>fontscale(4)</code></td> 
            <td>Function with an index which calculates the size for a <code>h1</code> heading.</code></td> 
        </tr>
        <tr> 
            <td><code>$h2</code></td> 
            <td><code>fontscale(3)</code></td> 
            <td>Function with an index which calculates the size for a <code>h2</code> heading.</code></td> 
        </tr>
        <tr> 
            <td><code>$h3</code></td> 
            <td><code>fontscale(2)</code></td> 
            <td>Function with an index which calculates the size for a <code>h3</code> heading.</code></td> 
        </tr>
        <tr> 
            <td><code>$h4</code></td> 
            <td><code>fontscale(1)</code></td> 
            <td>Function with an index which calculates the size for a <code>h4</code> heading.</code></td> 
        </tr>
        <tr> 
            <td><code>$h5</code></td> 
            <td><code>fontscale(0)</code></td> 
            <td>Function with an index which calculates the size for a <code>h5</code> heading. Equals 1 EM.</code></td> 
        </tr>
        <tr> 
            <td><code>$h6</code></td> 
            <td><code>fontscale(-1)</code></td> 
            <td>Function with an index which calculates the size for a <code>h6</code> heading.</code></td> 
        </tr>
        <tr> 
            <td><code>$font-weight-light</code></td> 
            <td><code>300</code></td> 
            <td>Light font-weight.</code></td> 
        </tr> 
        <tr> 
            <td><code>$font-weight-regular</code></td> 
            <td><code>400</code></td> 
            <td>Normal font-weight</code></td> 
        </tr> 
        <tr> 
            <td><code>$font-weight-medium</code></td> 
            <td><code>500</code></td> 
            <td>Medium font-weight.</code></td> 
        </tr> 
        <tr> 
            <td><code>$font-weight-bold</code></td> 
            <td><code>700</code></td> 
            <td>Heavy font-weight.</code></td> 
        </tr> 
        <tr> 
            <td><code>$base-font-weight</code></td> 
            <td><code>$font-weight-regular</code></td> 
            <td>Base font-weight. Applied on body.</code></td> 
        </tr> 
        <tr> 
            <td><code>$heading-font-weight</code></td> 
            <td><code>$base-font-weight</code></td> 
            <td>Font-weight applied on headings <code>h1</code> to <code>h6</code>.</td> 
        </tr> 
        <tr> 
            <td><code>$base-line-height</code></td> 
            <td><code>1.5</code></td> 
            <td>Standard line-height. Applied on body.</code></td> 
        </tr> 
        <tr> 
            <td><code>$base-font-family</code></td> 
            <td><code>"Helvetica Neue", Helvetica, Arial, sans-serif;</code></td> 
            <td>Default font-family.</code></td> 
        </tr> 
        <tr> 
            <td><code>$heading-font-family</code></td> 
            <td><code>$base-font-family</code></td> 
            <td>Heading font-family.</code></td> 
        </tr> 
        <tr> 
            <td><code>$mono-font-family</code></td> 
            <td><code>"Lucida Console", Monaco, monospace;</code></td> 
            <td>Font-family for code, pre and keyboard components.</code></td> 
        </tr> 
    </tbody>
</table>


##### Be careful
Feel free to poke around and modify Pavilion the way you see fit. Note that when you change core files, **your changes could be overwritten** when you update Pavilion as a
dependency.