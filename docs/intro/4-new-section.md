---
title: New Section
---

All pages are placed in the `docs` directory; inside its `api` and `intro` sub directory.

To make things easier to explain, let's say that we're making a new section called "Other".

## Configuration

Check `_config.yaml`, and you should see something similar:

{% highlight yaml %}
  -
    scope:
      path: "docs/intro"
    values:
      section: "intro"
{% endhighlight %}

Copy-paste the following lines (below the last section; it won't affect the order in the sidebar), and alter it to your new section. We should have the following now:

{% highlight yaml %}
# other stuff above..
  -
    scope:
      path: "docs/intro"
    values:
      section: "intro"
  -
    scope:
      path: "docs/others"
    values:
      section: "others"
{% endhighlight %}

To add a new page, simply add a markdown file to the `docs/others` directory.

## Adding to the sidebar

To make your new section appear in the sidebar, check `_includes/sidebar.html`. You should see something similar:

{% highlight liquid %}
  {% raw %}
<section>
  <h4 class="heading -bordered"> Getting Started </h4>
  {% for page in site.pages %}
    {% if page.section == "intro" %}
      <a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
    {% endif %}
  {% endfor %}
</section>
  {% endraw %}
{% endhighlight %}

Let's copy it, paste it below the copied code, and alter it a little bit (`page.section` and heading), and we should have the following now:

{% highlight liquid %}
  {% raw %}
<section>
  <h4 class="heading -bordered"> Getting Started </h4>
  {% for page in site.pages %}
    {% if page.section == "intro" %}
      <a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
    {% endif %}
  {% endfor %}
</section>

<section>
  <h4 class="heading -bordered"> Getting Started </h4>
  {% for page in site.pages %}
    {% if page.section == "others" %}
      <a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
    {% endif %}
  {% endfor %}
</section>
  {% endraw %}
{% endhighlight %}
