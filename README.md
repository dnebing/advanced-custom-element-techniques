# Advanced Custom Element Techniques

This is the public repo that goes along with my blog about [Advanced Custom Element Techniques](https://liferay.dev/blogs/-/blogs/advanced-custom-element-techniques).

It really only contains one client extension, but that client extension contains all of the custom element samples.

The custom elements that I have included are:

* `<acet-idprops id='###'></acet-idprops>`: The ACET IdProps component demonstrates how we define a props custom element to accept an id. The blog post includes instructions for how to add to a page and configure.
* `<acet-mode-display isEditMode='true'></acet-mode-display>`: The ACET Mode Display is a small custom element to display whether in edit mode or not given the prop value.
* `<acet-liferay-on />`: This is a simple component that uses `Liferay.on()` to receive an event, increment a counter, and display the updated value.
* `<acet-liferay-fire />`: This is a simple component that displays a button and, when clicked, uses `Liferay.fire()` to send an event.
* `<acet-single-slot />`: This is a simple component that displays some text and leverages a `<slot />` to pass data to the custom element.
* `<acet-mapping-slots isEditMode='true' id='1234' />`: This is a component that uses two slots to display a name and description. Demonstrates how to use the slots and observe them for changes.
* `<acet-mapping-display id='1234' />`: This is another custom element to support mapping and custom rendering using a table and a random FontAwesome icon.
* `<acet-featured-mechanics isEditMode='true' />`: This is the custom element used in the finale of the blog to combine various techniques together.

## Using This Repo

So using the repo is really, really easy. Just follow the issuing the following commands at the command line:

```
$ blade gw initBundle
$ blade server start
$ cd client-extensions/advanced-custom-element-techniques
$ blade gw clean deploy
$ cd ../../modules/liferay-request-attribute-contributor
$ blade gw clean deploy
```

This will give you a running Liferay bundle with the custom elements built and deployed into the bundle.

There are additional instructions in the blog for importing an object definition, creating some initial objects, and importing the completed custom fragment set.

Then just follow along in the blog to place the elements on the page, configure them, and use as directed.

Note that the elements presented here are only part of the picture. You really need to follow along in the blog to fully understand the advanced techniques since the elements are just part of the picture.

Use the credentials `acet-admin@acet.com` and password `learn-acet` to log in as an admin. You can find these hard-coded in the `portal-ext.properties` file, although you should of course _never_ do this in any of your real environments.