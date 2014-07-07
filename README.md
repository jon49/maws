The idea of `maws` is to create a `static website generator` which doesn't need every page constantly regenerated every time a template is changed. Doing this much work every time a file changes makes me think that the separation of concerns isn't properly considered.

In order to make it so the separation of concerns is properly considered we need a very basic layout that can always be repeated. As in the book [*Human JavaScript*](http://humanjavascript.com/) points out the separation of concerns can be better implemented by putting all layout information in the JavaScript files.

Now, it would be nice to take that step one step further. Why have multiple files buried in multiple folders for each post? Why not just grab the content for each post from a markdown file? Then we could have a single `html` file for the entire website. Or, just have a few `html` files, at most.

This could be done easily with a server, as each call to a page could just be redirected to your single `html`. But I only want to build on the front end. Well, that is where [Amazon's AWS](http://aws.amazon.com/) comes into play. Amazon gives us a front end API to be able to work with our files on the server. So it is now possible to request the desired markdown file and load it on the fly; all on the front end.

Example HTML file:

```javascript
<!DOCTYPE html>
<link href="/all.css" rel="stylesheet">
<script src="/all.js"></script>
```

If we decided that we don't like our blog url to look like `https://my-blog.com#2014-07-07-my_first_post` and would rather that it look like a "normal" link like `https://my-blog.com/2014/07/07/my_first_post` then it is possible to create all the files with the minimal file text like above buried in folders, of course, then we would still have to regenerate all the files, or possibly delete files and folders if you decided you didn't like that post -- the complexity definitely increases.
`
It is also desirable to reference other blog posts, like the next blog post, or the previous post. These posts could be predownloaded and then you can grab the metadata (yaml data at top of markdown file) add them to the bottom of your post. When the client clicks on either of the posts (next or previous) it can be immediately shown and then another markdown file can be downloaded to add to the next/previous. Since it is just a simple markdown file with no pictures or graphics or extra markdown it makes the files extremely small and the client wouldn't even notice.

I like the idea of [Mithril.js](http://lhorie.github.io/mithril/) which a small library which is similar to React.js, just faster and smaller. The speed/effeciency is important if we are keeping everything on the front end.

Although the days of the back end aren't over, the back end isn't really needed for as many things today as it used to be. It is time we separate out the concerns of the back end from the concerns of the front end. It is exciting to be programming while this is happening.

This project is similar to [Rob Rohan's RiZhi (or journal) project](https://github.com/robrohan/rizhi), except I will be putting the AWS integration and will be using Mithril.js.

Problems with this approach:

- JavaScript required.
