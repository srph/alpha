---
title: Configuring
---

The theme is very simple.

First, check `config.yml`, and change *Site settings* where you see fit. You should see something similar upon opening the file:

<h4 class="example-heading">config.yml</h4>
{% highlight yaml %}
# Site settings
title: Alpha
baseurl: "" # the subpath of your site, e.g. /blog/
url: "http://localhost" # the base hostname & protocol for your site

exclude: ["design"]
{% endhighlight %}

All pages are placed in the `docs` directory; inside its `api` and `intro` sub directory.

If you would like to alter the directory names or add more directories (we use it as a section, **check the menu**), change it along with the default configs.

{% highlight yaml %}
# Defaults
defaults:
  -
    scope:
      path: ""
    values:
      layout: "default"
  -
    scope:
      path: "docs/api"
    values:
      section: "api"
  -
    scope:
      path: "docs/intro"
    values:
      section: "intro"
{% endhighlight %}

If you would to make your new section available, check `_includes/sidebar.html`.