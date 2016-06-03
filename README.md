# gitbook-plugin-page-toc

Add table of contents to every page in your GitBook.

It adds anchors link to headings inside the page as well.

## Install

Add the plugin to your `book.json`:

``` json
    {
      "plugins": [ "page-toc" ],
      "pluginsConfig": {
        "selector": ".markdown-section h2, .markdown-section h3"
      }
    }
```

Default CSS selector is to include headings from level 1 to level 4.
