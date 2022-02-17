---
title: Custom Colors for Syntax Highlighting
author: Mary
date: 2022-02-15 11:30
---

So while making this Gatsby blog I reached the point where I wanted to display code on my site. However, I wasn't too keen with the default color schemes that come built in. The dark theme was managable but I still wanted to customize it to add in my personality.

Code blocks are a great way to explain programming concepts since you can share examples of the code syntax. In this post I will be covering some of the ways you can imporve the code blocks on your Gatsby blog.

## Syntax Highlighting

Syntax highlighting changes the color of parts of your code to make it more readable. It is something that we are all used to having in the code editor, but you can also use inline code blocks in your markdown file and on your blog too.

The plugin I am using is [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/). You can just install it and use one of Gatsby's default templates right away.

To use syntax highlighting you will need to specify the language of your code block and you can get beautiful highlighting like so:

```ruby
name = "Mary"
```

There are many different prism themes you can use, just need to add them to yoor `gatsby-config.js` file.

```js:title=gatsby-browser.js
require("prismjs/themes/prism-solarizedlight.css")
```

With this plugin you can also focus on specific line of code - but still show the code around it. You can create this focus by using line highlighting.

This doesn't need another plugin to do since **gastby-remark-prismjs** provides this right out of the box.

If you want to highlight a specific line need to list out the line number(s). For example we want to discuss the `puts` statement we could write `rb{3}`

```ruby{2}:title=test.rb
def display_name(first_name, last_name)
  puts "#{first_name} #{last_name}"
end
```

You can also highlight more than one line `js{10-12}` and can even mix and match these two syntaxes by just separting them by commas.

You can adjust how the highlighting looks by the `.gastby-highlight-code-line` class. Can change the background color or make the lines thicker, whatever style looks good to you!

```css:title=style.css
.gatsby-highlight-code-line {
  padding: 0.5em 0.8em;
  font-size: 0.8rem;
  font-family: Consolas, Monaco, "Andale Mono";
  background-color: #494c62;
  color: white;
  z-index: 0;
  position: relative;
  border-left: 0.25em solid #ff79c6;
  border-top-right-radius: 0.3em;
  border-top-left-radius: 0.3em;
}
```

Another cool feature of the plugin is the ability to add optional line numbering. To add line numbering alongside your code, you need to import the corresponding CSS file from PrismJS, right after importing your colorscheme/theme in `gatsby-browser.js`

```js:title=gatsby-browser.js
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
```

With a massive ecosystem of plugins Gatsby makes it simple to add these improvements to your code blocks.
