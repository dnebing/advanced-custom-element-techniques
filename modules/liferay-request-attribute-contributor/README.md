# Liferay Request Attribute Contributor

So this is just an OSGi module which adds some template context contributors to the FreeMarker context.

You don't really want to use them in a website, but they can be useful if you say want to find a particular attribute that you plan on later using for passing to a Prop on a custom element ;-)

Note that I cannot take credit for this, this is actually work done by my good friend Olaf Kock. You can find his repo here: https://github.com/olafk/liferay-request-attribute-contributor-web

# Using These Contributors

So first you want to `blade gw clean deploy` in this directory to deploy the module to your container.

Next I suggest going into the *Design* -> *Fragments* control panel and create two new Basic fragments.

The first I called *FreeMarker Context* and the HTML section I just set to:

```
<div>
	${templateDumper}
</div>
```

And a second fragment I called *Request Attributes* and in the HTML section I just set to:

```
<div>
	${requestAttributes}
</div>
```

This gives you two fragments that you can use when editing a page. Just drop them in the appropriate place and it will list everything. Note that I wouldn't rely so much on the Edit mode myself, switch to the View mode to ensure what you need is going to be there.

But basically you can use this to understand just what is going to be available to you. It isn't pretty, but it's not meant to be. You use it to find what you want, then delete it from the page and use the info to create the right custom fragment.