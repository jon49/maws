The idea of `maws` is to create a "static" website generator which doesn't need every page constantly regenerated every time a template is changed. Doing this much work every time a file changes makes me think that the separation of concerns isn't properly considered. So, in short, **`maws` puts the back end in the front end**.

In order to make it so the separation of concerns is properly considered we need a very basic layout that can always be repeated. As in the book [*Human JavaScript*](http://humanjavascript.com/) points out the separation of concerns can be better implemented by putting all layout information in the JavaScript files. By doing this we can have a single `index.html` file for all files. We could reroute the error file (404) back to the main index file, allowing for the single index file to handle all routing. The single index.html file calls the JavaScript file(s) which handle all the routing, structure, and content (from markdown/html files).

This could be done easily with a server, as each call to a page could just be redirected to your single `html`. But I only want to build on the front end. Well, that is where [Amazon's AWS](http://aws.amazon.com/) comes into play. Amazon gives us a front end API to be able to work with our files on the server. So it is now possible to request the desired markdown file and load it on the fly; all on the front end.

Example HTML file:

```javascript
<!DOCTYPE html>
<link href="/all.css" rel="stylesheet">
<script src="/all.js"></script>
```

Although the days of the back end aren't over, the back end isn't really needed for as many things today as it used to be. It is time we separate out the concerns of the back end from the concerns of the front end. It is exciting to be programming while this is happening.

This project is similar to [Rob Rohan's RiZhi (or journal) project](https://github.com/robrohan/rizhi), except I will be putting the AWS integration and will be using Mithril.js.

Problems with this approach:

- JavaScript required.
