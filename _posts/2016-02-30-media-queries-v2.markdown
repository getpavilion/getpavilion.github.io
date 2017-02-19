---
title:  "Breakpoints"
date:   2016-03-31 17:06:26 +0200
postid: breakpoints
categories: v2
---

Pavilion's grid system works with four breakpoints which break between common device screen widths:

<table> 
    <!-- Table head -->
    <thead> 
        <tr> 
            <th>Device & orientation</th> 
            <th>Active on</th> 
            <th>Class usage</th> 
        </tr> 
    </thead>
    
    <!-- Table body -->
    <tbody> 
        <tr> 
            <td>Phone Portrait</td> 
            <td>Smaller than <strong>phone landscape</strong></td> 
            <td><code>*-pp-*</code></td> 
        </tr> 
        <tr> 
            <td>Phone Landscape</td> 
            <td><strong>540px</strong> and larger</td> 
            <td><code>*-pl-*</code></td> 
        </tr>
        <tr> 
            <td>Tablet Portrait</td> 
            <td><strong>768px</strong> and larger</td> 
            <td><code>*-tp-*</code></td> 
        </tr>
        <tr> 
            <td>Tablet Landscape</td> 
            <td><strong>991px</strong> and larger</td> 
            <td><code>*-tl-*</code></td> 
        </tr>
        <tr> 
            <td>Desktop</td> 
            <td><strong>1200px</strong> and larger</td> 
            <td><code>*-dt-*</code></td> 
        </tr>   
    </tbody>
</table>



The breakpoint classes are derived from their respective devices and orientations.
The **Phone Portrait** breakpoint uses the **Phone Landscape** width as it's maximum width.

The breakpoints can be adjusted in the `_variables.scss`, which is included in the source download and NPM/Bower installations. 
See <a data-scroll href="#gettingstarted">getting started</a> for those installations or the <a data-scroll href="#customizing">customizing</a> section for the variables.