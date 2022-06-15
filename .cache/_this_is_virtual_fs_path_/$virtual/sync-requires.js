
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Sean/Projects/studious-guacamole/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Sean/Projects/studious-guacamole/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Sean/Projects/studious-guacamole/src/pages/about.js")),
  "component---src-pages-docs-index-js": preferDefault(require("/Users/Sean/Projects/studious-guacamole/src/pages/docs/index.js")),
  "component---src-pages-docs-mdx-slug-js": preferDefault(require("/Users/Sean/Projects/studious-guacamole/src/pages/docs/{mdx.slug}.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Sean/Projects/studious-guacamole/src/pages/index.js"))
}

