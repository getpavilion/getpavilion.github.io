---
title:  "Containers"
date:   2016-03-31 17:06:26 +0200
postid: containers
---

To keep all your elements packed in consistent left and right paddings you should wrap
them in containers. Basically you have three types of containers.

##### Standard (fixed width) container
This container has a default max-width of 1140px and is centered in the viewport.
{% highlight html %}
<div class="container">
    <!-- Container width: 1140px -->
</div>
{% endhighlight %}

##### Full width container
{% highlight html %}
<div class="container-full-width">
    <!-- Container width: 100% -->
</div>
{% endhighlight %}

##### Breakpoint specific containers
{% highlight html %}
<div class="container-pl">
    <!-- Container width: phone landscape / 540px -->
</div>

<div class="container-tp">
    <!-- Container width: tablet portrait / 768px -->
</div>

<div class="container-tl">
    <!-- Container width: tablet landscape / 991px -->
</div>
{% endhighlight %}

Breakpoint specific container are of good use when creating narrow designs. They behave like standard containers but
have a smaller max-width.


