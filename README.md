# gitbook-plugin-page-toc

Add Table of Contents (TOC) to every page in your GitBook.

It adds anchors link to headings inside the page as well.

![](https://raw.githubusercontent.com/aleung/gitbook-plugin-page-toc/master/doc/screenshot-1.png)

## Install

Add the plugin to your `book.json`:

``` json
    {
      "plugins": [ "page-toc" ],
      "pluginsConfig": {
      }
    }
```

## Configuration

- `selector` : CSS selector to select the elements to put anchors on
  - Default: `.markdown-section h1, .markdown-section h2, .markdown-section h3, .markdown-section h4`,
    which include headings from level 1 to level 4.
- `position` : Position of TOC
  - Allowed values:
    - `before-first` _(default)_ : Before the first heading
    - `top` : On top of the page

## CSS Customization

The TOC elements have class attribute `.page-toc`. You can override the styles in `styles/website.css`.
