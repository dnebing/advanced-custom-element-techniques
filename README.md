# Advanced Custom Element Techniques

This is the public repo that goes along with my blog about Advanced Custom Element Techniques.

It really only contains one client extension, but that client extension contains all of the custom element samples.

The custom elements that I have included are:

* `<acet-idprops id='###'></acet-idprops>`: The ACET IdProps component demonstrates how we define a props custom element to accept an id. The blog post includes instructions for how to add to a page and configure.

## Using This Repo

So using the repo is really, really easy. Just follow the issuing the following commands at the command line:

```
$ blade gw initBundle
$ blade server start
$ cd client-extensions/advanced-custom-element-techniques
$ blade gw clean deploy
```

This will give you a running Liferay bundle with the custom elements built and deployed into the bundle.

Then just follow along in the blog to place the elements on the page, configure them, and use as directed.

Note that the elements presented here are only part of the picture. You really need to follow along in the blog to fully understand the advanced techniques since the elements are just part of the picture.

Use the credentials `acet-admin@acet.com` and password `learn-acet` to log in as an admin. You can find these hard-coded in the `portal-ext.properties` file, although you should of course _never_ do this in any of your real environments.