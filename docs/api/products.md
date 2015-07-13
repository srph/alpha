---
title: products
type: Collection
---

A collection of products.

<h4 class="example-heading"> Example </h4>

{% highlight php %}
<?php
@foreach($products as $product)
  echo $product->name; // Bag
  echo $product->price; // 99.99
  echo $product->stock; // 99
@endforeach
?>
{% endhighlight %}