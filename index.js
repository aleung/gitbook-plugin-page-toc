module.exports = {
  book: {
    assets: "./assets",
    css: ["page-toc.css"],
    js: ["anchor-3.1.1.min.js","page-toc.js"]
  },
  hooks: {
    "page:before": function(page) {
      if (page['showToc']) {
        page.content = '<div class="showToc"></div>\n\n' + page.content;
      } else if (page['showToc'] == false) {
        page.content = '<div class="hideToc"></div>\n\n' + page.content;
      }
      return page;
    }
  }
}
